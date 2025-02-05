import { Link } from 'react-router-dom';
import "../css/header.css";

function Header() {
    return (
        <header className="header">
            <div className="left_part">
                <Link to="/">
                    <h1>Learn Bulgarian</h1>
                </Link>
            </div>
            <div className="right_part">
                <Link to="/courses">
                    <button>Courses</button>
                </Link>
                <Link to="/alphabet">
                    <button>Alphabet</button>
                </Link>
            </div>
        </header>
    );
}

export default Header;
