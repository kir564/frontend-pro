import webpack from 'webpack';
import { BuildOptions } from './types/config';

export const buildResolvers = (
  options: BuildOptions,
): webpack.ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.js'],
  alias: {},
  preferAbsolute: true,
  mainFiles: ['index'],
  modules: [options.paths.src, 'node_modules'],
});
