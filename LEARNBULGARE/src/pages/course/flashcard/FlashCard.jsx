import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from "../../../context/LanguageContext"; // Import du contexte
import "../../../css/CourseStyle/FlashCard/FlashCard.css";

function FlashCard({ flashcards, title }) {
    const [card, setCard] = useState(null);
    const [showInfo, setShowInfo] = useState(false);
    const { language } = useContext(LanguageContext); // Récupérer la langue sélectionnée

    // Traductions des textes affichés
    const translations = {
        fr: {
            clickToShow: "Cliquez pour afficher la phonétique",
            clickForNew: "Cliquez pour un nouveau mot"
        },
        en: {
            clickToShow: "Click to show phonetics",
            clickForNew: "Click for a new word"
        }
    };

    useEffect(() => {
        setRandomCard();
    }, [flashcards, language]); // Changer la carte quand la langue change

    const setRandomCard = () => {
        if (flashcards.length > 0) {
            const randomIndex = Math.floor(Math.random() * flashcards.length);
            setCard(flashcards[randomIndex]);
        }
    };

    const handleClick = () => {
        if (showInfo) {
            setRandomCard();
            setShowInfo(false);
        } else {
            setShowInfo(true);
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <div className="course_title">
                <h2>{title}</h2>
                <p>{showInfo ? translations[language].clickForNew : translations[language].clickToShow}</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                {card && (
                    <div className="flashcard" onClick={handleClick}>
                        <h1>{showInfo ? card.answer : card.question}</h1>
                        <p>{showInfo && card.info}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FlashCard;
