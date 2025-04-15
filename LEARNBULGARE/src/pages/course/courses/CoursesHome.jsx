import { Link } from 'react-router-dom';
import { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext";
import "../../../css/CourseStyle/CourseHome.css";

function CoursesHome() {
    const { language } = useContext(LanguageContext);

    const translations = {
        fr: {
            courses: "Cours",
            conjugation: "Conjugaison",
            grammar: "Grammaire",
            vocabulary: "Vocabulaire",
            pronunciation: "Prononciation"
        },
        en: {
            courses: "Courses",
            conjugation: "Conjugation",
            grammar: "Grammar",
            vocabulary: "Vocabulary",
            pronunciation: "Pronunciation"
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
                    <Link to="/conjugation">
                        <div className='course'>
                            <div className="icon_course">
                                <img src="./images/grammar.png" alt="" />
                            </div>
                            <div className="title_course">
                                <h1 id="title_course">{translations[language].conjugation}</h1>
                            </div>
                        </div>
                    </Link>
                    <Link to="/grammar">
                        <div className='course'>
                            <div className="icon_course">
                                <img src="./images/grammar.png" alt="" />
                            </div>
                            <div className="title_course">
                                <h1 id="title_course">{translations[language].grammar}</h1>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="line_course">
                    <Link to="/vocabulary">
                        <div className='course'>
                            <div className="icon_course">
                                <img src="./images/word.png" alt="" />
                            </div>
                            <div className="title_course">
                                <h1 id="title_course">{translations[language].vocabulary}</h1>
                            </div>
                        </div>
                    </Link>
                    <Link to="/pronunciation">
                        <div className='course'>
                            <div className="icon_course">
                                <img src="./images/sound.png" alt="" />
                            </div>
                            <div className="title_course">
                                <h1 id="title_course">{translations[language].pronunciation}</h1>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CoursesHome; 