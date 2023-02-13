import {Story as StoryType} from '@storybook/react'
import {BrowserRouter} from 'react-router-dom'


export const RouterDecorator = (Story: StoryType) => {
    return <BrowserRouter>
        <Story/>
    </BrowserRouter>
}
