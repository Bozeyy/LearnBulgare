import { useState, useEffect } from "react";
import "../css/AlphabetQuizz.css";

function AlphabetQuizz() {
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

    const [usedFlashcards, setUsedFlashcards] = useState([]);
    const [currentCard, setCurrentCard] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [total, setTotal] = useState(0);
    const [feedback, setFeedback] = useState(null);

    useEffect(() => {
        generateNewQuestion();
    }, []);

    function getRandomElement(arr, exclude = []) {
        let filteredArray = arr.filter(item => !exclude.includes(item));
        if (filteredArray.length === 0) return null;
        return filteredArray[Math.floor(Math.random() * filteredArray.length)];
    }

    function generateNewQuestion() {
        document.body.style.backgroundColor = "#f3f3f3";

        if (usedFlashcards.length === flashcards.length) {
            // Réinitialisation si toutes les cartes ont été utilisées
            setUsedFlashcards([]);
        }

        const correctCard = getRandomElement(flashcards, usedFlashcards);

        if (correctCard) {
            let wrongAnswers = flashcards.filter(card => card.phonetic !== correctCard.phonetic);
            wrongAnswers = wrongAnswers.sort(() => 0.5 - Math.random()).slice(0, 3);
            const newAnswers = [...wrongAnswers, correctCard].sort(() => 0.5 - Math.random());

            setUsedFlashcards(prev => [...prev, correctCard]);
            setCurrentCard(correctCard);
            setAnswers(newAnswers);
            setFeedback(null);
        }
    }

    function handleAnswer(selectedPhonetic) {
        setTotal(prevTotal => prevTotal + 1);

        if (selectedPhonetic === currentCard.phonetic) {
            setScore(prevScore => prevScore + 1);
            setFeedback("correct");
            document.body.style.backgroundColor = "#8FBC8B";
        } else {
            setFeedback("incorrect");
            document.body.style.backgroundColor = "#E9967A";
        }

        console.log(usedFlashcards)
        setTimeout(generateNewQuestion, 1500);
    }

    return (
        <div>
            <div className="title_course">
                <h1>Alphabet Quizz</h1>
                <p>Score: {score} / {total} </p>
            </div>
            <div className="quizz">
                {currentCard && (
                    <div className="letter_to_find">
                        <p>{currentCard.letter}</p>
                    </div>
                )}
                <div className="answers">
                    {answers.map((answer, index) => (
                        <button
                            key={index}
                            className={feedback === "correct" && answer.phonetic === currentCard.phonetic ? "correct" :
                                       feedback === "incorrect" && answer.phonetic === currentCard.phonetic ? "highlight-correct" :
                                       feedback === "incorrect" && answer.phonetic !== currentCard.phonetic ? "incorrect" : ""}
                            onClick={() => handleAnswer(answer.phonetic)}
                        >
                            {answer.phonetic}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AlphabetQuizz;
