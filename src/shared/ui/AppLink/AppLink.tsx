import {ReactNode} from 'react';
import s from './AppLink.module.scss';
import {RCC} from "shared/types";
import {Link, LinkProps} from "react-router-dom";
import cn from 'classnames';

enum LinkColors {
    primary, secondary
}


// type someType = keyof typeof Colors
//
// const a : someType = '123'

interface AppLinkProps extends LinkProps {
    theme?: keyof typeof LinkColors,
    children: ReactNode
}


const AppLink: RCC<AppLinkProps> = ({to, className, children, theme = 'primary'}) => {
    return <Link to={to} className={cn(className, s[theme], s.AppLink)}>
        {children}
    </Link>
}


export default AppLink
