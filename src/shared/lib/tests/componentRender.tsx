import {ReactElement} from 'react'
import {I18nextProvider} from 'react-i18next'
import i18nMock from 'shared/config/i18n/i18nForTests'
import {render} from '@testing-library/react'
import {StateSchema, StoreProvider} from 'app/providers/StoreProvider'
import {ReducersMapObject} from '@reduxjs/toolkit'


const componentRender = (component: ReactElement, preloadedState?: StateSchema,
    asyncReducers: ReducersMapObject<StateSchema> = {}) => {
  return render(
      <StoreProvider initialState={preloadedState} asyncReducers={asyncReducers}>
        <I18nextProvider i18n={i18nMock}>
          {component}
        </I18nextProvider>,
      </StoreProvider>,

  )
}


export default componentRender
