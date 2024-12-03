const path = require('path');

module.exports = [
  // CommonJS build
  {
    mode: 'production',
    entry: './src/index.js',
    output: {
      filename: 'autoql-vanilla-wrapper.cjs.js', // Output file for CommonJS
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'commonjs2', // Export as CommonJS
      clean: true, // Clean output directory before each build
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'], // Transpile modern JS for CommonJS
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'], // Process CSS files
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      fallback: {
        // Ensure proper handling of missing modules
        fs: false,
        path: false,
        os: false,
      },
    },
  },
];
