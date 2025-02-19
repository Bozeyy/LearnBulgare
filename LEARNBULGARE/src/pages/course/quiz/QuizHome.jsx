import { Link } from 'react-router-dom';
import "../../../css/CourseStyle/CourseHome.css"

function QuizHome() {
    return (
        <div className="title"
            style={{
                padding: "20px",
            }}
        >
            <div>
                <h2>Courses</h2>
            </div>
            <div className="content">
                <div className="line_course">
                    <Link to="/alphabet">
                        <div className='course'>
                            <div className="icon_course">
                                <img src="./images/alphabet.png" alt="" />
                            </div>
                            <div className="title_course">
                                <h1 id="title_course">Alphabet Phonetics</h1>
                            </div>
                        </div>
                    </Link>
                    <Link to="/alphabetQuizz">
                        <div className='course'>
                            <div className="icon_course">
                                <img src="./images/quiz.webp" alt="" />
                            </div>
                            <div className="title_course">
                                <h1 id="title_course">Alphabet Phonetics Quizz</h1>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default QuizHome;