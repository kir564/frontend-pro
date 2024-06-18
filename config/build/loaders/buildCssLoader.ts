import webpack from 'webpack';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

export const buildCssLoader = (isDev: boolean): webpack.RuleSetRule => {
  return {
    test: /\.(sc|sa|c)ss$/i, // [/\.s[ac]ss$/i, /\.css$/i],
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /.module./,
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:5]',
          },
        },
      },
      ,
      'sass-loader',
    ],
  };
};
