import {FC} from 'react';
import {useTheme} from "shared/lib/hooks/useTheme";
import s from './style.module.scss';
import {Image, Logo} from "shared/assets";
import Button from "shared/ui/Button/Button";

interface ThemeSwitcherProps {

}


const ThemeSwitcher: FC<ThemeSwitcherProps> = () => {
    const {toggleTheme} = useTheme();

    return <div className={s.ThemeSwitcher}>
        <Button onClick={toggleTheme} style={{height: 40}}
                theme={'simple'}>switch theme</Button>
        <Logo/>
        <img src={Image} style={{width: 40, height: 40}}/>
    </div>
}


export default ThemeSwitcher
