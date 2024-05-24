import HtmlWebpackPlugin from 'html-webpack-plugin';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export const buildPlugins = (
  options: BuildOptions
): webpack.WebpackPluginInstance[] => [
  new HtmlWebpackPlugin({
    template: options.paths.html,
  }),
  new webpack.ProgressPlugin(),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  }),
];