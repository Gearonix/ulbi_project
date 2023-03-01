import {ComponentMeta, ComponentStory} from '@storybook/react'
import {Counter} from './Counter'
import {RouterDecorator} from 'shared/config/storybook/decorators/StoreDecorator'
import {counterReducer} from 'entities/Counter'

export default {
  title: 'entities/Counter',
  component: Counter,
  argTypes: {},
} as ComponentMeta<typeof Counter>

const Template: ComponentStory<typeof Counter> = (args) => <Counter />

export const Default = Template.bind({})
Default.args = {

}
const asyncReducers = {
  counter: counterReducer,
}


Default.decorators = [RouterDecorator({asyncReducers})]
