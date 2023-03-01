import {StateSchema} from 'app/providers/StoreProvider'
import {AsyncThunkAction} from '@reduxjs/toolkit'


type ActionCreator<Return, Arg, Rejected> = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: Rejected }>

export class TestAsyncThunk<Return, Arg, Rejected> {
  dispatch: jest.MockedFn<any>
  getState: () => StateSchema
  actionCreator: ActionCreator<Return, Arg, Rejected>
  constructor(actionCreator : ActionCreator<Return, Arg, Rejected>) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn()
  }
  async call(arg: Arg) {
    const action = this.actionCreator(arg)
    return action(this.dispatch, this.getState, undefined)
  }
}
