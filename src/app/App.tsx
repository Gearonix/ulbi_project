import {FC} from 'react';
import './styles/style.scss'
import {AppRouter} from "app/providers/AppRouter";
import {useTheme} from 'shared/lib/hooks/useTheme';
import {Navbar} from "widgets/Navbar";


const App: FC = () => {
    const {theme, toggleTheme} = useTheme();

    return <div className={`App ${theme}`}>
        <Navbar/>
        <button onClick={toggleTheme} style={{height: 40}}>switch theme</button>
        <h1 className={'h1'}>h1 theme test</h1>
        <AppRouter/>
    </div>
}

export default App
