import {ComponentMeta, ComponentStory} from '@storybook/react'
import Button from './Button'
import {ThemeDecorator} from 'shared/config/storybook/decorators'
import {Theme} from 'shared/config/contexts/ThemeContext'

export default {
  title: 'shared/Button',
  component: Button,
  args: {
    children: 'hffelloworld',
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  theme: 'simple',
}


export const Secondary = Template.bind({})
Secondary.args = {
  children: 'helloworld',
  theme: 'colored',
}

export const DarkPrimary = Template.bind({})
DarkPrimary.args = {
  children: 'dark Primary example',
  theme: 'simple',
}
DarkPrimary.decorators = [ThemeDecorator(Theme.DARK)]
