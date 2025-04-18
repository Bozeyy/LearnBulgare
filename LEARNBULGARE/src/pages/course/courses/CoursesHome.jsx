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
            courseNombre: "Nombres",
            negation: "Négation",
            conditionCourse: "Conditionnel",
            possessivePronounsCourse: "Pronoms possessifs",
            qualificativeAdjectivesCourse: "Adjectifs qualificatifs",
            genderCourse: "Cours sur le masculin et féminin"
        },
        en: {
            courses: "Courses",
            conjugation: "Conjugation",
            courseNombre: "Numbers",
            negation: "Negation",
            conditionCourse: "Conditional",
            possessivePronounsCourse: "Possessive pronouns",
            qualificativeAdjectivesCourse: "Qualificative adjectives",
            genderCourse: "Courses on masculine and feminine"
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
                                <img src="./images/conjugaison.png" alt="" />
                            </div>
                            <div className="title_course">
                                <h1 id="title_course">{translations[language].conjugation}</h1>
                            </div>
                        </div>
                    </Link>
                    <Link to="/courseNombre">
                        <div className='course'>
                            <div className="icon_course">
                                <img src="./images/nbs.png" alt="" />
                            </div>
                            <div className="title_course">
                                <h1 id="title_course">{translations[language].courseNombre}</h1>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="line_course">
                    <Link to="/negationCourse">
                        <div className='course'>
                            <div className="icon_course">
                                <img src="./images/negation.png" alt="" />
                            </div>
                            <div className="title_course">
                                <h1 id="title_course">{translations[language].negation}</h1>
                            </div>
                        </div>
                    </Link>
                    <Link to="/conditionCourse">
                        <div className='course'>
                            <div className="icon_course">
                                <img src="./images/cond.png" alt="" />
                            </div>
                            <div className="title_course">
                                <h1 id="title_course">{translations[language].conditionCourse}</h1>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="line_course">
                    <Link to="/possessivePronounsCourse">
                        <div className='course'>
                            <div className="icon_course">
                                <img src="./images/cours.png" alt="" />
                            </div>
                            <div className="title_course">
                                <h1 id="title_course">{translations[language].possessivePronounsCourse}</h1>
                            </div>
                        </div>
                    </Link>
                    <Link to="/qualificativeAdjectivesCourse">
                        <div className='course'>
                            <div className="icon_course">
                                <img src="./images/adj.png" alt="" />
                            </div>
                            <div className="title_course">
                                <h1 id="title_course">{translations[language].qualificativeAdjectivesCourse}</h1>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="line_course">
                    <Link to="/genderCourse">
                        <div className='course'>
                            <div className="icon_course">
                                <img src="./images/gender.png" alt="" />
                            </div>
                            <div className="title_course">
                                <h1 id="title_course">{translations[language].genderCourse}</h1>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CoursesHome; 