import { useState, useEffect } from "react";
import "../../../css/CourseStyle/QuizStyle.css";

function Quiz({ quiz_questions, title }) {
    const [usedquiz_questions, setUsedquiz_questions] = useState([]);
    const [currentCard, setCurrentCard] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [total, setTotal] = useState(0);
    const [feedback, setFeedback] = useState(null);

    useEffect(() => {
        console.log("Questions : \n", quiz_questions);
        generateNewQuestion();
    }, []);

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
        
        // on met tout les boutons dans la div answers en green
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

        // on met tout les boutons dans la div answers avec la classe correct en vert et incorrect en rouge
        let buttons_inco = document.querySelectorAll(".answers button.incorrect");
        let buttons_cor = document.querySelectorAll(".answers button.correct");
        buttons_inco.forEach(button => {
            button.style.backgroundColor = "red";
        });
        buttons_cor.forEach(button => {
            button.style.backgroundColor = "green";
        });

        if (selectedAnswer === currentCard.answer) {
            setScore(score + 1);
            setFeedback("correct");
            document.body.style.backgroundColor = "#8FBC8B";
        } else {
            setFeedback("incorrect");
            document.body.style.backgroundColor = "#E9967A";
        }
        setTimeout(generateNewQuestion, 1500);
    }

    return (
        <div>
            <div className="title_course">
                <h1>{title}</h1>
                <p>Score: {score} / {total} </p>
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

export default Quiz;
