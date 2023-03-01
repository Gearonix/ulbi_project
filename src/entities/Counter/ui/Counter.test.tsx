import componentRender from 'shared/lib/tests/componentRender'
import {Counter} from 'entities/Counter'
import {fireEvent, screen} from '@testing-library/react'
import {userEvent} from '@storybook/testing-library'
import axios from 'axios'
import {configureStore, Dispatch} from '@reduxjs/toolkit'
import {doSomething} from './Counter'
import {counterActions, counterReducer, counterSlice} from 'entities/Counter/model/slice/counterSlice'
import {createReduxStore, StateSchema} from 'app/providers/StoreProvider'
import {TestAsyncThunk} from 'shared/lib/tests/TestAsyncThunk'


jest.mock('axios')

const initialStore = {
  counter: {
    value: 12,
  },
}

const moxios = jest.mocked(axios)

describe('Component Counter', () => {
  let mockStore = {...initialStore}
  let dispatch: Dispatch
  let getState: () => StateSchema
  let thunkRes: any
  beforeEach(() => {
    dispatch = jest.fn()
    getState = jest.fn()
    mockStore = {...initialStore}
    thunkRes = {data: {title: 'thunk now is working'}}
  })
  test('render test', () => {
    componentRender(<Counter/>, mockStore, {counter: counterReducer})

    expect(screen.getByTestId('value-title')).toHaveTextContent('12')
  })
  test('increment button', () => {
    componentRender(<Counter/>, mockStore, {counter: counterReducer})

    userEvent.click(screen.getByTestId('increment-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('13')
  })

  test('testing thunk 2.0', async () => {
    moxios.get.mockReturnValue(thunkRes)
    const action = doSomething()
    const result = await action(dispatch, getState, undefined)
    console.log(result)

    expect(dispatch).toHaveBeenCalledWith(counterActions.increment())
  })

  test('testing thunk 3.0', async () => {
    moxios.get.mockReturnValue(thunkRes)

    const thunk = new TestAsyncThunk(doSomething)
    const result = await thunk.call()
    expect(thunk.dispatch).toBeCalledWith(counterActions.setTitle(thunkRes.data.title))
  })
})
