import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="left_part">
                <Link to="/">
                    <h1>Learn Bulgarian</h1>
                </Link>
            </div>

            <div className="burger_menu" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>

            <nav className={`right_part ${menuOpen ? "open" : ""}`}>
                <Link to="/courses" onClick={() => setMenuOpen(false)}>
                    Courses
                </Link>
                <hr />
                <Link to="/alphabet" onClick={() => setMenuOpen(false)}>
                    Alphabet
                </Link>
            </nav>
        </header>
    );
}

export default Header;
