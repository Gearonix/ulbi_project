import {ComponentMeta, ComponentStory} from '@storybook/react'
import Header from './Header'
import {ThemeDecorator} from 'shared/config/storybook/decorators'
import {Theme} from 'shared/config/contexts/ThemeContext'

export default {
  title: 'widgets/Header',
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})

Dark.decorators = [ThemeDecorator(Theme.DARK)]

