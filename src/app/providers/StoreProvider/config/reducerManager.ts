import {AnyAction, CombinedState, combineReducers, Reducer, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from 'app/providers/StoreProvider'

export interface ReducerManager<T>{
  getReducerMap: () => void,
  add: (key: keyof T, reducer: Reducer) => void,
  reduce: (state: T, action: AnyAction) => CombinedState<T>,
  remove: (key: keyof T) => void
}

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager<StateSchema> {
  const reducers = {...initialReducers}
  console.log(reducers)

  let combinedReducer = combineReducers(reducers)

  let keysToRemove: Array<keyof StateSchema> = []

  return {
    getReducerMap: () => reducers,

    reduce: (state: StateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = {...state}
        for (const key of keysToRemove) {
          delete state[key]
        }
        keysToRemove = []
      }

      return combinedReducer(state, action)
    },
    add: (key: keyof StateSchema, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return
      }
      reducers[key] = reducer

      combinedReducer = combineReducers(reducers)
    },

    remove: (key: keyof StateSchema) => {
      if (!key || !reducers[key]) {
        return
      }

      delete reducers[key]

      keysToRemove.push(key)

      combinedReducer = combineReducers(reducers)
    },
  }
}

