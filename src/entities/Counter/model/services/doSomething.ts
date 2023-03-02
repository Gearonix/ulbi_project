import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios/index'
import {counterActions} from 'entities/Counter/model/slice/counterSlice'
import {CounterApi} from 'entities/Counter/api'
import {StateSchema} from 'app/providers/StoreProvider'
import {NavigateOptions} from 'react-router'

interface Api{
      counter: CounterApi,
      navigate: (to: string, options?: NavigateOptions) => void
}


const createThunk = createAsyncThunk.withTypes<{state: StateSchema, extra: Api, rejectValue: string}>()


// does stuff
export const doSomething = createThunk<any>('counter/HELLO_WORLD',
    async (_, {extra, dispatch}) => {
      console.log('something')
      const res = await extra.counter.doSomething()
      extra.navigate('/about')
      const data = res.data
      console.log(data)
      dispatch(counterActions.increment())
      dispatch(counterActions.setTitle(res.data.title))

      return data
    })
