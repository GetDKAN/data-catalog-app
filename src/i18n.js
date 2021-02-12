import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-xhr-backend';

i18n
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: true,
    lng: "en",
    fallbackLng: 'en',
    whitelist: ['en', 'de'],
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    backend: {
      loadPath: '/frontend/build/locales/{{lng}}/{{ns}}.json',
    },
  });

  export default i18n;