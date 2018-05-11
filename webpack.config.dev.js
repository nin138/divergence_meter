const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [{
      test: /\.(ts|tsx)$/,
      use: ['babel-loader', 'awesome-typescript-loader']
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
            sourceMap: true,
          }},
        {
          loader: "postcss-loader",
          options: {
            sourceMap: true,
          }
        }
      ]
    }],
  },
  devServer: {
    contentBase: path.resolve("static"),
  },
};
