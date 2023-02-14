import {loader as MiniCssLoader} from 'mini-css-extract-plugin'

export const scssLoader = (isDev: boolean) => ({
  test: /\.s[ac]ss$/i,
  use: [
        isDev ? 'style-loader' : MiniCssLoader,
        'css-modules-typescript-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: (filename: string) => !!filename.includes('.module.'),
              localIdentName: isDev ? '[name]__[local]' : '[hash:base64:8]',
            },
          },
        },
        'sass-loader',
  ],
})
