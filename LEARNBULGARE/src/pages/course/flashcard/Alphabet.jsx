import React, { useState, useEffect, useRef } from 'react';
import "../../../css/CourseStyle/FlashCard/FlashCard.css";

function Alphabet() {
    const flashcards = [
        { letter: "А", phonetic: "a" },
        { letter: "Б", phonetic: "b" },
        { letter: "В", phonetic: "v" },
        { letter: "Г", phonetic: "ɡ" },
        { letter: "Д", phonetic: "d" },
        { letter: "Е", phonetic: "e" },
        { letter: "Ж", phonetic: "j" },
        { letter: "З", phonetic: "z" },
        { letter: "И", phonetic: "i" },
        { letter: "Й", phonetic: "ille" },
        { letter: "К", phonetic: "k" },
        { letter: "Л", phonetic: "l" },
        { letter: "М", phonetic: "m" },
        { letter: "Н", phonetic: "n" },
        { letter: "О", phonetic: "o" },
        { letter: "П", phonetic: "p" },
        { letter: "Р", phonetic: "r" },
        { letter: "С", phonetic: "s" },
        { letter: "Т", phonetic: "t" },
        { letter: "У", phonetic: "ou" },
        { letter: "Ф", phonetic: "f" },
        { letter: "Х", phonetic: "k" },
        { letter: "Ц", phonetic: "tZ" },
        { letter: "Ч", phonetic: "tch" },
        { letter: "Ш", phonetic: "ch" },
        { letter: "Щ", phonetic: "cht" },
        { letter: "Ъ", phonetic: "(euh)" },
        { letter: "Ю", phonetic: "iou" },
        { letter: "Я", phonetic: "ya" }
    ];

    const [card, setCard] = useState(null);
    const [showPhonetic, setShowPhonetic] = useState(false);

    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    useEffect(() => {
        setRandomCard();
    }, []);

    const setRandomCard = () => {
        const randomIndex = Math.floor(Math.random() * flashcards.length);
        setCard(flashcards[randomIndex]);
        setShowPhonetic(false);
    };

    const handleTapOrSwipeLeft = () => {
        if (showPhonetic) {
            setRandomCard();
        } else {
            setShowPhonetic(true);
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
            if (showPhonetic) {
                setShowPhonetic(false);
            }
        }

        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <div className="content_flashcourse" style={{ padding: "20px" }}>
            <div className="course_title">
                <h2>L'Alphabet Bulgare</h2>
                <p>
                    {showPhonetic
                        ? "Glissez ou cliquez pour une nouvelle lettre"
                        : "Glissez ou cliquez pour afficher la phonétique"}
                </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                {card && (
                    <div
                        className={`flashcard ${showPhonetic ? "flashcard--phonetic" : ""}`}
                        onClick={handleTapOrSwipeLeft}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {showPhonetic ? card.phonetic : card.letter}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Alphabet;
