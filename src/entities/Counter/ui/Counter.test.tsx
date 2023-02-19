import componentRender from 'shared/lib/tests/componentRender'
import {Counter} from 'entities/Counter'
import {fireEvent, screen} from '@testing-library/react'
import {userEvent} from '@storybook/testing-library'
import axios from 'axios'
import {configureStore} from '@reduxjs/toolkit'
import {doSomething} from './Counter'
import {counterReducer, counterSlice} from 'entities/Counter/model/slice/counterSlice'


jest.mock('axios')

const intialStore = {
  counter: {
    value: 12,
  },
}

describe('Component Counter', () => {
  let mockStore = {...intialStore}
  beforeEach(() => {
    mockStore = {...intialStore}
  })
  test('render test', () => {
    componentRender(<Counter/>, mockStore)

    expect(screen.getByTestId('value-title')).toHaveTextContent('12')
  })
  test('increment button', () => {
    componentRender(<Counter/>, mockStore)

    userEvent.click(screen.getByTestId('increment-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('13')
  })

  test('testing thunk', async () => {
    componentRender(<Counter/>, mockStore)

    const moxios = jest.mocked(axios)
    const response = {
      data: {
        title: 'thunk now is working',
      },

    }
    moxios.get.mockReturnValue(response as any)

    const store = configureStore({
      reducer: {
        counter: counterReducer,
      },
    })

    const res = await store.dispatch(doSomething())
    expect(res.payload.title).toBe('thunk now is working')

    const value = store.getState().counter.value

    expect(value).toBe(1)

    // userEvent.click(screen.getByTestId('thunk-btn'))
    // expect(screen.getByTestId('thunk-value')).toHaveTextContent('thunk now is working')
  })
})
