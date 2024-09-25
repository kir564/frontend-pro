import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader, buildBabelLoader, buildFileLoader } from './loaders';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  // const typescriptLoader = {
  //   test: /\.tsx?$/,
  //   use: 'ts-loader',
  //   exclude: /node_modules/,
  // };

  const codeBabelLoader = buildBabelLoader(false);
  const tsxBabelLoader = buildBabelLoader(true);

  const fileLoader = buildFileLoader();

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const cssLoader = buildCssLoader(options.isDev);

  return [
    fileLoader,
    svgLoader,
    codeBabelLoader,
    tsxBabelLoader,
    // typescriptLoader,
    cssLoader,
  ];
};
