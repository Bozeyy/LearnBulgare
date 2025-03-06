import "../css/HF/Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_section">
                <h2>À propos</h2>
                <p>
                    Ce site a été créé pour apprendre les rudiments de la langue Bulgare.
                </p>
            </div>
            <div className="footer_section">
                <h2>Réseaux Sociaux</h2>
                <ul className="social_links">
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Youtube</a></li>
                </ul>
            </div>
            <div className="footer_section">
                <h2>Contact</h2>
                <p>Créé par Simon Pereaux</p>
                <p>Email: <a href="mailto:simon.pereaux@example.com">spereaux2@gmail.com</a></p>
            </div>
        </footer>
    );
}

export default Footer;
