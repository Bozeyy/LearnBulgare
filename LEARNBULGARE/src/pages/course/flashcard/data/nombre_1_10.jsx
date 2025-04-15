import { useContext } from "react";
import { LanguageContext } from "../../../../context/LanguageContext"; // Import du contexte

const translations = {
    fr: {
        title: "Les chiffres de 1 à 10",
        numbers: [
            { answer: "Едно", info: "Edno", question: "Un" },
            { answer: "Две", info: "Dvé", question: "Deux" },
            { answer: "Три", info: "Tri", question: "Trois" },
            { answer: "Четири", info: "Tchéttiri", question: "Quatre" },
            { answer: "Пет", info: "Pet", question: "Cinq" },
            { answer: "Шест", info: "Chest", question: "Six" },
            { answer: "Седем", info: "Sédèm", question: "Sept" },
            { answer: "Осем", info: "Osèm", question: "Huit" },
            { answer: "Девет", info: "Dèvèt", question: "Neuf" },
            { answer: "Десет", info: "Désèt", question: "Dix" }
        ]
    },
    en: {
        title: "Numbers from 1 to 10",
        numbers: [
            { answer: "Едно", info: "Edno", question: "One" },
            { answer: "Две", info: "Dve", question: "Two" },
            { answer: "Три", info: "Tri", question: "Three" },
            { answer: "Четири", info: "Chetiri", question: "Four" },
            { answer: "Пет", info: "Pet", question: "Five" },
            { answer: "Шест", info: "Shest", question: "Six" },
            { answer: "Седем", info: "Sedem", question: "Seven" },
            { answer: "Осем", info: "Osem", question: "Eight" },
            { answer: "Девет", info: "Devet", question: "Nine" },
            { answer: "Десет", info: "Deset", question: "Ten" }
        ]
    }
};

const useNumberFlashcards = () => {
    const { language } = useContext(LanguageContext);
    return {
        data: translations[language].numbers,
        title: translations[language].title
    };
};

export { useNumberFlashcards };
