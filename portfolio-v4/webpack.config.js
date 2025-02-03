const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  mode: "development", // Mettre "production" en ligne
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    assetModuleFilename: "images/[hash][ext][query]", // 🔥 Stockage des images optimisé
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // ✅ Support JS et JSX
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/, // ✅ Support CSS
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/, // ✅ Support images
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // ✅ Support fonts
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext][query]",
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["mozjpeg", { quality: 75 }],
              ["optipng", { optimizationLevel: 5 }],
              ["gifsicle", { interlaced: false }],
              ["svgo", { plugins: [{ removeViewBox: false }] }],
            ],
          },
        },
      }),
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    static: "./dist",
    hot: true,
    port: 3000,
    open: true, // Ouvre automatiquement le navigateur
  },
  plugins: [
    new CleanWebpackPlugin(), // Nettoie le dossier dist
    new MiniCssExtractPlugin({ filename: "styles.css" }), // Extraction CSS
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Utilisation d'un template HTML
      filename: "index.html",
      inject: "body",
    }),
  ],
};
