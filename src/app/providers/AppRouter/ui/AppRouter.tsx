import {FC, Suspense} from 'react';
import {Routes} from "react-router-dom";
import {routes} from "shared/config";

const AppRouter: FC = () => {
    return <Suspense fallback={<div>loading...</div>}>
        <Routes>
            {routes}
        </Routes>
    </Suspense>
}

export default AppRouter
