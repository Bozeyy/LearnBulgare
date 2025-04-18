import { Routes, Route } from 'react-router-dom';
import Home from "./Home";

import QuizHome from "./course/quiz/QuizHome";
import { useLetterQuizData } from "../data/letterphonetic.jsx"; // Import du hook
import { useVerb0_10Flashcards } from "../data/verbesc_0_10.jsx"; // Import du hook
import { useInterrogativeWordsQuizData } from "../data/interro_words.jsx"; // Import du hook
import { useIndicationVerbsQuizData } from "../data/indication_verbs";

import Quiz from "./course/quiz/Quiz";
import FlashCardHome from "./course/flashcard/FlashCardHome";
import FlashCard from './course/flashcard/FlashCard';
import CoursesHome from "./course/courses/CoursesHome";
import ConjugaisonCourse from "./course/courses/ConjugaisonCourse";
import NombreCourse from "./course/courses/NombreCourse";
import NegationCourse from "./course/courses/NegationCourse";
import ConditionalCourse from "./course/courses/ConditionalCourse";
import PossessivePronounsCourse from "./course/courses/PossessivePronounsCourse";
import QualificativeAdjectivesCourse from "./course/courses/QualificativeAdjectivesCourse";
import GenderCourse from "./course/courses/GenderCourse";

import { usePronounFlashcards } from "../data/pronom.jsx";
import { useWordsFlashcards } from "../data/wordphonetic.jsx";
import { useNumberFlashcards } from "../data/nombre_1_10.jsx";
import { useNumber11to20Flashcards } from "../data/nombre_11_20.jsx";
import { useAlphabetFlashcards } from "../data/alphabet.jsx";

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quizHome" element={<QuizHome />} />
            <Route path="/coursesHome" element={<CoursesHome />} />
            <Route path="/courseNombre" element={<NombreCourse />} />
            <Route path="/conjugation" element={<ConjugaisonCourse />} />
            <Route path="/negationCourse" element={<NegationCourse />} />
            <Route path="/conditionalCourse" element={<ConditionalCourse />} />
            <Route path="/possessivePronounsCourse" element={<PossessivePronounsCourse />} />
            <Route path="/qualificativeAdjectivesCourse" element={<QualificativeAdjectivesCourse />} />
            <Route path="/genderCourse" element={<GenderCourse />} />

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
                        quiz_questions={useVerb0_10Flashcards().data}
                        title={useVerb0_10Flashcards().title}
                    />
                }
            />
            <Route
                path="/interroWords"
                element={
                    <Quiz
                        quiz_questions={useInterrogativeWordsQuizData().data}
                        title={useInterrogativeWordsQuizData().title}
                    />
                }
            />

            <Route path="/flashCardHome" element={<FlashCardHome />} />
            <Route
                path="/alphabet"
                element={<FlashCard flashcards={useAlphabetFlashcards().data} title={useAlphabetFlashcards().title} />}
            />
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
            <Route 
                path="/interroWordsFlash"
                element={<FlashCard flashcards={useInterrogativeWordsQuizData().data} title={useInterrogativeWordsQuizData().title} />}
            />
            <Route
                path="/nombres_1_10"
                element={<FlashCard flashcards={useNumberFlashcards().data} title={useNumberFlashcards().title} />}
            />
            <Route
                path="/nombres_11_20"
                element={<FlashCard flashcards={useNumber11to20Flashcards().data} title={useNumber11to20Flashcards().title} />}
            />
            <Route
                path="/indicationVerbs_quiz"
                element={
                    <Quiz
                        quiz_questions={useIndicationVerbsQuizData().data}
                        title={useIndicationVerbsQuizData().title}
                    />
                }
            />

        </Routes>
    );
};

export default AppRoutes;
