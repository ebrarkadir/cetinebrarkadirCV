// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translation.json";
import translationTR from "./locales/tr/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  tr: {
    translation: translationTR,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "tr", // varsayılan dil
    fallbackLng: "tr", // desteklenmeyen dil gelirse

    interpolation: {
      escapeValue: false, // React zaten escape ediyor
    },
  });

export default i18n;
