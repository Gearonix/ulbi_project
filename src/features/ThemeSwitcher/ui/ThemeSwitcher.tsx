import {FC} from 'react'
import {useTheme} from 'shared/lib/hooks/useTheme'
import Button from 'shared/ui/Button/Button'


const ThemeSwitcher: FC = () => {
    const {toggleTheme} = useTheme()
    return <div>
        <Button onClick={toggleTheme} style={{height: 40}}
                theme={'simple'} data-testid={'theme-switcher'}>switch theme</Button>
    </div>
}


export default ThemeSwitcher
