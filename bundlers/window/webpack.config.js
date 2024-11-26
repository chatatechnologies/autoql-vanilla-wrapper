const path = require('path');

module.exports = {
  entry: './wrappers/window/DataMessengerWrapper.js', // Entry point for your custom script
  output: {
    filename: 'autoql-data-messenger-window-bundle.js', // Output bundle
    path: path.resolve(__dirname, '../../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  mode: 'production',
};
