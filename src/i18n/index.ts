import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Cookies from 'js-cookie';
import en from './locales/en';
import es from './locales/es';

// Configure i18next
i18n
  .use(LanguageDetector) // Detect language
  .use(initReactI18next) // Initialize react-i18next
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    fallbackLng: 'en',
    detection: {
      order: ['cookie', 'navigator'],
      lookupCookie: 'language',
      caches: ['cookie'],
    },
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

// Function to change language and save to cookie
export const changeLanguage = (language: string) => {
  i18n.changeLanguage(language);
  Cookies.set('language', language, { expires: 365 });
};

export default i18n;