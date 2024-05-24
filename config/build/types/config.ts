import webpack from 'webpack';

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}

export interface BuildOptions {
  mode: webpack.Configuration['mode'];
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}

export interface BuildEnv {
  port: number;
  mode: webpack.Configuration['mode'];
}
