const path = require("path");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

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
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: process.env.IP || "localhost",
      port: process.env.PORT || 3000,
      server: {
        baseDir: ["./", "./dist"]
      }
    })
  ],
  watch: true,
  devtool: "source-map"
};
