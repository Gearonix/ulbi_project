import {useEffect} from 'react'
import {useDispatch, useStore} from 'react-redux'
import {ReduxStoreWithManager, StateSchema} from 'app/providers/StoreProvider/config/StateSchema'
import {Reducer} from '@reduxjs/toolkit'

export const useAsyncReducer = (key: keyof StateSchema, reducer: Reducer) => {
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  useEffect(() => {
    store.reducerManager.add(key, reducer)

    dispatch({type: `@INIT ${key}`})

    return () => {
      store.reducerManager.remove(key)
      dispatch({type: `@DESTROY ${key}`})
    }
    // eslint-disable-next-line
  }, [])
}
