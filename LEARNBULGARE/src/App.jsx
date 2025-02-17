import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Alphabet from './pages/Alphabet';
import AlphabetQuizz from './pages/AlphabetQuizz';
import Courses from './pages/Courses';  
import WordsPhonetic from './pages/WordsPhonetic';
import PronomFlashcard from './pages/course/PronomFlashcard';
import "./css/App.css"

function App() {
  return (
    <Router>
      <Header />
      <main className='p-4'> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alphabet" element={<Alphabet />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/wordPhonetic" element={<WordsPhonetic />} />
          <Route path="/alphabetQuizz" element={<AlphabetQuizz />} />
          <Route path="/pronomFlashcard" element={<PronomFlashcard />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
