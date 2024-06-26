import { BuildOptions } from './types/config';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export const buildDevServer = (
  options: BuildOptions,
): DevServerConfiguration => {
  return {
    port: options.port,
    // static: options.paths.html,
    historyApiFallback: true,
    hot: true,
    client: {
      overlay: false,
    },
  };
};
