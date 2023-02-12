import {Route, RouteProps} from 'react-router-dom';
import {MainPage} from 'pages/Main';
import {AboutPage} from 'pages/About';
import {NotFoundPage} from 'pages/NotFound';

enum AppRoutes {
    MAIN = 'MAIN',
    ABOUT = 'ABOUT',
    NOT_FOUND = 'NOT_FOUND'
}


export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
};


const reactRouterConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.MAIN,
        element: <MainPage/>,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePaths.ABOUT,
        element: <AboutPage/>,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePaths.NOT_FOUND,
        element: <NotFoundPage/>,
    },
};

export const languageChunks: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: 'translation',
    [AppRoutes.ABOUT]: 'about',
    [AppRoutes.NOT_FOUND]: 'not_found',
} as const;

export type LanguageChunks = typeof languageChunks

export const routes = Object.values(reactRouterConfig)
    .map(({path, element}) => <Route path={path} element={element} key={path}/>);
