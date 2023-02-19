import {FC, Suspense, useState} from 'react'
import './styles/style.scss'
import {AppRouter} from 'app/providers/AppRouter'
import {Header} from 'widgets/Header'
import 'shared/config/i18n'
import {useTheme} from 'shared/lib/hooks'
import {ChangeLanguage} from 'features/ChangeLanguage'
import {Modal} from 'shared/ui/Modal/Modal'
import {Counter} from 'entities/Counter'


const App: FC = () => {
  const {theme} = useTheme()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return <div className={`App ${theme}`}>
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <p>hellowolrd!</p>
    </Modal>
    <Header/>
    <AppRouter/>
    <button onClick={() => setIsOpen(true)}>open modal</button>
    <Counter/>
    <Suspense fallback={''}>
      <ChangeLanguage/>
    </Suspense>

  </div>
}

export default App
