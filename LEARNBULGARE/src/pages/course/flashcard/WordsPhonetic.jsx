import React, { useState, useEffect } from 'react';
import "../css/WordQuiz.css"

function WordsPhonetic() {
    // Liste de 20 mots bulgares avec leur transcription phonétique approximative
    const flashcards = [
        { word: "Здравей", phonetic: "zdravey", traduction: "Bonjour (informel)" },
        { word: "Здравейте", phonetic: "zdraveyte", traduction: "Bonjour (formel/pluriel)" },
        { word: "Чао", phonetic: "chao", traduction: "Au revoir" },
        { word: "Довиждане", phonetic: "dovizhdane", traduction: "Au revoir (formel)" },
        { word: "Да", phonetic: "da", traduction: "Oui" },
        { word: "Не", phonetic: "ne", traduction: "Non" },
        { word: "Благодаря", phonetic: "blagodarya", traduction: "Merci" },
        { word: "Моля", phonetic: "molya", traduction: "S'il vous plaît / De rien" },
        { word: "Извинете", phonetic: "izvinete", traduction: "Excusez-moi" },
        { word: "Съжалявам", phonetic: "sazhalyavam", traduction: "Je suis désolé(e)" },
        { word: "Как си?", phonetic: "kak si?", traduction: "Comment vas-tu ?" },
        { word: "Как сте?", phonetic: "kak ste?", traduction: "Comment allez-vous ?" },
        { word: "Добре", phonetic: "dobre", traduction: "Bien" },
        { word: "Лошо", phonetic: "losho", traduction: "Mal" },
        { word: "Как се казваш?", phonetic: "kak se kazvash?", traduction: "Comment t'appelles-tu ?" },
        { word: "Казвам се...", phonetic: "kazvam se...", traduction: "Je m'appelle..." },
        { word: "Откъде си?", phonetic: "otkade si?", traduction: "D'où viens-tu ?" },
        { word: "Аз съм от...", phonetic: "az sam ot...", traduction: "Je viens de..." },
        { word: "Приятно ми е", phonetic: "priyatno mi e", traduction: "Enchanté(e)" },
        { word: "Разбирам", phonetic: "razbiram", traduction: "Je comprends" },
        { word: "Не разбирам", phonetic: "ne razbiram", traduction: "Je ne comprends pas" },
        { word: "Говорите ли английски?", phonetic: "govorite li angliyski?", traduction: "Parlez-vous anglais ?" },
        { word: "Къде е...?", phonetic: "kade e...?", traduction: "Où est...?" },
        { word: "Тоалетната", phonetic: "toaletnata", traduction: "Les toilettes" },
        { word: "Помощ!", phonetic: "pomoshch!", traduction: "À l'aide !" },
        { word: "Колко струва?", phonetic: "kolko struva?", traduction: "Combien ça coûte ?" },
        { word: "Сметката, моля", phonetic: "smetkata, molya", traduction: "L'addition, s'il vous plaît" },
        { word: "Храна", phonetic: "khrana", traduction: "Nourriture" },
        { word: "Вода", phonetic: "voda", traduction: "Eau" },
        { word: "Бира", phonetic: "bira", traduction: "Bière" },
        { word: "Вино", phonetic: "vino", traduction: "Vin" },
        { word: "Хляб", phonetic: "hlyab", traduction: "Pain" },
        { word: "Мляко", phonetic: "mlyako", traduction: "Lait" },
        { word: "Кафе", phonetic: "kafe", traduction: "Café" },
        { word: "Чай", phonetic: "chay", traduction: "Thé" },
        { word: "Месо", phonetic: "meso", traduction: "Viande" },
        { word: "Зеленчуци", phonetic: "zelenchutsi", traduction: "Légumes" },
        { word: "Плодове", phonetic: "plodove", traduction: "Fruits" },
        { word: "Работа", phonetic: "rabota", traduction: "Travail" },
        { word: "Къща", phonetic: "kashta", traduction: "Maison" },
        { word: "Семейство", phonetic: "semeystvo", traduction: "Famille" },
        { word: "Приятел", phonetic: "priyatel", traduction: "Ami (masculin)" },
        { word: "Приятелка", phonetic: "priyatelka", traduction: "Amie (féminin)" },
        { word: "Мъж", phonetic: "mazh", traduction: "Homme" },
        { word: "Жена", phonetic: "zhena", traduction: "Femme" },
        { word: "Дете", phonetic: "dete", traduction: "Enfant" },
        { word: "Сутрин", phonetic: "sutrin", traduction: "Matin" },
        { word: "Вечер", phonetic: "vecher", traduction: "Soir" },
        { word: "Нощ", phonetic: "nosht", traduction: "Nuit" },
        { word: "Днес", phonetic: "dnes", traduction: "Aujourd'hui" }
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
                            {showPhonetic ? card.phonetic : card.word}
                        </h1>
                        <p>
                            {/* si showPhonetic alors on affiche la traduction */}
                            {showPhonetic && card.traduction}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default WordsPhonetic;