import { Link } from 'react-router-dom';
import { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext"; // Import du contexte
import "../../../css/CourseStyle/CourseHome.css";

function QuizHome() {
    const { language } = useContext(LanguageContext); // Récupérer la langue sélectionnée

    // Traductions des textes affichés
    const translations = {
        fr: {
            courses: "Cours",
            alphabetQuiz: "Quiz sur la phonétique de l'alphabet",
            verbsQuiz: "Quiz sur 10 verbes",
            interroWords: "Mots interrogatifs"
        },
        en: {
            courses: "Courses",
            alphabetQuiz: "Alphabet Phonetics Quiz",
            verbsQuiz: "10 Verbs Quiz",
            interroWords: "Interrogative Words"
        }
    };

    return (
        <div className="title"
            style={{
                padding: "20px",
            }}
        >
            <div>
                <h2>{translations[language].courses}</h2>
            </div>
            <div className="content">
                <div className="line_course">
                    <Link to="/alphabetQuizz">
                        <div className='course'>
                            <div className="icon_course">
                                <img src="./images/alphabet.png" alt="" />
                            </div>
                            <div className="title_course">
                                <h1 id="title_course">{translations[language].alphabetQuiz}</h1>
                            </div>
                        </div>
                    </Link>
                    <Link to="/verbesQuiz_0_10">
                        <div className='course'>
                            <div className="icon_course">
                                <img src="./images/verbs.png" alt="" />
                            </div>
                            <div className="title_course">
                                <h1 id="title_course">{translations[language].verbsQuiz}</h1>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="line_course">
                    <Link to="/interroWords">
                        <div className='course'>
                            <div className="icon_course">
                                <img src="./images/alphabet.png" alt="" />
                            </div>
                            <div className="title_course">
                                <h1 id="title_course">{translations[language].interroWords}</h1>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div >
    );
}

export default QuizHome;
