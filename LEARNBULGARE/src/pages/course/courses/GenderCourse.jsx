import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../../context/LanguageContext';
import '../../../css/CourseStyle/courses/ConjugaisonCourse.css';

const GenderCourse = () => {
    const { language } = useContext(LanguageContext);

    const translations = {
        fr: {
            title: "Le Masculin et le Féminin en Bulgare",
            subtitle: "Apprenez à utiliser le masculin et le féminin en bulgare",
            introduction: "En bulgare, les noms et les adjectifs ont un genre grammatical. Ils peuvent être masculins, féminins ou neutres. Le genre affecte la forme des adjectifs et des verbes qui les accompagnent.",
            
            masculineTitle: "Le Masculin",
            masculineText: "Les noms masculins en bulgare se terminent généralement par une consonne.",
            masculineExamples: [
                "дом (dom) - maison",
                "стол (stol) - table",
                "книга (kniga) - livre",
                "човек (chovek) - homme",
                "град (grad) - ville"
            ],
            
            feminineTitle: "Le Féminin",
            feminineText: "Les noms féminins en bulgare se terminent généralement par -а ou -я.",
            feminineExamples: [
                "книга (kniga) - livre",
                "вода (voda) - eau",
                "земя (zemya) - terre",
                "жена (zhena) - femme",
                "душа (dusha) - âme"
            ],
            
            neuterTitle: "Le Neutre",
            neuterText: "Les noms neutres en bulgare se terminent généralement par -о или -е.",
            neuterExamples: [
                "дете (dete) - enfant",
                "океан (okean) - océan",
                "море (more) - mer",
                "слънце (sluntse) - soleil",
                "небе (nebe) - ciel"
            ],
            
            agreementTitle: "Accord en Genre",
            agreementText: "Les adjectifs et les verbes doivent s'accorder en genre avec le nom qu'ils modifient.",
            agreementExamples: [
                "красив дом (une belle maison) - masculin",
                "красива книга (un beau livre) - féminin",
                "красиво дете (un bel enfant) - neutre",
                "добър човек (un bon homme) - masculin",
                "добра жена (une bonne femme) - féminin"
            ],
            
            exceptionsTitle: "Exceptions et Cas Particuliers",
            exceptionsText: "Certains noms ont un genre qui ne correspond pas à leur terminaison.",
            exceptionsExamples: [
                "баща (bashta) - père (féminin)",
                "дядо (dyado) - grand-père (neutre)",
                "чичо (chicho) - oncle (neutre)",
                "мъж (mazh) - mari (masculin)",
                "жена (zhena) - épouse (féminin)"
            ],
            
            practiceButton: "Pratiquer le Masculin et le Féminin",
            
            tipsTitle: "Conseils pour le Masculin et le Féminin",
            tip1: "Apprenez le genre des noms par cœur.",
            tip2: "Faites attention aux exceptions.",
            tip3: "N'oubliez pas d'accorder les adjectifs et les verbes avec le nom.",
            tip4: "Pratiquez avec des phrases simples avant d'utiliser des phrases complexes.",
            tip5: "Utilisez des dictionnaires pour vérifier le genre des noms."
        },
        en: {
            title: "Masculine and Feminine in Bulgarian",
            subtitle: "Learn to use masculine and feminine in Bulgarian",
            introduction: "In Bulgarian, nouns and adjectives have a grammatical gender. They can be masculine, feminine, or neuter. Gender affects the form of adjectives and verbs that accompany them.",
            
            masculineTitle: "Masculine",
            masculineText: "Masculine nouns in Bulgarian usually end in a consonant.",
            masculineExamples: [
                "дом (dom) - house",
                "стол (stol) - table",
                "книга (kniga) - book",
                "човек (chovek) - man",
                "град (grad) - city"
            ],
            
            feminineTitle: "Feminine",
            feminineText: "Feminine nouns in Bulgarian usually end in -а or -я.",
            feminineExamples: [
                "книга (kniga) - book",
                "вода (voda) - water",
                "земя (zemya) - earth",
                "жена (zhena) - woman",
                "душа (dusha) - soul"
            ],
            
            neuterTitle: "Neuter",
            neuterText: "Neuter nouns in Bulgarian usually end in -о or -е.",
            neuterExamples: [
                "дете (dete) - child",
                "океан (okean) - ocean",
                "море (more) - sea",
                "слънце (sluntse) - sun",
                "небе (nebe) - sky"
            ],
            
            agreementTitle: "Gender Agreement",
            agreementText: "Adjectives and verbs must agree in gender with the noun they modify.",
            agreementExamples: [
                "красив дом (a beautiful house) - masculine",
                "красива книга (a beautiful book) - feminine",
                "красиво дете (a beautiful child) - neuter",
                "добър човек (a good man) - masculine",
                "добра жена (a good woman) - feminine"
            ],
            
            exceptionsTitle: "Exceptions and Special Cases",
            exceptionsText: "Some nouns have a gender that does not match their ending.",
            exceptionsExamples: [
                "баща (bashta) - father (feminine)",
                "дядо (dyado) - grandfather (neuter)",
                "чичо (chicho) - uncle (neuter)",
                "мъж (mazh) - husband (masculine)",
                "жена (zhena) - wife (feminine)"
            ],
            
            practiceButton: "Practice Masculine and Feminine",
            
            tipsTitle: "Tips for Masculine and Feminine",
            tip1: "Learn the gender of nouns by heart.",
            tip2: "Pay attention to exceptions.",
            tip3: "Remember to agree adjectives and verbs with the noun.",
            tip4: "Practice with simple sentences before using complex ones.",
            tip5: "Use dictionaries to check the gender of nouns."
        }
    };

    const t = translations[language];

    return (
        <div className="conjugation-container">
            <div className="conjugation-header">
                <h1>{t.title}</h1>
                <p>{t.subtitle}</p>
            </div>

            <div className="conjugation-section">
                <p>{t.introduction}</p>
            </div>

            {/* Le Masculin */}
            <div className="conjugation-group-explanation">
                <h2>{t.masculineTitle}</h2>
                <p>{t.masculineText}</p>
                
                <div className="conjugation-group-examples">
                    <div className="conjugation-group-card">
                        <div className="conjugation-group-notes">
                            <ul>
                                {t.masculineExamples.map((example, index) => (
                                    <li key={index}>{example}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Le Féminin */}
            <div className="conjugation-group-explanation">
                <h2>{t.feminineTitle}</h2>
                <p>{t.feminineText}</p>
                
                <div className="conjugation-group-examples">
                    <div className="conjugation-group-card">
                        <div className="conjugation-group-notes">
                            <ul>
                                {t.feminineExamples.map((example, index) => (
                                    <li key={index}>{example}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Le Neutre */}
            <div className="conjugation-group-explanation">
                <h2>{t.neuterTitle}</h2>
                <p>{t.neuterText}</p>
                
                <div className="conjugation-group-examples">
                    <div className="conjugation-group-card">
                        <div className="conjugation-group-notes">
                            <ul>
                                {t.neuterExamples.map((example, index) => (
                                    <li key={index}>{example}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Accord en Genre */}
            <div className="conjugation-group-explanation">
                <h2>{t.agreementTitle}</h2>
                <p>{t.agreementText}</p>
                
                <div className="conjugation-group-examples">
                    <div className="conjugation-group-card">
                        <div className="conjugation-group-notes">
                            <ul>
                                {t.agreementExamples.map((example, index) => (
                                    <li key={index}>{example}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Exceptions */}
            <div className="conjugation-group-explanation">
                <h2>{t.exceptionsTitle}</h2>
                <p>{t.exceptionsText}</p>
                
                <div className="conjugation-group-examples">
                    <div className="conjugation-group-card">
                        <div className="conjugation-group-notes">
                            <ul>
                                {t.exceptionsExamples.map((example, index) => (
                                    <li key={index}>{example}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="conjugation-tips">
                <h3>{t.tipsTitle}</h3>
                <ul>
                    <li>{t.tip1}</li>
                    <li>{t.tip2}</li>
                    <li>{t.tip3}</li>
                    <li>{t.tip4}</li>
                    <li>{t.tip5}</li>
                </ul>
            </div>

            <div className="conjugation-practice">
                <Link to="/gender_quiz">
                    <button>{t.practiceButton}</button>
                </Link>
            </div>
        </div>
    );
};

export default GenderCourse; 