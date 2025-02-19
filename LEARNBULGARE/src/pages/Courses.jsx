import "../css/Courses.css"
import { Link } from 'react-router-dom';
import { BookA } from 'lucide-react';

function Courses() {
    return (
        <div style={{
            padding: "30px",
        }}>
            <div className="title">
                <h2>Courses</h2>
            </div>
            <div className="score_course">
                <p>Activité Total</p>
                <h1>000000</h1>
            </div>
            <div className="content">
                <div className="line_course">
                    <Link to="/alphabet">
                        <div className='course'>
                            <div className="icon_course">
                                <img src="./images/alphabet.png" alt="" />
                            </div>
                            <div className="title_course">
                                <h1>Alphabet Phonetics</h1>
                            </div>
                        </div>
                    </Link>
                    <Link to="/alphabetQuizz">
                        <div className='course'>
                            <div className="icon_course">
                                <img src="./images/quiz.webp" alt="" />
                            </div>
                            <div className="title_course">
                                <h1>Alphabet Phonetics Quizz</h1>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="line_course">
                    <Link to="/wordPhonetic">
                        <div className='course'>
                            <div className="icon_course">
                                <img src="./images/word.png" alt="" />
                            </div>
                            <div className="title_course">
                                <h1>Word Phonetics</h1>
                            </div>
                        </div>
                    </Link>
                    <Link to="/pronomFlashcard">
                        <div className='course'>
                            <div className="icon_course">
                                <img src="./images/pronom.png" alt="" />
                            </div>
                            <div className="title_course">
                                <h1>Pronom flashcard</h1>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Courses;