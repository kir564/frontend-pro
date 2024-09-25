import { babelRemovePropsPlugin } from '../../babel/babelRemovePropsPlugin';

export const buildBabelLoader = (isTsx: boolean) => ({
  test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
        ['@babel/preset-react', { runtime: 'automatic' }],
      ],
      plugins: [
        '@babel/plugin-transform-runtime',
        ['@babel/plugin-transform-typescript', { isTsx }],
        ...(isTsx
          ? [[babelRemovePropsPlugin, { props: ['data-testid'] }]]
          : []),
      ],
    },
  },
});
