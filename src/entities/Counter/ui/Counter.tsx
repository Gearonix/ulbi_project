import Button from 'shared/ui/Button/Button'
import {useDispatch, useSelector} from 'react-redux'
import {useTranslation} from 'react-i18next'
import {counterActions, counterReducer} from '../model/slice/counterSlice'
import {getCounterValue} from '../model/selectors/getCounterValue/getCounterValue'
import {memo, useState} from 'react'
import {StateSchema} from 'app/providers/StoreProvider/config/StateSchema'
import {useAsyncReducer} from 'shared/lib/hooks/useAsyncReducer'
import {doSomething} from 'entities/Counter/model/services/doSomething'
import {useNavigate} from 'react-router-dom'


export const Counter = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)
  const {t} = useTranslation()
  const navigate = useNavigate()

  useAsyncReducer('counter', counterReducer)

  const increment = () => {
    dispatch(counterActions.increment())
  }

  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  const asyncReq = async () => {
    // @ts-ignore
    dispatch(doSomething())
  }
  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <h2 data-testid='thunk-value'>thunk value: value</h2>
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
      <MemoComponent/>
    </div>
  )
}

const MemoComponent = memo(() => {
  // const title = useSelector((state: StateSchema) => state.counter)
  // return <h2>memo component: {title}</h2>
  return null
})
