import {useContext} from "react";
import ThemeContext, {LOCAL_STORAGE_THEME, Theme} from "../../config/contexts/ThemeContext";


export const useTheme = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const selectedTheme = theme == Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(selectedTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME, selectedTheme as string)
    }

    return {theme, toggleTheme}
}
