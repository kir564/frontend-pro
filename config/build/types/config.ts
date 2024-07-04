import webpack from 'webpack';

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface BuildOptions {
  mode: webpack.Configuration['mode'];
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  apiUrl: string;
}

export interface BuildEnv {
  port: number;
  mode: webpack.Configuration['mode'];
  apiUrl: string;
}
