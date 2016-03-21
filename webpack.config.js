var webpack = require("webpack");

module.exports = {
  entry: __dirname + '/app_modules/js/main.js',
  output: {
    path: __dirname + "/",
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.scss$/, loaders: ["style", "css", "sass"] }
    ]
  },
  devtool: "inline-source-map"
};