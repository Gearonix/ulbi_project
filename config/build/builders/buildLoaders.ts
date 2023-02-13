import {RuleSetRule} from 'webpack'
import {BuildOptions} from '../types'
import {scssLoader} from '../loaders'

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }


  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const imagesLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const babelLoader = {
    test: /\.(js|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        'presets': ['@babel/preset-env'],
        'plugins': [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
            },
          ],
        ],
      },
    },
  }

  return [
    imagesLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    scssLoader(options.isDev),
  ]
}
