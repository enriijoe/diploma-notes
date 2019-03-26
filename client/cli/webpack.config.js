const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const ENVIRONMENT = process.env.NODE_ENV;
const ROOT_PATH = path.resolve(__dirname, '..');
const ENTRY_FILE = path.resolve(ROOT_PATH, './src/main.js');
const TEMPLATE_FILE = path.resolve(ROOT_PATH, './src/index.html');
const OUTPUT_PATH = path.resolve(ROOT_PATH, './target');

const TARGET_PATH = path.resolve(ROOT_PATH, './target');

module.exports = {
  mode: ENVIRONMENT,
  entry: ENTRY_FILE,
  output: {
    path: OUTPUT_PATH,
    filename: 'bundle.js',
    publicPath: './'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@View': path.resolve(ROOT_PATH, './src/view/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: TEMPLATE_FILE
    })
  ],
  devServer: {
    contentBase: TARGET_PATH,
    compress: true,
    port: 3000,
    historyApiFallback: true,
    host: "localhost",
    inline: true,
    publicPath: '/'
  }
};
