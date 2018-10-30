const path = require("path");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: "./src/main.ts",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  watch: true,
  resolve: {
    extensions: [".ts", ".js"]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        include: /\.min\.js$/
      })
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: process.env.IP || "localhost",
      port: process.env.PORT || 3000,
      server: {
        baseDir: ["./", "./dist"]
      }
    })
  ]
};
