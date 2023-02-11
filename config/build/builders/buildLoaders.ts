import {RuleSetRule} from 'webpack';
import {loader as MiniCssLoader} from 'mini-css-extract-plugin';
import {BuildOptions} from '../types';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };


  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssLoader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (filename: string) => !!filename.includes('.module.'),
            localIdentName: options.isDev ? '[name]__[local]' : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const imagesLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

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
  };

  return [
    imagesLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    scssLoader,
  ];
};
