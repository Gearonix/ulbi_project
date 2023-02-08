import {FC, ReactNode, useMemo, useState} from 'react';
import ThemeContext, {LOCAL_STORAGE_THEME, Theme} from 'shared/config/contexts/ThemeContext';


const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME) as Theme || Theme.LIGHT

const ThemeProvider: FC<{ children: ReactNode }> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);


    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme])

    return <ThemeContext.Provider value={defaultProps}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeProvider
