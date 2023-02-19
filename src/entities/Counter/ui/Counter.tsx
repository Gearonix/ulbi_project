import Button from 'shared/ui/Button/Button'
import {useDispatch, useSelector} from 'react-redux'
import {useTranslation} from 'react-i18next'
import {counterActions} from '../model/slice/counterSlice'
import {getCounterValue} from '../model/selectors/getCounterValue/getCounterValue'
import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {useState} from 'react'

export const doSomething = createAsyncThunk('counter/HELLO_WORLD',
    async (_, {dispatch}) => {
      const res = await axios.get('https://dummyjson.com/products/1')
      const data = res.data
      dispatch(counterActions.increment())

      return data
    })


export const Counter = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)
  const [value, setValue] = useState<string>('')
  const {t} = useTranslation()

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
