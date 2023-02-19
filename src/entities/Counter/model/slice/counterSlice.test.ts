import {counterActions, counterReducer} from 'entities/Counter/model/slice/counterSlice'

interface CounterSchema{
    value: number
}


describe('counterSlice', () => {
  test('should return counter value', () => {
    const state : CounterSchema = {
      value: 10,
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
