export const buildFileLoader = () => ({
  test: /\.(png|jpg|gif|woff2|woff)$/,
  use: [
    {
      loader: 'file-loader',
      options: {},
    },
  ],
});
