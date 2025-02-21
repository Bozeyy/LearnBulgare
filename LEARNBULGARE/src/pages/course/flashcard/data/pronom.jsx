import { useContext } from "react";
import { LanguageContext } from "../../../../context/LanguageContext"; // Import du contexte

const translations = {
  fr: {
    title: "Pronoms personnels",
    pronouns: [
      { answer: "Аз", info: "Az", question: "Je" },
      { answer: "Ти", info: "Ti", question: "Tu" },
      { answer: "Той", info: "Toï", question: "Il" },
      { answer: "Тя", info: "Tia", question: "Elle" },
      { answer: "То", info: "To", question: "Il/Elle" },
      { answer: "Ние", info: "Nie", question: "Nous" },
      { answer: "Вие", info: "Vie", question: "Vous" },
      { answer: "Те", info: "Te", question: "Ils/Elles" }
    ]
  },
  en: {
    title: "Personal pronouns",
    pronouns: [
      { answer: "Аз", info: "Az", question: "I" },
      { answer: "Ти", info: "Ti", question: "You" },
      { answer: "Той", info: "Toï", question: "He" },
      { answer: "Тя", info: "Tia", question: "She" },
      { answer: "То", info: "To", question: "It" },
      { answer: "Ние", info: "Nie", question: "We" },
      { answer: "Вие", info: "Vie", question: "You (plural/formal)" },
      { answer: "Те", info: "Te", question: "They" }
    ]
  }
};

const usePronounFlashcards = () => {
  const { language } = useContext(LanguageContext);
  return {
    data: translations[language].pronouns,
    title: translations[language].title
  };
};

export { usePronounFlashcards };
