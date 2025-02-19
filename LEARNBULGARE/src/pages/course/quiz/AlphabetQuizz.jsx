import { useState, useEffect } from "react";
import "../../../css/AlphabetQuizz.css"
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
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [total, setTotal] = useState(0);
    const [feedback, setFeedback] = useState(null);

    useEffect(() => {
        generateNewQuestion();
    }, []);
 
    function getRandomElement(arr) {
        // return arr[Math.floor(Math.random() * arr.length)];
        let randomIndex = Math.floor(Math.random() * arr.length);
        let randomElement = arr[randomIndex];
        // si l'élément est dans le tableau usedFlashcards
        if (usedFlashcards.includes(randomElement)) {
            return getRandomElement(arr);
        } else {
            return randomElement;
        }
    }

    function generateNewQuestion() {
        document.body.style.backgroundColor = "#f3f3f3";
        let p = document.querySelectorAll(".incorrect");
        p.forEach((element) => {
            element.style.backgroundColor = "#228B22";
        });
        let p2 = document.querySelectorAll(".correct");
        p2.forEach((element) => {
            element.style.backgroundColor = "#228B22";
        });

        const correctCard = getRandomElement(flashcards);
        let wrongAnswers = flashcards.filter(card => card.phonetic !== correctCard.phonetic);
        wrongAnswers = wrongAnswers.sort(() => 0.5 - Math.random()).slice(0, 3);
        const newAnswers = [...wrongAnswers, correctCard].sort(() => 0.5 - Math.random());

        setCorrectAnswer(correctCard);
        setCurrentCard(correctCard);
        setAnswers(newAnswers);
        setFeedback(null);
    }

    function handleAnswer(selectedPhonetic) {
        setTotal(total + 1);
        // on push dans le tableau usedFlashcards le currentCard
        console.log("currentCard: " + currentCard);
        setUsedFlashcards([...usedFlashcards, currentCard]);

        if (selectedPhonetic === currentCard.phonetic) {
            setScore(score + 1);
            setFeedback("correct");
            // on met la couleur du background du body en vert
            document.body.style.backgroundColor = "#8FBC8B";
            // on met le background des p avec la class correct en vert
            let p = document.querySelectorAll(".incorrect");
            p.forEach((element) => {
                element.style.backgroundColor = "#EF0107";
            });
        } else {
            setFeedback("incorrect");
            document.body.style.backgroundColor = "#E9967A";
            let p = document.querySelectorAll(".incorrect");
            p.forEach((element) => {
                element.style.backgroundColor = "#EF0107";
            });
        }
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
                            className={answer === correctAnswer ? "correct" : "incorrect"}
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
