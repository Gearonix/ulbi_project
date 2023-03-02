import {configureStore, getDefaultMiddleware, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from './StateSchema'
import {createReducerManager} from 'app/providers/StoreProvider/config/reducerManager'
import {counterReducer} from 'entities/Counter'
import {counterApi} from 'entities/Counter/api'
import {NavigateOptions} from 'react-router'
import {ToolkitStore} from '@reduxjs/toolkit/dist/configureStore'

type CreateReduxStore<T> = (preloadedState: T, asyncReducers?: ReducersMapObject<T>,
  navigate?: (to: string, options?: NavigateOptions) => void) => ToolkitStore<T>


export const createReduxStore: CreateReduxStore<StateSchema> =
  (preloadedState, asyncReducers, navigate) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
      counter: counterReducer,
    }


    const reducerManager = createReducerManager(rootReducers)


    const store = configureStore<StateSchema>({
      reducer: reducerManager.reduce,
      devTools: __IS_DEV__,
      preloadedState,
      middleware: getDefaultMiddleware({
        thunk: {
          extraArgument: {
            counter: counterApi,
            navigate,
          },
        },
      }) as any,
    })


    // @ts-ignore
    store.reducerManager = reducerManager

    return store
  }

