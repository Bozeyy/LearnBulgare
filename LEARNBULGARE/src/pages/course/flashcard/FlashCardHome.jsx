import { Link } from 'react-router-dom';
import { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext"; // Import du contexte
import "../../../css/CourseStyle/CourseHome.css";

function FlashCardHome() {
    const { language } = useContext(LanguageContext); // Récupérer la langue sélectionnée

    // Traductions des textes affichés
    const translations = {
        fr: {
            courses: "Cours",
            alphabetFlashcards: "Flashcards Alphabet",
            pronounsFlashcards: "Flashcards Pronoms",
            wordsFlashcards: "Flashcards Mots courants",
            verbsFlashcards: "Flashcards Verbes courants",
            interroWordsFlash: "Flashcards Mots interrogatifs",
            nombreunAdix: "Flashcards Nombres 1 à 10",
            nombreonzeAvingt: "Flashcards Nombres 11 à 20"
        },
        en: {
            courses: "Courses",
            alphabetFlashcards: "Alphabet Flashcards",
            pronounsFlashcards: "Pronoun Flashcards",
            wordsFlashcards: "Common Words Flashcards",
            verbsFlashcards: "Common Verbs Flashcards",
            interroWordsFlash: "Interrogative Words Flashcards",
            nombreunAdix: "Numbers 1 to 10 Flashcards",
            nombreonzeAvingt: "Numbers 11 to 20 Flashcards"
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
                    <Link to="/alphabet">
                        <div className='course'>
                            <div className="icon_course">
                                <img src="./images/alphabet.png" alt="" />
                            </div>
                            <div className="title_course">
                                <h1 id="title_course">{translations[language].alphabetFlashcards}</h1>
                            </div>
                        </div>
                    </Link>
                    <Link to="/pronomFlashcard">
                        <div className='course'>
                            <div className="icon_course">
                                <img src="./images/pronom.png" alt="" />
                            </div>
                            <div className="title_course">
                                <h1 id="title_course">{translations[language].pronounsFlashcards}</h1>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="line_course">
                    <Link to="/wordsPhonetic">
                        <div className='course'>
                            <div className="icon_course">
                                <img src="./images/word.png" alt="" />
                            </div>
                            <div className="title_course">
                                <h1 id="title_course">{translations[language].wordsFlashcards}</h1>
                            </div>
                        </div>
                    </Link>
                    <Link to="/verbesc_0_10">
                        <div className='course'>
                            <div className="icon_course">
                                <img src="./images/verbs.png" alt="" />
                            </div>
                            <div className="title_course">
                                <h1 id="title_course">{translations[language].verbsFlashcards}</h1>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="line_course">
                    <Link to="/interroWordsFlash">
                        <div className='course'>
                            <div className="icon_course">
                                <img src="./images/word.png" alt="" />
                            </div>
                            <div className="title_course">
                                <h1 id="title_course">{translations[language].interroWordsFlash}</h1>
                            </div>
                        </div>
                    </Link>
                    <Link to="/nombres_1_10">
                        <div className='course'>
                            <div className="icon_course">
                                <img src="./images/chiffres.png" alt="" />
                            </div>
                            <div className="title_course">
                                <h1 id="title_course">{translations[language].nombreunAdix}</h1>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="line_course">
                    <Link to="/nombres_11_20">
                        <div className='course'>
                            <div className="icon_course">
                                <img src="./images/chiffres.png" alt="" />
                            </div>
                            <div className="title_course">
                                <h1 id="title_course">{translations[language].nombreonzeAvingt}</h1>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FlashCardHome;
