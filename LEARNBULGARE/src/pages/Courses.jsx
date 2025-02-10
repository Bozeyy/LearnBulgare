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
                <Link to="/alphabet">
                    <div className='course'>
                        <div className="icon_course">
                            <img src="./images/alphabet.png" alt="" />
                        </div>
                        <div className="title_course">
                            <h1>Course title</h1>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Courses;