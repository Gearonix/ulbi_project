import {useTranslation} from 'react-i18next'
import {LanguageChunks} from 'shared/config'
import {ValueOf} from 'shared/types'

export const useLanguage = (chunk: ValueOf<LanguageChunks> = 'translation') => {
  const {t, i18n} = useTranslation(chunk)

  const toggleLang = () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru'
    i18n.changeLanguage(newLang)
  }

  return {t, toggleLang}
}
