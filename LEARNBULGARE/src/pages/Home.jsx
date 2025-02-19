import { Link } from 'react-router-dom';
import "../css/Home.css"

function Home() {
    return (
        <div className="home">
            <div className="title_home">
                <h2>Bienvenue sur Learn Bulgarian !</h2>
            </div>
            
            <div className="line_course">
                <Link to="/flashCardHome">
                    <div className='course'>
                        <div className="icon_course">
                            <img src="./images/flashcard_icon.png" alt="" />
                        </div>
                        <div className="title_course">
                            <h1 id="title_course">Flashcard Course</h1>
                        </div>
                    </div>
                </Link>
                <Link to="/quizHome">
                    <div className='course'>
                        <div className="icon_course">
                            <img src="./images/quiz.webp" alt="" />
                        </div>
                        <div className="title_course">
                            <h1 id="title_course">Quiz Course</h1>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Home;
