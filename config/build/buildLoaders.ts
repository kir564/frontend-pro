import webpack from 'webpack';
import { BuildOptions } from './types/config';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const babelLoader = {
    test: /\.(js|ts|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  };

  const fileLoader = {
    test: /\.(png|jpg|gif|woff2|woff)$/,
    use: [
      {
        loader: 'file-loader',
        options: {},
      },
    ],
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
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

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
};
