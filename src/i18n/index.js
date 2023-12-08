import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInEng from '../locals/en/translation.json'
import translationsInChin from '../locals/zh/translation.json'

// the translations
const resources = {
  en: {
    translation: translationsInEng
  },
  zh: {
    translation: translationsInChin
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources, // resources are important to load translations for the languages.
    lng: localStorage.getItem("lang"), // It acts as default language. When the site loads, content is shown in this language.  
    debug: true,
    fallbackLng: "zh", // use de if selected language is not available
    interpolation: {
      escapeValue: false
    },
    ns: "translation", // namespaces help to divide huge translations into multiple small files.
    defaultNS: "translation"
  });

export default i18n;