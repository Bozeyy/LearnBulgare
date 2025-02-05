import React, { useState, useEffect } from 'react';
import "../css/Alphabet.css"

function WordsPhonetic() {
    // Liste de 20 mots bulgares avec leur transcription phonétique approximative
    const flashcards = [
        { word: "Здравей", phonetic: "zdravey" },
        { word: "Благодаря", phonetic: "blagodarya" },
        { word: "Моля", phonetic: "molya" },
        { word: "Добър", phonetic: "dobur" },
        { word: "Лош", phonetic: "losh" },
        { word: "Книга", phonetic: "kniga" },
        { word: "Вода", phonetic: "voda" },
        { word: "Хляб", phonetic: "hlyab" },
        { word: "Мляко", phonetic: "mlyako" },
        { word: "Слънце", phonetic: "slantse" },
        { word: "Луна", phonetic: "luna" },
        { word: "Земя", phonetic: "zemya" },
        { word: "Река", phonetic: "reka" },
        { word: "Планина", phonetic: "planina" },
        { word: "Град", phonetic: "grad" },
        { word: "Село", phonetic: "selo" },
        { word: "Любов", phonetic: "lyubov" },
        { word: "Приятел", phonetic: "priyatel" },
        { word: "Семейство", phonetic: "semeystvo" },
        { word: "Работа", phonetic: "rabota" }
    ];

    // État pour stocker le mot sélectionné
    const [card, setCard] = useState(null);
    // État pour savoir si l’on affiche la phonétique ou le mot
    const [showPhonetic, setShowPhonetic] = useState(false);

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

    return (
        <div style={{ padding: "20px" }}>
            <h2>Flashcards de Mots Bulgares</h2>
            <p>Cliquez sur le mot pour afficher sa phonétique.</p>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                {card && (
                    <div
                        className="flashcard"
                        onClick={handleClick}
                        style={{
                            fontSize: "2rem",
                            cursor: "pointer",
                            userSelect: "none",
                            textAlign: "center",
                            marginTop: "20px",
                            border: "1px solid black",
                            width: "15em",
                            height: "8em",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "10px",
                            padding: "10px"
                        }}
                    >
                        {showPhonetic ? card.phonetic : card.word}
                    </div>
                )}
            </div>
        </div>
    );
}

export default WordsPhonetic;