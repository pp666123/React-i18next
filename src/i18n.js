import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation';
import zh from './locales/zh/translation';

const resources = {
    en: {
        translation: en,
    },
    zh: {
        translation: zh
    }
};


i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en'
    });

export default i18n;