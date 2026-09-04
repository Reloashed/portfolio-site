import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import en from "../locales/en/translation.json"
import de from "../locales/de/translation.json"

const resources = {
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
}

const getInitialLanguage = (): "en" | "de" => {
  const savedLanguage = localStorage.getItem("language")

  if (savedLanguage === "en" || savedLanguage === "de") {
    return savedLanguage
  }

  const browserLanguage = navigator.language.toLowerCase()

  return browserLanguage.startsWith("de") ? "de" : "en"
}

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: "de",

  interpolation: {
    escapeValue: false,
  },

  returnNull: false,
})

export default i18n
