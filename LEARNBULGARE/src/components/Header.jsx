import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, House } from 'lucide-react';
import "../css/HeaderStyle.css";

function Header() {
    return (
        <header className="header">
            <div className="left_part">
                <Link to="/">
                    <div className="btn">
                        <House />
                    </div>
                </Link>
            </div>

            <nav className="right_part">
                <div className="burger_menu">
                    <Link to="/courses">
                        <div className="btn">
                            <BookOpen />
                        </div>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
