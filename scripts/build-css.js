const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const reactAutoqlCssPath = path.join(projectRoot, 'node_modules', 'react-autoql', 'dist', 'autoql.esm.css');
const overridesCssPath = path.join(projectRoot, 'src', 'overrides.css');

const distRoot = path.join(projectRoot, 'dist');
const distCssPath = path.join(distRoot, 'autoql-vanilla-wrapper.css');
const cjsCssPath = path.join(distRoot, 'cjs', 'autoql-vanilla-wrapper.css');
const esmCssPath = path.join(distRoot, 'esm', 'autoql-vanilla-wrapper.css');

function readFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing required CSS file: ${filePath}`);
  }
  return fs.readFileSync(filePath, 'utf8');
}

function writeFileWithDir(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
}

function buildCssBundle() {
  const reactAutoqlCss = readFile(reactAutoqlCssPath);
  const overridesCss = readFile(overridesCssPath);

  const bundle = `${reactAutoqlCss}\n\n/* autoql-vanilla-wrapper overrides */\n${overridesCss}\n`;

  writeFileWithDir(distCssPath, bundle);
  writeFileWithDir(cjsCssPath, bundle);
  writeFileWithDir(esmCssPath, bundle);
}

buildCssBundle();
