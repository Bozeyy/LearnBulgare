import React, { useState, useEffect } from 'react';
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

    // État pour stocker la carte flash choisie
    const [card, setCard] = useState(null);
    // État pour savoir si l’on affiche la phonétique ou la lettre
    const [showPhonetic, setShowPhonetic] = useState(false);

    // À l'affichage du composant, choisir une carte aléatoire
    useEffect(() => {
        setCardRamdom();
    }, []);

    const setCardRamdom = () => {
        const randomIndex = Math.floor(Math.random() * flashcards.length);
        setCard(flashcards[randomIndex]);
    };

    // Gérer le clic pour basculer entre lettre et phonétique
    const handleClick = () => {
        const flashcard = document.querySelector(".flashcard");
        if (showPhonetic) {
            setCardRamdom();
            // on set le background de la carte
            flashcard.style.backgroundColor = "#c8b4f0";
            setShowPhonetic(false);
        } else {
            setShowPhonetic(true);
            flashcard.style.backgroundColor = "rgb(195, 195, 195)";
        }
    };

    return (
        <div style={{
            padding: "20px",
        }}>
            <div className="course_title">
                <h2>L'Alphabet Bulgare</h2>
                <p className="">
                    {showPhonetic ? "Cliquez pour une nouvelle lettre" : "Cliquez pour afficher la phonétique"}
                </p>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                {card && (
                    <div
                        className="flashcard"
                        onClick={handleClick}
                    >
                        {showPhonetic ? card.phonetic : card.letter}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Alphabet;
