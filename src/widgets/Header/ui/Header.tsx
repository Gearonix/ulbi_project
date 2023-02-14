import {RCC} from 'shared/types'
import s from './style.module.scss'
import {AppLink} from 'shared/ui'
import {RoutePaths} from 'shared/config'
import LogoPath from 'shared/assets/logo.svg'

const Header: RCC = () => {
  return <div className={s.navbar}>
    <AppLink to={RoutePaths.ABOUT} theme={'primary'}>
            LINK TO ABOUT NEW
    </AppLink>
    <AppLink to={RoutePaths.MAIN} theme={'secondary'}>
            LINK TO MAIN NEW
    </AppLink>
    <LogoPath/>
  </div>
}


export default Header
