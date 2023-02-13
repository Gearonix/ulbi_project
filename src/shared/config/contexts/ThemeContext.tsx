import {createContext} from 'react'

export enum Theme {
    LIGHT = 'theme-light',
    DARK = 'theme-dark'
}


export interface ThemeContextProps {
    theme?: Theme,
    setTheme?: (value: Theme) => void;
}


const ThemeContext = createContext<ThemeContextProps>({})


export const LOCAL_STORAGE_THEME = 'theme'


export default ThemeContext
