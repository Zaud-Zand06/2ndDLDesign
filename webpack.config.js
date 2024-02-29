const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const pages = ["index", "menu", "secret-menu"];
const entry = pages.reduce((config, page) => {
  config[page] = `./src${page}.js`;
  return config;
}, {});

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [].concat(
    pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: true,
          template: `./src/${page}.html`,
          filename: `${page}.html`,
          chunks: ["index"],
        })
    ),
    [
      new HtmlWebpackPlugin({
        title: "DL Design",
        template: "./src/index.html",
      }),
    ]
  ),
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
