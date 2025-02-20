import React, { useState, useEffect } from 'react';
import "../../../css/CourseStyle/FlashCard/FlashCard.css";

function FlashCard({ flashcards, title }) {
    const [card, setCard] = useState(null);
    const [showPhonetic, setShowPhonetic] = useState(false);

    useEffect(() => {
        setRandomCard();
    }, [flashcards]);

    const setRandomCard = () => {
        if (flashcards.length > 0) {
            const randomIndex = Math.floor(Math.random() * flashcards.length);
            setCard(flashcards[randomIndex]);
        }
    };

    const handleClick = () => {
        if (showPhonetic) {
            setRandomCard();
            setShowPhonetic(false);
        } else {
            setShowPhonetic(true);
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <div className="course_title">
                <h2>{title}</h2>
                <p>{showPhonetic ? "Cliquez pour un nouveau mot" : "Cliquez pour afficher la phonétique"}</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                {card && (
                    <div className="flashcard" onClick={handleClick}>
                        <h1>{showPhonetic ? card.word : card.traduction}</h1>
                        <p>{showPhonetic && card.phonetic}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FlashCard;
