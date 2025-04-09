import { Link } from 'react-router-dom';
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext"; // Import du contexte
import "../css/HomeStyle.css";
import "../css/LineCourse.css";

function Home() {
    const { language } = useContext(LanguageContext); // Récupérer la langue sélectionnée

    // Traductions des textes affichés
    const translations = {
        fr: {
            welcome: "Bienvenue sur Learn Bulgarian !",
            flashcardCourse: "Cours de Flashcards",
            quizCourse: "Cours de Quiz"
        },
        en: {
            welcome: "Welcome to Learn Bulgarian!",
            flashcardCourse: "Flashcard Course",
            quizCourse: "Quiz Course"
        }
    };

    return (
        <div className="home">
            <div className="title_home">
                <h2>{translations[language].welcome}</h2>
            </div>
            
            <div className="line_course">
                <Link to="/flashCardHome">
                    <div className='course'>
                        <div className="icon_course">
                            <img src="./images/flashcard_icon.png" alt="" />
                        </div>
                        <div className="title_course">
                            <h1 id="title_course">{translations[language].flashcardCourse}</h1>
                        </div>
                    </div>
                </Link>
                <Link to="/quizHome">
                    <div className='course'>
                        <div className="icon_course">
                            <img src="./images/quiz.webp" alt="" />
                        </div>
                        <div className="title_course">
                            <h1 id="title_course">{translations[language].quizCourse}</h1>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Home;
