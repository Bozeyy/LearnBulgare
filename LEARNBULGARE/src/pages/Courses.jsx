import "../css/Courses.css"
import { Link } from 'react-router-dom';

function Courses() {
    return (
        <div style={{
            padding: "20px",
        }}>
            <div className="title">
                <h2>Courses</h2>
            </div>
            <div className="content">
           
                <Link to="/wordPhonetic">
                    <div className="course">
                        words phonetic
                    </div>
                </Link>
                <div className="course">
                    words phonetic
                </div>
                <div className="course">
                    words phonetic
                </div>
                <div className="course">
                    words phonetic
                </div>
                <div className="course">
                    words phonetic
                </div>
            </div>
        </div>
    );
}

export default Courses;