import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Alphabet from './pages/Alphabet';
import './css/App.css';

function App() {
  return (
    <Router>
      <Header />
      <main className='p-4'> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alphabet" element={<Alphabet />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
