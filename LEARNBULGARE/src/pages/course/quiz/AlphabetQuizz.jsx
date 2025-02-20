import { useState, useEffect } from "react";
import "../../../css/AlphabetQuizz.css"
function AlphabetQuizz() {
    const flashcards = [
        { question: "А", answer: "a" },
        { question: "Б", answer: "b" },
        { question: "В", answer: "v" },
        { question: "Г", answer: "ɡ" },
        { question: "Д", answer: "d" },
        { question: "Е", answer: "e" },
        { question: "Ж", answer: "j" },
        { question: "З", answer: "z" },
        { question: "И", answer: "i" },
        { question: "Й", answer: "ille" },
        { question: "К", answer: "k" },
        { question: "Л", answer: "l" },
        { question: "М", answer: "m" },
        { question: "Н", answer: "n" },
        { question: "О", answer: "o" },
        { question: "П", answer: "p" },
        { question: "Р", answer: "r" },
        { question: "С", answer: "s" },
        { question: "Т", answer: "t" },
        { question: "У", answer: "ou" },
        { question: "Ф", answer: "f" },
        { question: "Х", answer: "k" },
        { question: "Ц", answer: "tZ" },
        { question: "Ч", answer: "tch" },
        { question: "Ш", answer: "ch" },
        { question: "Щ", answer: "cht" },
        { question: "Ъ", answer: "(euh)" },
        { question: "Ю", answer: "iou" },
        { question: "Я", answer: "ya" }
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
        let wrongAnswers = flashcards.filter(card => card.answer !== correctCard.answer);
        wrongAnswers = wrongAnswers.sort(() => 0.5 - Math.random()).slice(0, 3);
        const newAnswers = [...wrongAnswers, correctCard].sort(() => 0.5 - Math.random());

        setCorrectAnswer(correctCard);
        setCurrentCard(correctCard);
        setAnswers(newAnswers);
        setFeedback(null);
    }

    function handleAnswer(selectedanswer) {
        setTotal(total + 1);
        // on push dans le tableau usedFlashcards le currentCard
        console.log("currentCard: " + currentCard);
        setUsedFlashcards([...usedFlashcards, currentCard]);

        if (selectedanswer === currentCard.answer) {
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
                        <p>{currentCard.question}</p>
                    </div>
                )}
                <div className="answers">
                    {answers.map((answer, index) => (
                        <button
                            key={index}
                            className={answer === correctAnswer ? "correct" : "incorrect"}
                            onClick={() => handleAnswer(answer.answer)}
                        >
                            {answer.answer}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AlphabetQuizz;
