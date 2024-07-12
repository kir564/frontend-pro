import webpack from 'webpack';
import { BuildPaths } from '../build/types/config';
import path from 'path';
import {
  buildBabelLoader,
  buildCssLoader,
  buildFileLoader,
} from '../build/loaders';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  // config.resolve?.modules?.push(paths.src);
  config.resolve?.modules?.push(
    path.relative(__dirname, paths.src),
    'node_modules',
  );
  config.resolve?.extensions?.push('.ts', '.tsx');

  if (config.module && config.module.rules) {
  }

  // @ts-ignore
  config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
    if (/svg/.test(rule?.test as string)) {
      return {
        ...rule,
        exclude: /\.svg$/i,
      };
    }
    return rule;
  });

  config.module?.rules?.push(buildCssLoader(true));
  config.module?.rules?.push(buildBabelLoader());
  config.module?.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  // config.module?.rules.push(buildFileLoader());

  config.plugins?.push(
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify(''),
    }),
  );

  return config;
};
