import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import sv from './locales/sv.json';

i18n
  .use(LanguageDetector) // Detects language from localStorage or browser settings
  .use(initReactI18next) // Integrates with React
  .init({
    resources: {
      en: { translation: en },
      sv: { translation: sv }
    },
    lng: 'sv', // Default language: Swedish
    fallbackLng: 'sv', // Fallback to Swedish if language not found
    interpolation: {
      escapeValue: false // React already escapes values
    },
    detection: {
      order: ['localStorage', 'navigator'], // Check localStorage first, then browser language
      caches: ['localStorage'] // Persist language in localStorage
    }
  });

export default i18n;