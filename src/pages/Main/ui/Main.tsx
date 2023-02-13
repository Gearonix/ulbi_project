import {FC} from 'react'
import {ThemeSwitcher} from 'features/ThemeSwitcher'
import {avatar} from 'shared/assets'
import {useTranslation} from 'react-i18next'


const Main: FC = () => {
    const {t} = useTranslation()
    return <div data-testid={'main-tests-id'}>
        {t('about us')}
        <ThemeSwitcher/>
        <img src={avatar} style={{width: 40, height: 40}}/>
    </div>
}

export default Main
