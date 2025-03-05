import { LanguageContext } from "../../../../context/LanguageContext";
import { useContext } from "react";

const translations = {
  fr: {
    title: "Mots interrogatifs",
    words: [
      { question: "Où ?", answer: "Къде?" },
      { question: "Quand ?", answer: "Кога?" },
      { question: "Comment ?", answer: "Как?" },
      { question: "Pourquoi ?", answer: "Защо?" },
      { question: "Qui ?", answer: "Кой?" },
      { question: "Quel ?", answer: "Кой? / Коя? / Кое? / Кои?" }
    ]
  },
  en: {
    title: "Interrogative words",
    words: [
      { question: "Where?", answer: "Къде?" },
      { question: "When?", answer: "Кога?" },
      { question: "How?", answer: "Как?" },
      { question: "Why?", answer: "Защо?" },
      { question: "Who?", answer: "Кой?" },
      { question: "Which?", answer: "Кой? / Коя? / Кое? / Кои?" }
    ]
  }
};

const useInterrogativeWordsQuizData = () => {
  const { language } = useContext(LanguageContext);
  return {
    data: translations[language].words,
    title: translations[language].title
  };
};

export { useInterrogativeWordsQuizData };
