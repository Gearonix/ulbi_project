import {ReactElement} from 'react'
import {I18nextProvider} from 'react-i18next'
import i18nMock from 'shared/config/i18n/i18nForTests'
import {render} from '@testing-library/react'
import {Provider} from 'react-redux'
import {configureStore, createStore, DeepPartial} from '@reduxjs/toolkit'
import {StateSchema} from 'app/providers/StoreProvider'
import {counterReducer} from 'entities/Counter'


const componentRender = (component: ReactElement, initialStore: DeepPartial<StateSchema>) => {
  const mockStore = configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
    },
    preloadedState: initialStore as StateSchema,
  })


  return render(
      <Provider store={mockStore}>
        <I18nextProvider i18n={i18nMock}>
          {component}
        </I18nextProvider>,
      </Provider>,

  )
}


export default componentRender
