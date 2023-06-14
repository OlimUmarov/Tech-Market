import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
import translationEN from './en.json'; // English translations
import translationRU from './ru.json'; // Russian translations
import translationUZ from './uz.json'; // Uzbek translations

// Language resources
const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
  uz: {
    translation: translationUZ,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if a translation is missing
    interpolation: {
      escapeValue: false, // Allows using HTML in translation strings
    },
  });

export default i18n;
