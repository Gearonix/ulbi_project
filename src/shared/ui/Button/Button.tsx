import s from './style.module.scss';
import {RCC} from 'shared/types';
import {ButtonProps} from './types';
import cn from 'classnames';


const Button: RCC<ButtonProps> = ({className, children, theme = 'colored', ...buttonProps}) => {
    return <button className={cn(s[theme], className)} {...buttonProps}>
        {children}
    </button>;
};


export default Button;
