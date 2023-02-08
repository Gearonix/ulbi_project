import {Route, RouteProps} from "react-router-dom";
import {MainPage} from "pages/Main";
import {AboutPage} from "pages/About";

enum AppRoutes {
    MAIN = 'MAIN',
    ABOUT = 'ABOUT'
}


export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
}


const reactRouterConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.MAIN,
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutePaths.ABOUT,
        element: <AboutPage/>
    }
}

export const routes = Object.values(reactRouterConfig)
    .map(({path, element}) => <Route path={path} element={element} key={path}/>)
