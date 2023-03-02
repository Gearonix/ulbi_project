import {counterActions, counterReducer} from 'entities/Counter/model/slice/counterSlice'
import {CounterSchema} from '../types/counterSchema'


describe('counterSlice', () => {
  test('should return counter value', () => {
    const state : CounterSchema = {
      value: 10,
      title: 'sdf',
    }

    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 11,
    })
  })
  test('should work with initial state', () => {
    expect(counterReducer(undefined, counterActions.decrement())).toEqual({
      value: -1,
    })
  },
  )
})
