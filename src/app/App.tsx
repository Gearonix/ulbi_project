import {FC, Suspense} from 'react';
import './styles/style.scss'
import {Link, Route, Routes} from 'react-router-dom'
import {AboutPage} from "pages/About";
import {useTheme} from 'shared/lib/hooks/useTheme';
import {MainPage} from 'pages/Main';


const App: FC = () => {
    const {theme, toggleTheme} = useTheme();

    return <div className={`App ${theme}`}>
        <button onClick={toggleTheme}>switch theme</button>
        <Link to={'/about'}>link to about</Link> <br/>
        <Link to={'/'}>link to main</Link>
        <h1 className={'h1'}>h1 theme test</h1>
        <Suspense fallback={<div>loading...</div>}>
            <Routes>
                <Route path={'/about'} element={<AboutPage/>}/>
                <Route path={'/'} element={<MainPage/>}/>
            </Routes>
        </Suspense>
    </div>
}

export default App
