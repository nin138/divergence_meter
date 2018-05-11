const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const mode = "production";

module.exports = {
  mode: mode,
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "dist/bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [{
      test: /\.(ts|tsx)$/,
      use: ['babel-loader', 'awesome-typescript-loader']
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader',
          options: {
            minimize: true,
            modules: true,
            importLoaders: 1,
            localIdentName: '[local]--[hash:base64:5]',
          }
        }, {
          loader: "postcss-loader",
        }]
      })
    }],
  },
  plugins: [
    new ExtractTextPlugin(path.relative(__dirname, 'dist/style.css')),
    new CopyWebpackPlugin([
      { from: 'static/*', to: './', flatten: true },
    ]),
    new UglifyJsPlugin(),
  ],
};
