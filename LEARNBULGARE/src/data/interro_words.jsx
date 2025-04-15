import { LanguageContext } from "../../src/context/LanguageContext"; // Adjust the import path as necessary
import { useContext } from "react";

const translations = {
  fr: {
    title: "Mots interrogatifs",
    words: [
      { question: "Où ?", answer: "Къде?", info: "Kăde?" },
      { question: "Quand ?", answer: "Кога?", info: "Koga?" },
      { question: "Comment ?", answer: "Как?", info: "Kak?" },
      { question: "Pourquoi ?", answer: "Защо?", info: "Zachtcho?" },
      { question: "Qui ?", answer: "Кой?", info: "Koy?" },
      { question: "Quel ?", answer: "Кой? / Коя? / Кое? / Кои?", info: "Koy? / Koya? / Koe? / Koi?" }
    ]
  },
  en: {
    title: "Interrogative words",
    words: [
      { question: "Where?", answer: "Къде?", info: "Kăde?" },
      { question: "When?", answer: "Кога?", info: "Koga?" },
      { question: "How?", answer: "Как?", info: "Kak?" },
      { question: "Why?", answer: "Защо?", info: "Zashto?" },
      { question: "Who?", answer: "Кой?", info: "Koy?" },
      { question: "Which?", answer: "Кой? / Коя? / Кое? / Кои?", info: "Koy? / Koya? / Koe? / Koi?" }
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