import {screen} from '@testing-library/react'
import Main from './Main'
import {renderWithTranslation} from 'shared/lib/tests'


describe('Main tsx:', () => {
  test('is main exists', () => {
        renderWithTranslation(<Main/>)
        expect(screen.getByTestId('main-tests-id')).toBeInTheDocument()
      },
  )
  test('theming test', () => {
    renderWithTranslation(<Main/>)
    const themeButton = screen.getByTestId('theme-switcher')
    expect(themeButton).toBeInTheDocument()
  })
})
