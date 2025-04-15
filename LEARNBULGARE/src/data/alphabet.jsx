import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const translations = {
  fr: {
    title: "L'Alphabet Bulgare",
    data: [
      { question: "А", answer: "a", info: "Comme le 'a' français" },
      { question: "Б", answer: "b", info: "Comme le 'b' français" },
      { question: "В", answer: "v", info: "Comme le 'v' français" },
      { question: "Г", answer: "ɡ", info: "Comme le 'g' dur français" },
      { question: "Д", answer: "d", info: "Comme le 'd' français" },
      { question: "Е", answer: "e", info: "Comme le 'é' français" },
      { question: "Ж", answer: "j", info: "Comme le 'j' français" },
      { question: "З", answer: "z", info: "Comme le 'z' français" },
      { question: "И", answer: "i", info: "Comme le 'i' français" },
      { question: "Й", answer: "ille", info: "Comme le 'y' français" },
      { question: "К", answer: "k", info: "Comme le 'k' français" },
      { question: "Л", answer: "l", info: "Comme le 'l' français" },
      { question: "М", answer: "m", info: "Comme le 'm' français" },
      { question: "Н", answer: "n", info: "Comme le 'n' français" },
      { question: "О", answer: "o", info: "Comme le 'o' français" },
      { question: "П", answer: "p", info: "Comme le 'p' français" },
      { question: "Р", answer: "r", info: "Comme le 'r' français" },
      { question: "С", answer: "s", info: "Comme le 's' français" },
      { question: "Т", answer: "t", info: "Comme le 't' français" },
      { question: "У", answer: "ou", info: "Comme le 'ou' français" },
      { question: "Ф", answer: "f", info: "Comme le 'f' français" },
      { question: "Х", answer: "k", info: "Comme le 'kh' arabe" },
      { question: "Ц", answer: "tZ", info: "Comme 'ts' en français" },
      { question: "Ч", answer: "tch", info: "Comme 'tch' en français" },
      { question: "Ш", answer: "ch", info: "Comme 'ch' en français" },
      { question: "Щ", answer: "cht", info: "Comme 'cht' en français" },
      { question: "Ъ", answer: "(euh)", info: "Son guttural très court" },
      { question: "Ю", answer: "iou", info: "Comme 'you' en anglais" },
      { question: "Я", answer: "ya", info: "Comme 'ya' en français" }
    ]
  },
  en: {
    title: "The Bulgarian Alphabet",
    data: [
      { question: "А", answer: "a", info: "Like 'a' in French" },
      { question: "Б", answer: "b", info: "Like 'b' in French" },
      { question: "В", answer: "v", info: "Like 'v' in French" },
      { question: "Г", answer: "ɡ", info: "Like hard 'g' in French" },
      { question: "Д", answer: "d", info: "Like 'd' in French" },
      { question: "Е", answer: "e", info: "Like 'é' in French" },
      { question: "Ж", answer: "j", info: "Like 'j' in French" },
      { question: "З", answer: "z", info: "Like 'z' in French" },
      { question: "И", answer: "i", info: "Like 'i' in French" },
      { question: "Й", answer: "ille", info: "Like 'y' in French" },
      { question: "К", answer: "k", info: "Like 'k' in French" },
      { question: "Л", answer: "l", info: "Like 'l' in French" },
      { question: "М", answer: "m", info: "Like 'm' in French" },
      { question: "Н", answer: "n", info: "Like 'n' in French" },
      { question: "О", answer: "o", info: "Like 'o' in French" },
      { question: "П", answer: "p", info: "Like 'p' in French" },
      { question: "Р", answer: "r", info: "Like 'r' in French" },
      { question: "С", answer: "s", info: "Like 's' in French" },
      { question: "Т", answer: "t", info: "Like 't' in French" },
      { question: "У", answer: "ou", info: "Like 'ou' in French" },
      { question: "Ф", answer: "f", info: "Like 'f' in French" },
      { question: "Х", answer: "k", info: "Like 'kh' in Arabic" },
      { question: "Ц", answer: "tZ", info: "Like 'ts' in French" },
      { question: "Ч", answer: "tch", info: "Like 'tch' in French" },
      { question: "Ш", answer: "ch", info: "Like 'ch' in French" },
      { question: "Щ", answer: "cht", info: "Like 'cht' in French" },
      { question: "Ъ", answer: "(euh)", info: "Very short guttural sound" },
      { question: "Ю", answer: "iou", info: "Like 'you' in English" },
      { question: "Я", answer: "ya", info: "Like 'ya' in French" }
    ]
  }
};

const useAlphabetFlashcards = () => {
  const { language } = useContext(LanguageContext);
  return {
    data: translations[language].data,
    title: translations[language].title
  };
};

export { useAlphabetFlashcards }; 