import { useContext } from "react";
import { LanguageContext } from "../../../../context/LanguageContext"; // Import du contexte

const translations = {
    fr: {
        title: "Les chiffres de 11 à 20",
        numbers: [
            { answer: "Единадесет", info: "Edinadéset", question: "Onze" },
            { answer: "Дванадесет", info: "Dvanadéset", question: "Douze" },
            { answer: "Тринадесет", info: "Trinadéset", question: "Treize" },
            { answer: "Четиринадесет", info: "Tchétirinadéset", question: "Quatorze" },
            { answer: "Петнадесет", info: "Pétnadéset", question: "Quinze" },
            { answer: "Шестнадесет", info: "Chéstnadéset", question: "Seize" },
            { answer: "Седемнадесет", info: "Sédemnadéset", question: "Dix-sept" },
            { answer: "Осемнадесет", info: "Ossemnadéset", question: "Dix-huit" },
            { answer: "Деветнадесет", info: "Dévétnadéset", question: "Dix-neuf" },
            { answer: "Двадесет", info: "Dvadéset", question: "Vingt" }
        ]
    },
    en: {
        title: "Numbers from 11 to 20",
        numbers: [
            { answer: "Единадесет", info: "Edinadeset", question: "Eleven" },
            { answer: "Дванадесет", info: "Dvanadeset", question: "Twelve" },
            { answer: "Тринадесет", info: "Trinadeset", question: "Thirteen" },
            { answer: "Четиринадесет", info: "Chetirinadeset", question: "Fourteen" },
            { answer: "Петнадесет", info: "Petnadeset", question: "Fifteen" },
            { answer: "Шестнадесет", info: "Shestnadeset", question: "Sixteen" },
            { answer: "Седемнадесет", info: "Sedemnadeset", question: "Seventeen" },
            { answer: "Осемнадесет", info: "Osemnadeset", question: "Eighteen" },
            { answer: "Деветнадесет", info: "Devetnadeset", question: "Nineteen" },
            { answer: "Двадесет", info: "Dvadeset", question: "Twenty" }
        ]
    }
};

const useNumber11to20Flashcards = () => {
    const { language } = useContext(LanguageContext);
    return {
        data: translations[language].numbers,
        title: translations[language].title
    };
};

export { useNumber11to20Flashcards }; 