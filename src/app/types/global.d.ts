import {FunctionComponent, SVGAttributes} from 'react';

declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }

    const classNames: IClassNames;
    export = classNames;
}

declare module '*.svg' {
    const content: FunctionComponent<SVGAttributes<SVGElement>>;
    export default content;
}

declare module '*.png' {
    const path: string;
    export default path;
}

declare module '*.jpg' {
    const value: any;
    export = value;
}

declare const __isDev__: boolean;
