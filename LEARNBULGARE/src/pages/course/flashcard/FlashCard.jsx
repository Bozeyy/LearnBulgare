import React, { useState, useEffect, useContext, useRef } from 'react';
import { LanguageContext } from "../../../context/LanguageContext";
import "../../../css/CourseStyle/FlashCard/FlashCard.css";

function FlashCard({ flashcards, title }) {
    const [card, setCard] = useState(null);
    const [showInfo, setShowInfo] = useState(false);
    const { language } = useContext(LanguageContext);
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    const translations = {
        fr: {
            clickToShow: "Glissez ou cliquez pour afficher la phonétique",
            clickForNew: "Glissez ou cliquez pour un nouveau mot"
        },
        en: {
            clickToShow: "Swipe or tap to show phonetics",
            clickForNew: "Swipe or tap for a new word"
        }
    };

    useEffect(() => {
        const newCard = getRandomCard();
        setCard(newCard);
        setShowInfo(false);
    }, [flashcards, language]);

    const getRandomCard = () => {
        if (flashcards.length === 0) return null;
        const randomIndex = Math.floor(Math.random() * flashcards.length);
        return flashcards[randomIndex];
    };

    const handleTapOrSwipeLeft = () => {
        if (showInfo) {
            const newCard = getRandomCard();
            setCard(newCard);
            setShowInfo(false);
        } else {
            setShowInfo(true);
        }
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.changedTouches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.changedTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current === null || touchEndX.current === null) return;

        const distance = touchStartX.current - touchEndX.current;

        if (distance > 50) {
            // Swipe gauche
            handleTapOrSwipeLeft();
        } else if (distance < -50) {
            // Swipe droite
            if (showInfo) {
                setShowInfo(false);
            }
        }

        // Reset
        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <div className='content_flashcourse' style={{ padding: "20px" }}>
            <div className="course_title">
                <h2>{title}</h2>
                <p>{showInfo ? translations[language].clickForNew : translations[language].clickToShow}</p>
            </div>

            <div className="flashcard-wrapper">
                <div
                    className="flashcard"
                    onClick={handleTapOrSwipeLeft}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {card && (
                        <>
                            <h1>{showInfo ? card.answer : card.question}</h1>
                            <p>{showInfo && card.info}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FlashCard;
