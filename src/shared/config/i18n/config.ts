const i18nConfig = {
    fallbackLng: 'ru',
    debug: __isDev__,
    interpolation: {
        escapeValue: false,
    },
    backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
};

export default i18nConfig;
