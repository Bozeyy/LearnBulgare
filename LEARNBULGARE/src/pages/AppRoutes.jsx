import { Routes, Route } from 'react-router-dom';
import Home from "./Home";

import QuizHome from "./course/quiz/QuizHome";
import AlphabetQuizz from "./course/quiz/AlphabetQuizz";

import FlashCardHome from "./course/flashcard/FlashCardHome";
import Alphabet from "./course/flashcard/Alphabet";
import PronomFlashcard from "./course/flashcard/PronomFlashcard";
import WordsPhonetic from "./course/flashcard/WordsPhonetic";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quizHome" element={<QuizHome />} />
      <Route path="/alphabetQuizz" element={<AlphabetQuizz />} />

      <Route path="/flashCardHome" element={<FlashCardHome />} />
      <Route path="/alphabet" element={<Alphabet />} />
      <Route path="/pronomFlashcard" element={<PronomFlashcard />} />
      <Route path="/wordsPhonetic" element={<WordsPhonetic />} />
    </Routes>
  );
};

export default AppRoutes;
