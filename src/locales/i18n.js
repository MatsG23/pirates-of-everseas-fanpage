import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

const en = require("./en.json");
const de = require("./de.json");

const resources = {
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["de", "en"],
    detection: {
      order: ["querystring", "navigator"],
      lookupQuerystring: "lng",
    },
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    debug: false,
  });
