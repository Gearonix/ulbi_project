import {EnhancedStore} from '@reduxjs/toolkit'
import {ReducerManager} from 'app/providers/StoreProvider/config/reducerManager'

export interface StateSchema {
    counter?: {
        value: number,
        title: string
    }
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: ReducerManager<StateSchema>
}
