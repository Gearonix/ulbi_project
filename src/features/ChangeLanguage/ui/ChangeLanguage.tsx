import {useLanguage} from 'shared/lib/hooks'

const ChangeLanguage = () => {
  const {t, toggleLang} = useLanguage()
  return <div>
    <h1>i18n testing: {t('testTranslation')}</h1>
    <button onClick={toggleLang}>change lang</button>
  </div>
}


export default ChangeLanguage
