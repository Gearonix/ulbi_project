import {addDecorator} from '@storybook/react'
import {RouterDecorator, StyleDecorator, ThemeDecorator} from 'shared/config/storybook/decorators'
import {Theme} from 'shared/config/contexts/ThemeContext'
import {createViewPorts} from './lib/helpers'
import {viewports} from './config/viewports'

export const parameters = {
  viewport: {
    viewports: createViewPorts(viewports),
  },
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(RouterDecorator)
