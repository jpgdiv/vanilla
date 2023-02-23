const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env) => ({
  entry: './src/index.ts',
  mode: env.production ? 'production' : 'development',
  output: {
    filename: 'main.[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          env.production ? MiniCssExtractPlugin.loader:  "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: env.development,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: env.development,
            },
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          env.production ? MiniCssExtractPlugin.loader:  "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: env.development,
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
    new MiniCssExtractPlugin({
      filename: env.production ? "[name].[hash].css" : "[name].css",
      chunkFilename: env.production ?  "[id].[hash].css" : "[id].css",
    }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: "src/images",
    //       to: "dist/images/",
    //       transform(content, path) {
    //         return content;
    //       },
    //     },
    //   ],
    // }),
  ],

});