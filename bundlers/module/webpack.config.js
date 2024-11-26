const path = require('path');

module.exports = {
  mode: 'development',
  entry: './wrappers/module/DataMessengerWrapper.js', // Entry point for your custom script
  output: {
    filename: 'autoql-data-messenger-module-bundle.js', // Output bundle
    path: path.resolve(__dirname, '../../dist'),
    library: {
      type: 'module', // Export as an ES Module
    },
  },
  experiments: {
    outputModule: true, // Enable ES Module output
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  devServer: {
    static: './public',
    port: 3000,
  },
};
