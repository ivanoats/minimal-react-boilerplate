const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: path.resolve(__dirname + "/dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      appMountId: "app",
      template: "./src/index.html"
    })
  ],
  devServer: {
    contentBase: "./dist",
    host: "0.0.0.0",
    allowedHosts: [".ivanstorck.com"],
    disableHostCheck: true
  }
}
