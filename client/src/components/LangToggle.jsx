import React from "react";
import { useTranslation } from "react-i18next";

const LangToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "am" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button onClick={toggleLanguage}>
      {i18n.language === "en" ? (
        <h1 className="text-lightPurple text-2xl font-bold">አማ</h1>
      ) : (
        <h1 className="text-lightPurple text-2xl font-bold">En</h1>
      )}
    </button>
  );
};

export default LangToggle;
