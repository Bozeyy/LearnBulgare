import { useContext } from "react";
import { LanguageContext } from "../../../../context/LanguageContext"; // Import du contexte

const translations = {
  fr: {
    title: "Verbes courants",
    data: [
      { question: "съм", traduction: "être", phonetic: "sum" },
      { question: "имам", traduction: "avoir", phonetic: "imam" },
      { question: "правя", traduction: "faire", phonetic: "pravia" },
      { question: "казвам", traduction: "dire", phonetic: "kazvam" },
      { question: "мога", traduction: "pouvoir", phonetic: "moga" },
      { question: "отивам", traduction: "aller", phonetic: "otivam" },
      { question: "виждам", traduction: "voir", phonetic: "vizhdam" },
      { question: "знам", traduction: "savoir", phonetic: "znam" },
      { question: "искам", traduction: "vouloir", phonetic: "iskam" },
      { question: "идвам", traduction: "venir", phonetic: "idvam" }
    ]
  },
  en: {
    title: "Common verbs",
    data: [
      { question: "съм", traduction: "to be", phonetic: "sum" },
      { question: "имам", traduction: "to have", phonetic: "imam" },
      { question: "правя", traduction: "to do", phonetic: "pravia" },
      { question: "казвам", traduction: "to say", phonetic: "kazvam" },
      { question: "мога", traduction: "to be able to", phonetic: "moga" },
      { question: "отивам", traduction: "to go", phonetic: "otivam" },
      { question: "виждам", traduction: "to see", phonetic: "vizhdam" },
      { question: "знам", traduction: "to know", phonetic: "znam" },
      { question: "искам", traduction: "to want", phonetic: "iskam" },
      { question: "идвам", traduction: "to come", phonetic: "idvam" }
    ]
  }
};

const useVerb0_10Flashcards = () => {
  const { language } = useContext(LanguageContext);
  return {
    data: translations[language].data,
    title: translations[language].title
  };
};

export { useVerb0_10Flashcards };
