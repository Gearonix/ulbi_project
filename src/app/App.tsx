import {FC, Suspense} from 'react';
import './styles/style.scss'
import {AppRouter} from "app/providers/AppRouter";
import {Navbar} from "widgets/Navbar";
import 'shared/config/i18n';
import {useLanguage, useTheme} from "shared/lib/hooks";


const LangComponent = () => {
    const {t, toggleLang} = useLanguage()
    return <div>
        <h1>i18n testing: {t('testTranslation')}</h1>
        <button onClick={toggleLang}>change lang</button>
    </div>
}

const App: FC = () => {
    const {theme} = useTheme()

    return <div className={`App ${theme}`}>
        <Navbar/>
        <AppRouter/>
        <Suspense fallback={''}>
            <LangComponent/>
        </Suspense>

    </div>
}

export default App
