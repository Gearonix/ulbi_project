module.exports = {
  'stories': [
    '../../src/**/*.stories.mdx',
    '../../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-viewport',
    {
      'name': 'storybook-css-modules',
      'options': {
        'importLoaders': 1,
        'modules': {
          'localIdentName': '[path][name]__[local]--[hash:base64:5]',
        },
      },
    },

  ],
  'framework': '@storybook/react',
  'core': {
    'builder': '@storybook/builder-webpack5',
  },
}
