import { useContext } from "react";
import { Link } from "react-router-dom";
import { BookOpen, House } from "lucide-react";
import { LanguageContext } from "../context/LanguageContext"; // Import du contexte
import "../css/HeaderStyle.css";

function Header() {
  const { language, toggleLanguage } = useContext(LanguageContext);

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
        <div className="btn" onClick={toggleLanguage}>
          {language === "fr" ? <img src="./images/flag/fr.png" alt="" /> : <img src="./images/flag/eng.png" alt="" />}
        </div>
        <Link to="/courses">
          <div className="btn">
            <BookOpen />
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
