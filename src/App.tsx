import React from "react";
import "./App.css";
import Navigator from "./components/router/navigation";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import CN from "./components/translation/cn.json";
import EN from "./components/translation/en.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: EN,
    },
    cn: {
      translation: CN,
    },
  },
  lng: localStorage.getItem("SelectedLanguage") || "en_US", // if you're using a language detector, do not define the lng option
});

function App() {
  return <Navigator />;
}

export default App;
