import {FC, Suspense, useState} from 'react'
import './styles/style.scss'
import {AppRouter} from 'app/providers/AppRouter'
import {Header} from 'widgets/Header'
import 'shared/config/i18n'
import {useTheme} from 'shared/lib/hooks'
import {ChangeLanguage} from 'features/ChangeLanguage'
import {Counter} from 'entities/Counter'


const App: FC = () => {
  const {theme} = useTheme()

  return <div className={`App ${theme}`}>
    <Header/>
    <AppRouter/>
    <Counter/>
    <Suspense fallback={''}>
      <ChangeLanguage/>
    </Suspense>

  </div>
}

export default App
