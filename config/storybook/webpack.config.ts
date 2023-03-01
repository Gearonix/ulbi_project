import {Configuration, RuleSetRule, DefinePlugin} from 'webpack'
import {scssLoader, svgLoader} from '../build/loaders'
import {resolve} from 'path'


export default ({config}: { config: Configuration }) => {
  config.module.rules.push(scssLoader(true))

  config.resolve.modules.push(resolve(__dirname, '..', '..', 'src'))
  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return {...rule, exclude: /\.svg$/i}
    }

    return rule
  })
  config.module.rules.push(svgLoader())
  config.plugins.push(new DefinePlugin({
    __IS_DEV__: true,
  }))

  return config
}
