import { Routes, Route } from 'react-router-dom';
import Home from "./Home";

import QuizHome from "./course/quiz/QuizHome";
import AlphabetQuizz from "./course/quiz/AlphabetQuizz";

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
      <Route path="/alphabetQuizz" element={<AlphabetQuizz />} />

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
