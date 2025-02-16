import "../css/Home.css"
function Home() {
    return (
        <div className="home">
            <div className="title_home">
                <h2>Bienvenue sur Learn Bulgarian !</h2>
            </div>
            <div className="score_alphabet">
                <div className="title_sco">
                    <h1>Quiz Alphabet Phonétique</h1>
                </div>
                <div className="score_bar">
                    <p>meilleur score : 80% </p>
                    <div className="bar">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
