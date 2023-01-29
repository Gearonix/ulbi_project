import {FC, Suspense} from 'react';
import Counter from "./components/Counter/Counter";
import './styles/style.scss'
import {Link, Route, Routes} from 'react-router-dom'
import {AsyncAbout} from "./pages/About/about.async";
import {AsyncMain} from './pages/Main/main.async';


const App: FC = () => {
    return <div className={'App dark'}>
        <Link to={'/about'}>link to about</Link> <br/>
        <Link to={'/'}>link to main</Link>
        <Suspense fallback={<div>loading...</div>}>
        <Routes>
                <Route path={'/about'} element={<AsyncAbout/>}/>
                <Route path={'/'} element={<AsyncMain/>}/>
        </Routes>
        </Suspense>
        <Counter/>
    </div>
}

export default App
