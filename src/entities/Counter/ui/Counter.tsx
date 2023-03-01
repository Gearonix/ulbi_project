import Button from 'shared/ui/Button/Button'
import {useDispatch, useSelector, useStore} from 'react-redux'
import {useTranslation} from 'react-i18next'
import {counterActions, counterReducer} from '../model/slice/counterSlice'
import {getCounterValue} from '../model/selectors/getCounterValue/getCounterValue'
import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {useEffect, useState} from 'react'
import {ReduxStoreWithManager} from 'app/providers/StoreProvider/config/StateSchema'
import {useAsyncReducer} from 'shared/lib/hooks/useAsyncReducer'

export const doSomething = createAsyncThunk('counter/HELLO_WORLD',
    async (_, {dispatch}) => {
      const res = await axios.get('https://dummyjson.com/products/1')
      const data = res.data
      dispatch(counterActions.increment())
      dispatch(counterActions.setTitle(res.data.title))

      return data
    })


export const Counter = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)
  const [value, setValue] = useState<string>('')
  const {t} = useTranslation()

  useAsyncReducer('counter', counterReducer)

  const increment = () => {
    dispatch(counterActions.increment())
  }

  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  const asyncReq = async () => {
    // @ts-ignore
    const data = await dispatch(doSomething())
    setValue(data.payload.title)
  }

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <h2 data-testid='thunk-value'>thunk value: {value}</h2>
      <button onClick={asyncReq} data-testid='thunk-btn'>thunk</button>
      <Button
        onClick={increment}
        data-testid="increment-btn"
      >
        {t('increment')}
      </Button>
      <Button
        data-testid="decrement-btn"
        onClick={decrement}
      >
        {t('decrement')}
      </Button>
    </div>
  )
}
