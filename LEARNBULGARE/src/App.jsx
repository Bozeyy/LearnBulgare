import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import AppRoutes from "./pages/AppRoutes";
import { LanguageProvider } from "./context/LanguageContext"; // Import du contexte
import "./css/App.css";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Header />
        <main className='p-4'>
          <AppRoutes />
        </main>
      </Router>
    </LanguageProvider>
  );
}

export default App;
