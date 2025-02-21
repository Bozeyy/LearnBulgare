import { LanguageContext } from "../../../../context/LanguageContext";
import { useContext } from "react";

const translations = {
  fr: {
    title: "Verbes courants",
    verbs: [
      { question: "être", answer: "съм" },
      { question: "avoir", answer: "имам" },
      { question: "faire", answer: "правя" },
      { question: "dire", answer: "казвам" },
      { question: "pouvoir", answer: "мога" },
      { question: "aller", answer: "отивам" },
      { question: "voir", answer: "виждам" },
      { question: "savoir", answer: "знам" },
      { question: "vouloir", answer: "искам" },
      { question: "venir", answer: "идвам" }
    ]
  },
  en: {
    title: "Common verbs",
    verbs: [
      { question: "to be", answer: "съм" },
      { question: "to have", answer: "имам" },
      { question: "to do", answer: "правя" },
      { question: "to say", answer: "казвам" },
      { question: "to be able to", answer: "мога" },
      { question: "to go", answer: "отивам" },
      { question: "to see", answer: "виждам" },
      { question: "to know", answer: "знам" },
      { question: "to want", answer: "искам" },
      { question: "to come", answer: "идвам" }
    ]
  }
};

const useVerbes0_10QuizData = () => {
  const { language } = useContext(LanguageContext);
  return {
    data: translations[language].verbs,
    title: translations[language].title
  };
};

export { useVerbes0_10QuizData };
