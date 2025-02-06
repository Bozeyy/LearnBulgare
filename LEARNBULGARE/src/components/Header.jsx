import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MoveLeft } from 'lucide-react';
import "../css/Header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="left_part">
                <Link to="/">
                    <div className="btn">
                        <MoveLeft />
                    </div>
                </Link>
            </div>

            <div className="mid_part">
                <h1>Learn Bulgarian</h1>
            </div>

            <nav className="right_part">
                <div className="burger_menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <div className="btn">
                        <Menu />
                    </div>
                </div>
                <div className={`elements ${menuOpen ? "open" : ""}`}>
                    <Link to="/courses" className='element' onClick={() => setMenuOpen(false)}>
                        Courses
                    </Link>
                    <Link to="/alphabet" className='element' onClick={() => setMenuOpen(false)}>
                        Alphabet
                    </Link> 
                </div>
            </nav>
        </header>
    );
}

export default Header;
