const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx", // Entry point for the app
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js",
    clean: true, // Clears old files in dist
  },
  devtool: "source-map", // Enables source maps for debugging
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"], // File extensions Webpack should handle
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Handle .tsx and .ts files
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // Handle CSS files
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|svg|webp)$/, // Handle image files
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Use an HTML template
     //favicon: "./src/assets/assets/favicon.svg", // Optional: favicon
    }),
  ],
  devServer: {
    static: "./dist",
    hot: true, // Enables hot module replacement
    port: 3000,
    open: true, // Automatically opens the app in the browser
  },
};
