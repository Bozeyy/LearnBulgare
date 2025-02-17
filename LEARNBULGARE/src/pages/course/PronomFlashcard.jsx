import React, { useState, useEffect } from 'react';

function PronomFlashcard() {

    // pronom et traduction
    const flashcards = [
        { word: "Аз", phonetic: "Az", traduction: "Je" },
        { word: "Ти", phonetic: "Ti", traduction: "Tu" },
        { word: "Той", phonetic: "Toï", traduction: "Il" },
        { word: "Тя", phonetic: "Tia", traduction: "Elle" },
        { word: "То", phonetic: "To", traduction: "Il/Elle" },
        { word: "Ние", phonetic: "Nie", traduction: "Nous" },
        { word: "Вие", phonetic: "Vie", traduction: "Vous" },
        { word: "Те", phonetic: "Te", traduction: "Ils/Elles" }
    ];

    
    // État pour stocker le mot sélectionné
    const [card, setCard] = useState(null);

    // Au montage du composant, on choisit un mot aléatoire
    useEffect(() => {
        setRandomCard();
    }, []);

    const setRandomCard = () => {
        const randomIndex = Math.floor(Math.random() * flashcards.length);
        setCard(flashcards[randomIndex]);
    };

    // Au clic, si la phonétique est affichée on passe à un nouveau mot, sinon on l'affiche
    const handleClick = () => {
        if (showPhonetic) {
            setRandomCard();
            setShowPhonetic(false);
        } else {
            setShowPhonetic(true);
        }
    };


    const [showPhonetic, setShowPhonetic] = useState(false);

    return (
        <div style={{ padding: "20px" }}>
            <div className="course_title">
                <h2>Phonétique Mot Bulgare</h2>
                <p className="">
                    {showPhonetic ? "Cliquez pour un nouveau mot" : "Cliquez pour afficher la phonétique"}
                </p>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                {card && (
                    <div
                        className="flashcard"
                        onClick={handleClick}
                    >
                        <h1>
                            {showPhonetic ? card.word : card.traduction}
                        </h1>
                        <p>
                            {/* si showPhonetic alors on affiche la traduction */}
                            {showPhonetic && card.phonetic}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default PronomFlashcard;
