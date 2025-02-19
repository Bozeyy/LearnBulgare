import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import AppRoutes from "./pages/AppRoutes";
import "./css/App.css";

function App() {
  return (
    <Router>
      <Header />
      <main className='p-4'>
        <AppRoutes />
      </main>
    </Router>
  );
}

export default App;
