import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Alphabet from './pages/Alphabet';
import Courses from './pages/Courses';  
import WordsPhonetic from './pages/WordsPhonetic';
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
        </Routes>
      </main>
    </Router>
  );
}

export default App;
