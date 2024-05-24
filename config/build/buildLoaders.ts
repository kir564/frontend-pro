import webpack from 'webpack';
import { BuildOptions } from './types/config';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.(sc|sa|c)ss$/i, // [/\.s[ac]ss$/i, /\.css$/i],
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /.module./,
            localIdentName: options.isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:5]',
          },
        },
      },
      ,
      'sass-loader',
    ],
  };

  return [typescriptLoader, cssLoader];
};
