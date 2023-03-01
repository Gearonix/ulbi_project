import {Story as StoryType} from '@storybook/react'
import {StateSchema, StoreProvider} from 'app/providers/StoreProvider'
import {ReactNode} from 'react'
import {DeepPartial, ReducersMapObject} from '@reduxjs/toolkit'


interface RouterRecoratorProps{
  children?: ReactNode,
  asyncReducers: DeepPartial<ReducersMapObject<StateSchema>>
}

export const RouterDecorator = ({asyncReducers}: RouterRecoratorProps) => (Story: StoryType) => {
  return <StoreProvider initialState={{
    counter: {
      value: 20,
    },
  }}>
    <Story/>
  </StoreProvider>
}
