import { Link } from 'react-router-dom';
import "../../../css/CourseStyle/CourseHome.css"

function FlashCardHome() {
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
                    <Link to="/pronomFlashcard">
                        <div className='course'>
                            <div className="icon_course">
                                <img src="./images/pronom.png" alt="" />
                            </div>
                            <div className="title_course">
                                <h1 id="title_course">Pronoms flashcards</h1>
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
                                <h1 id="title_course">Words Phonetics</h1>
                            </div>
                        </div>
                    </Link>
                    <Link to="/verbesc_0_10">
                        <div className='course'>
                            <div className="icon_course">
                                <img src="./images/verbs.png" alt="" />
                            </div>
                            <div className="title_course">
                                <h1 id="title_course">Verbes Communs 0 à 10</h1>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default FlashCardHome;