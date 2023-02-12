import {FC} from 'react';
import {useTheme} from 'shared/lib/hooks/useTheme';
import s from './style.module.scss';
import Button from 'shared/ui/Button/Button';


const ThemeSwitcher: FC = () => {
  const {toggleTheme} = useTheme();
  return <div className={s.ThemeSwitcher}>
    <Button onClick={toggleTheme} style={{height: 40}}
            theme={'simple'} data-testid={'theme-switcher'}>switch theme</Button>
  </div>;
};


export default ThemeSwitcher;
