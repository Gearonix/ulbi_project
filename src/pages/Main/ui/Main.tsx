import {FC, useState} from 'react'
import {ThemeSwitcher} from 'features/ThemeSwitcher'
import {avatar} from 'shared/assets'
import {useTranslation} from 'react-i18next'
import {Modal} from 'shared/ui/Modal/Modal'


const Main: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const {t} = useTranslation()
  return <div data-testid={'main-tests-id'}>
    {t('about us')}
    <ThemeSwitcher/>
    <img src={avatar} style={{width: 40, height: 40}}/>
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <p>hellowolrd!</p>
    </Modal>
    <button onClick={() => setIsOpen(true)}>open modal</button>
  </div>
}

export default Main
