import {ButtonHTMLAttributes} from 'react';


enum ButtonThemes {
    colored,
    simple
}


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: keyof typeof ButtonThemes
}
