import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./local/en/translation.json";
import kaTranslation from "./local/ka/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    ka: {
      translation: kaTranslation,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
