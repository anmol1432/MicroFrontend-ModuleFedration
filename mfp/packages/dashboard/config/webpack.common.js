const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");

module.exports = {
  entry: "./src/index.js",   // ✅ fixed (was export)
  output: {                  // ✅ moved to root
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // optional: clears dist folder on build
  },
  resolve: {                 // ✅ moved to root
    extensions: [".js", ".vue"],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,   // ✅ fixed typo "woof" → "woff"
        use: [
          { loader: "file-loader" }
        ]
      },
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.s?css$/,   // ✅ shorter regex
        use: ["vue-style-loader", "style-loader", "css-loader", "sass-loader"]
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin()
  ],
};
