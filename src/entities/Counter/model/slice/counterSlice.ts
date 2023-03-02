import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {CounterSchema} from 'entities/Counter'

const initialState: CounterSchema = {
  value: 0,
  title: 'initial_title',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    setTitle: (state, {payload}: PayloadAction<string>) => {
      state.title = payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {actions: counterActions} = counterSlice
export const counterReducer = counterSlice
