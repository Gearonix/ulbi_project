import {Theme} from 'shared/config/contexts/ThemeContext'
import {Story as StoryType} from '@storybook/react'
import cn from 'classnames'

export const ThemeDecorator = (theme: Theme) => (Story: StoryType) => {
  return <div className={cn('App', theme)}>
    <Story/>
  </div>
}
