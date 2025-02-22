import { useContext } from "react";
import { LanguageContext } from "../../../../context/LanguageContext"; // Import du contexte

const translations = {
  fr: {
    title: "Verbes courants",
    data: [
      { question: "съм", answer: "être", info: "sum" },
      { question: "имам", answer: "avoir", info: "imam" },
      { question: "правя", answer: "faire", info: "pravia" },
      { question: "казвам", answer: "dire", info: "kazvam" },
      { question: "мога", answer: "pouvoir", info: "moga" },
      { question: "отивам", answer: "aller", info: "otivam" },
      { question: "виждам", answer: "voir", info: "vizhdam" },
      { question: "знам", answer: "savoir", info: "znam" },
      { question: "искам", answer: "vouloir", info: "iskam" },
      { question: "идвам", answer: "venir", info: "idvam" }
    ]
  },
  en: {
    title: "Common verbs",
    data: [
      { question: "съм", answer: "to be", info: "sum" },
      { question: "имам", answer: "to have", info: "imam" },
      { question: "правя", answer: "to do", info: "pravia" },
      { question: "казвам", answer: "to say", info: "kazvam" },
      { question: "мога", answer: "to be able to", info: "moga" },
      { question: "отивам", answer: "to go", info: "otivam" },
      { question: "виждам", answer: "to see", info: "vizhdam" },
      { question: "знам", answer: "to know", info: "znam" },
      { question: "искам", answer: "to want", info: "iskam" },
      { question: "идвам", answer: "to come", info: "idvam" }
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
