import { LanguageContext } from "../../src/context/LanguageContext";
import { useContext } from "react";

const translations = {
    fr: {
        title: "Verbes d'indication",
        data: [
            { question: "показвам", answer: "montrer", info: "pokazvam" },
            { question: "обяснявам", answer: "expliquer", info: "obiasniavam" },
            { question: "демонстрирам", answer: "démontrer", info: "demonstriram" },
            { question: "илюстрирам", answer: "illustrer", info: "iliustriram" },
            { question: "описвам", answer: "décrire", info: "opisvam" },
            { question: "представям", answer: "présenter", info: "predstaviam" },
            { question: "излагам", answer: "exposer", info: "izlagam" },
            { question: "разказвам", answer: "raconter", info: "razkazvam" },
            { question: "информирам", answer: "informer", info: "informiram" },
            { question: "сообщавам", answer: "communiquer", info: "soobchtavam" }
        ]
    },
    en: {
        title: "Indication verbs",
        data: [
            { question: "показвам", answer: "to show", info: "pokazvam" },
            { question: "обяснявам", answer: "to explain", info: "obiasniavam" },
            { question: "демонстрирам", answer: "to demonstrate", info: "demonstriram" },
            { question: "илюстрирам", answer: "to illustrate", info: "iliustriram" },
            { question: "описвам", answer: "to describe", info: "opisvam" },
            { question: "представям", answer: "to present", info: "predstaviam" },
            { question: "излагам", answer: "to expose", info: "izlagam" },
            { question: "разказвам", answer: "to tell", info: "razkazvam" },
            { question: "информирам", answer: "to inform", info: "informiram" },
            { question: "сообщавам", answer: "to communicate", info: "soobchtavam" }
        ]
    }
};

const useIndicationVerbsQuizData = () => {
    const { language } = useContext(LanguageContext);
    return {
        data: translations[language].data,
        title: translations[language].title
    };
};

export { useIndicationVerbsQuizData }; 