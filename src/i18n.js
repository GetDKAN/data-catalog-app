import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'about': {
        'title': 'About this site'
      },
      'home': {
        'featured': 'Featured Datasets',
        'topics': 'Dataset Topics'
      },
      'not_found': {
        'title': 'Page not found.'
      },
      'publishers': {
        'title': 'Dataset Publishers'
      },
      'search': {
        'title': 'Datasets'
      }
    },
  },
  es: {
    translation: {
      'about': {
        title: 'Sobre este sitio'
      },
      'home': {
        'featured': 'Conjuntos de Datos Destacados',
        'topics': 'Temas de Conjuntos de Datos'
      },
      'not_found': {
        'title': 'Página no encontrada.'
      },
      'publishers': {
        'title': 'Publicadores de Conjuntos de Datos',
      },
      'search': {
        'title': 'Conjuntos de Datos'
      }
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
