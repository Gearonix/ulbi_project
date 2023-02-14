import {render, screen} from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  test('Test render', () => {
    render(<Button className={'testButton'}>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('testButton')
  })
})
