import { useContext } from "react";
import { LanguageContext } from "../../../../context/LanguageContext";

const translations = {
  fr: {
    title: "Phonétique des lettres",
    letters: [
      { question: "А", answer: "a" },
      { question: "Б", answer: "b" },
      { question: "В", answer: "v" },
      { question: "Г", answer: "ɡ" },
      { question: "Д", answer: "d" },
      { question: "Е", answer: "e" },
      { question: "Ж", answer: "j" },
      { question: "З", answer: "z" },
      { question: "И", answer: "i" },
      { question: "Й", answer: "ille" },
      { question: "К", answer: "k" },
      { question: "Л", answer: "l" },
      { question: "М", answer: "m" },
      { question: "Н", answer: "n" },
      { question: "О", answer: "o" },
      { question: "П", answer: "p" },
      { question: "Р", answer: "r" },
      { question: "С", answer: "s" },
      { question: "Т", answer: "t" },
      { question: "У", answer: "ou" },
      { question: "Ф", answer: "f" },
      { question: "Х", answer: "k" },
      { question: "Ц", answer: "tZ" },
      { question: "Ч", answer: "tch" },
      { question: "Ш", answer: "ch" },
      { question: "Щ", answer: "cht" },
      { question: "Ъ", answer: "(euh)" },
      { question: "Ю", answer: "iou" },
      { question: "Я", answer: "ya" }
    ]
  },
  en: {
    title: "Phonetics of letters",
    letters: [
      { question: "А", answer: "a" },
      { question: "Б", answer: "b" },
      { question: "В", answer: "v" },
      { question: "Г", answer: "ɡ" },
      { question: "Д", answer: "d" },
      { question: "Е", answer: "e" },
      { question: "Ж", answer: "zh" },
      { question: "З", answer: "z" },
      { question: "И", answer: "i" },
      { question: "Й", answer: "y" },
      { question: "К", answer: "k" },
      { question: "Л", answer: "l" },
      { question: "М", answer: "m" },
      { question: "Н", answer: "n" },
      { question: "О", answer: "o" },
      { question: "П", answer: "p" },
      { question: "Р", answer: "r" },
      { question: "С", answer: "s" },
      { question: "Т", answer: "t" },
      { question: "У", answer: "u" },
      { question: "Ф", answer: "f" },
      { question: "Х", answer: "kh" },
      { question: "Ц", answer: "ts" },
      { question: "Ч", answer: "ch" },
      { question: "Ш", answer: "sh" },
      { question: "Щ", answer: "sht" },
      { question: "Ъ", answer: "hard sign" },
      { question: "Ю", answer: "yu" },
      { question: "Я", answer: "ya" }
    ]
  }
};

const useLetterQuizData = () => {
  const { language } = useContext(LanguageContext);
  return {
    data: translations[language].letters,
    title: translations[language].title
  };
};

export { useLetterQuizData };
