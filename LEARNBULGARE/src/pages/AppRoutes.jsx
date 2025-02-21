import { Routes, Route } from 'react-router-dom';
import Home from "./Home";

import QuizHome from "./course/quiz/QuizHome";
import { useLetterQuizData } from "./course/quiz/data/letterphonetic"; // Import du hook
import { useVerbes0_10QuizData } from "./course/quiz/data/verbes_quiz_0_10"; // Import du hook


import Quiz from "./course/quiz/Quiz";
import FlashCardHome from "./course/flashcard/FlashCardHome";
import Alphabet from "./course/flashcard/Alphabet";
import FlashCard from './course/flashcard/FlashCard';

import { usePronounFlashcards } from "./course/flashcard/data/pronom";
import { useWordsFlashcards } from "./course/flashcard/data/wordphonetic";
import { useVerb0_10Flashcards } from "./course/flashcard/data/verbesc_0_10";

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quizHome" element={<QuizHome />} />
            <Route
                path="/alphabetQuizz"
                element={
                    <Quiz
                        quiz_questions={useLetterQuizData().data}
                        title={useLetterQuizData().title}
                    />
                }
            />
            <Route
                path="/verbesQuiz_0_10"
                element={
                    <Quiz
                        quiz_questions={useVerbes0_10QuizData().data}
                        title={useVerbes0_10QuizData().title}
                    />
                }
            />



            <Route path="/flashCardHome" element={<FlashCardHome />} />
            <Route path="/alphabet" element={<Alphabet />} />
            <Route
                path="/pronomFlashcard"
                element={<FlashCard flashcards={usePronounFlashcards().data} title={usePronounFlashcards().title} />}
            />
            <Route
                path="/wordsPhonetic"
                element={<FlashCard flashcards={useWordsFlashcards().data} title={useWordsFlashcards().title} />}
            />
            <Route
                path="/verbesc_0_10"
                element={<FlashCard flashcards={useVerb0_10Flashcards().data} title={useVerb0_10Flashcards().title} />}
            />
        </Routes>
    );
};

export default AppRoutes;
