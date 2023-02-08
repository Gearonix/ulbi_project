import {Link} from "react-router-dom";
import {RCC} from "shared/types";
import s from './style.module.scss'
import {AppLink} from "shared/ui";
import {RoutePaths} from "shared/config";

interface NavbarProps {

}

const Navbar: RCC<NavbarProps> = () => {
    return <div className={s.navbar}>
        <Link to={'/about'}>link to about</Link> <br/>
        <AppLink to={RoutePaths.ABOUT} theme={'primary'}>
            LINK TO ABOUT NEW
        </AppLink>
        <AppLink to={RoutePaths.MAIN} theme={'secondary'}>
            LINK TO MAIN NEW
        </AppLink>
    </div>
}


export default Navbar
