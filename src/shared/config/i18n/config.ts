const i18nConfig = {
  fallbackLng: 'ru',
  debug: __IS_DEV__,
  interpolation: {
    escapeValue: false,
  },
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
}

export default i18nConfig
