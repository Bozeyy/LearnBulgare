import { Routes, Route } from 'react-router-dom';
import Home from "./Home";

import QuizHome from "./course/quiz/QuizHome";

import { quiz_question_letters, letter_phon_quiz } from "./course/quiz/data/letterphonetic";
import { verbes_quiz_0_10, verbes_quiz_0_10_title } from "./course/quiz/data/verbes_quiz_0_10"

import Quiz from "./course/quiz/Quiz";
import FlashCardHome from "./course/flashcard/FlashCardHome";
import Alphabet from "./course/flashcard/Alphabet";
import FlashCard from './course/flashcard/FlashCard';

import { pronoms_flashcards, pronom_title } from "./course/flashcard/data/pronom";
import { wordsPhonetic_flashcards, word_title } from "./course/flashcard/data/wordphonetic";
import { verbesc_0_10, verbesc_0_10_title } from "./course/flashcard/data/verbesc_0_10";

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quizHome" element={<QuizHome />} />
            <Route
                path="/alphabetQuizz"
                element={<Quiz quiz_questions={quiz_question_letters} title={letter_phon_quiz} />}
            />
            <Route
                path="/verbesQuiz_0_10"
                element={<Quiz quiz_questions={verbes_quiz_0_10} title={verbes_quiz_0_10_title} />}
            />
            <Route path="/flashCardHome" element={<FlashCardHome />} />
            <Route path="/alphabet" element={<Alphabet />} />
            <Route
                path="/pronomFlashcard"
                element={<FlashCard flashcards={pronoms_flashcards} title={pronom_title} />}
            />
            <Route
                path="/wordsPhonetic"
                element={<FlashCard flashcards={wordsPhonetic_flashcards} title={word_title} />}
            />
            <Route
                path="/verbesc_0_10"
                element={<FlashCard flashcards={verbesc_0_10} title={verbesc_0_10_title} />}
            />
        </Routes>
    );
};

export default AppRoutes;
