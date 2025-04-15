import { LanguageContext } from "../../src/context/LanguageContext"; // Adjust the import path as necessary
import { useContext } from "react";
const translations = {
  fr: {
    title: "Phonétique des lettres",
    letters: [
      { question: "А", answer: "a", info: "a" },
      { question: "Б", answer: "b", info: "b" },
      { question: "В", answer: "v", info: "v" },
      { question: "Г", answer: "ɡ", info: "ɡ" },
      { question: "Д", answer: "d", info: "d" },
      { question: "Е", answer: "e", info: "e" },
      { question: "Ж", answer: "j", info: "j" },
      { question: "З", answer: "z", info: "z" },
      { question: "И", answer: "i", info: "i" },
      { question: "Й", answer: "ille", info: "ille" },
      { question: "К", answer: "k", info: "k" },
      { question: "Л", answer: "l", info: "l" },
      { question: "М", answer: "m", info: "m" },
      { question: "Н", answer: "n", info: "n" },
      { question: "О", answer: "o", info: "o" },
      { question: "П", answer: "p", info: "p" },
      { question: "Р", answer: "r", info: "r" },
      { question: "С", answer: "s", info: "s" },
      { question: "Т", answer: "t", info: "t" },
      { question: "У", answer: "ou", info: "ou" },
      { question: "Ф", answer: "f", info: "f" },
      { question: "Х", answer: "k", info: "k" },
      { question: "Ц", answer: "tZ", info: "tZ" },
      { question: "Ч", answer: "tch", info: "tch" },
      { question: "Ш", answer: "ch", info: "ch" },
      { question: "Щ", answer: "cht", info: "cht" },
      { question: "Ъ", answer: "(euh)", info: "(euh)" },
      { question: "Ю", answer: "iou", info: "iou" },
      { question: "Я", answer: "ya", info: "ya" }
    ]
  },
  en: {
    title: "Phonetics of letters",
    letters: [
      { question: "А", answer: "a", info: "a" },
      { question: "Б", answer: "b", info: "b" },
      { question: "В", answer: "v", info: "v" },
      { question: "Г", answer: "ɡ", info: "ɡ" },
      { question: "Д", answer: "d", info: "d" },
      { question: "Е", answer: "e", info: "e" },
      { question: "Ж", answer: "zh", info: "zh" },
      { question: "З", answer: "z", info: "z" },
      { question: "И", answer: "i", info: "i" },
      { question: "Й", answer: "y", info: "y" },
      { question: "К", answer: "k", info: "k" },
      { question: "Л", answer: "l", info: "l" },
      { question: "М", answer: "m", info: "m" },
      { question: "Н", answer: "n", info: "n" },
      { question: "О", answer: "o", info: "o" },
      { question: "П", answer: "p", info: "p" },
      { question: "Р", answer: "r", info: "r" },
      { question: "С", answer: "s", info: "s" },
      { question: "Т", answer: "t", info: "t" },
      { question: "У", answer: "u", info: "u" },
      { question: "Ф", answer: "f", info: "f" },
      { question: "Х", answer: "kh", info: "kh" },
      { question: "Ц", answer: "ts", info: "ts" },
      { question: "Ч", answer: "ch", info: "ch" },
      { question: "Ш", answer: "sh", info: "sh" },
      { question: "Щ", answer: "sht", info: "sht" },
      { question: "Ъ", answer: "hard sign", info: "hard sign" },
      { question: "Ю", answer: "yu", info: "yu" },
      { question: "Я", answer: "ya", info: "ya" }
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