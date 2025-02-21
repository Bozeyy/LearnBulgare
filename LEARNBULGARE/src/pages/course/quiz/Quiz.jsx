import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext"; // Import du contexte
import "../../../css/CourseStyle/QuizStyle.css";

function Quiz({ quiz_questions, title }) {
    const [usedquiz_questions, setUsedquiz_questions] = useState([]);
    const [currentCard, setCurrentCard] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [total, setTotal] = useState(0);
    const [feedback, setFeedback] = useState(null);
    
    const { language } = useContext(LanguageContext); // Récupération de la langue

    // Traductions des textes affichés
    const translations = {
        fr: {
            score: "Score",
            correct: "Correct !",
            incorrect: "Incorrect !",
            nextQuestion: "Nouvelle question dans 1,5s..."
        },
        en: {
            score: "Score",
            correct: "Correct!",
            incorrect: "Incorrect!",
            nextQuestion: "New question in 1.5s..."
        }
    };

    useEffect(() => {
        generateNewQuestion();
    }, [quiz_questions, language]); // Régénérer les questions si la langue change

    function getRandomElement(arr) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        let randomElement = arr[randomIndex];
        if (usedquiz_questions.includes(randomElement)) {
            return getRandomElement(arr);
        } else {
            return randomElement;
        }
    }

    function generateNewQuestion() {
        document.body.style.backgroundColor = "#f3f3f3";

        let buttons = document.querySelectorAll(".answers button");
        buttons.forEach(button => {
            button.style.backgroundColor = "green";
        });

        const correctCard = getRandomElement(quiz_questions);
        let wrongAnswers = quiz_questions.filter(card => card.answer !== correctCard.answer);
        wrongAnswers = wrongAnswers.sort(() => 0.5 - Math.random()).slice(0, 3);
        const newAnswers = [...wrongAnswers, correctCard].sort(() => 0.5 - Math.random());

        setCorrectAnswer(correctCard);
        setCurrentCard(correctCard);
        setAnswers(newAnswers);
        setFeedback(null);
    }

    function handleAnswer(selectedAnswer) {
        setTotal(total + 1);
        setUsedquiz_questions([...usedquiz_questions, currentCard]);

        let buttons_inco = document.querySelectorAll(".answers button.incorrect");
        let buttons_cor = document.querySelectorAll(".answers button.correct");
        buttons_inco.forEach(button => button.style.backgroundColor = "red");
        buttons_cor.forEach(button => button.style.backgroundColor = "green");

        if (selectedAnswer === currentCard.answer) {
            setScore(score + 1);
            setFeedback(translations[language].correct);
            document.body.style.backgroundColor = "#8FBC8B";
        } else {
            setFeedback(translations[language].incorrect);
            document.body.style.backgroundColor = "#E9967A";
        }

        setTimeout(generateNewQuestion, 1500);
    }

    return (
        <div>
            <div className="title_course">
                <h1>{title}</h1>
                <p>{translations[language].score}: {score} / {total}</p>
            </div>
            <div className="quiz">
                {currentCard && (
                    <div className="question_display">
                        <p>{currentCard.question}</p>
                    </div>
                )}
                <div className="answers">
                    {answers.map((answer, index) => (
                        <button 
                            key={index} 
                            onClick={() => handleAnswer(answer.answer)}
                            className={answer === correctAnswer ? "correct" : "incorrect"}
                        >
                            {answer.answer}
                        </button>
                    ))}
                </div>
                {feedback && <p>{feedback}</p>}
            </div>
        </div>
    );
}

export default Quiz;
