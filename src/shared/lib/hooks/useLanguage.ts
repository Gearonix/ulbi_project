import {useTranslation} from "react-i18next";
import {LanguageChunks} from "shared/config";

type ValueOf<T> = T[keyof T]

export const useLanguage = (chunk: ValueOf<typeof LanguageChunks> = 'main') => {
    const {t, i18n} = useTranslation(chunk)

    const toggleLang = () => {
        const newLang = i18n.language === 'ru' ? 'en' : 'ru'
        i18n.changeLanguage(newLang)
    }

    return {t, toggleLang}
}
