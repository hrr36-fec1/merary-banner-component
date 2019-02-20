const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/'),
  },
  mode: 'development',
  devtool: 'inline-source-map',
  target: 'node',
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    module: 'empty',
    vertx: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
    ],
  }
};