import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../../context/LanguageContext';
import '../../../css/CourseStyle/courses/ConjugaisonCourse.css';

const QualificativeAdjectivesCourse = () => {
    const { language } = useContext(LanguageContext);

    const translations = {
        fr: {
            title: "Les Adjectifs Qualificatifs en Bulgare",
            subtitle: "Apprenez à utiliser les adjectifs qualificatifs en bulgare",
            introduction: "Les adjectifs qualificatifs en bulgare sont utilisés pour décrire les noms. Ils s'accordent en genre, nombre et cas avec le nom qu'ils modifient.",
            
            singularTitle: "Adjectifs Qualificatifs au Singulier",
            singularText: "Les adjectifs qualificatifs au singulier en bulgare.",
            singularTable: {
                headers: ["Genre", "Masculin", "Féminin", "Neutre"],
                rows: [
                    ["Exemple", "красив (krasiv)", "красива (krasiva)", "красиво (krasivo)"],
                    ["Exemple", "добър (dobur)", "добра (dobra)", "добро (dobro)"],
                    ["Exemple", "голям (golyam)", "голяма (golyama)", "голямо (golyamo)"]
                ]
            },
            
            pluralTitle: "Adjectifs Qualificatifs au Pluriel",
            pluralText: "Les adjectifs qualificatifs au pluriel en bulgare.",
            pluralTable: {
                headers: ["Genre", "Pluriel"],
                rows: [
                    ["Exemple", "красиви (krasivi)"],
                    ["Exemple", "добри (dobri)"],
                    ["Exemple", "големи (golemi)"]
                ]
            },
            
            usageTitle: "Utilisation des Adjectifs Qualificatifs",
            usageText: "Les adjectifs qualificatifs sont placés avant ou après le nom qu'ils modifient.",
            usageExamples: [
                "красив дом (une belle maison)",
                "добра книга (un bon livre)",
                "голям град (une grande ville)",
                "къща красива (une maison belle)",
                "книга добра (un livre bon)"
            ],
            
            exceptionsTitle: "Exceptions et Cas Particuliers",
            exceptionsText: "Certains adjectifs qualificatifs ont des formes spéciales.",
            exceptionsExamples: [
                "добър (dobur) - bon (masculin)",
                "добра (dobra) - bonne (féminin)",
                "добро (dobro) - bon (neutre)",
                "добри (dobri) - bons (pluriel)"
            ],
            
            practiceButton: "Pratiquer les Adjectifs Qualificatifs",
            
            tipsTitle: "Conseils pour les Adjectifs Qualificatifs",
            tip1: "Accordez toujours l'adjectif qualificatif avec le nom qu'il modifie.",
            tip2: "Apprenez les formes irrégulières par cœur.",
            tip3: "N'oubliez pas que les adjectifs qualificatifs s'accordent en genre et en nombre.",
            tip4: "Pratiquez avec des phrases simples avant d'utiliser des phrases complexes.",
            tip5: "Utilisez des adjectifs qualificatifs pour enrichir votre vocabulaire."
        },
        en: {
            title: "Qualificative Adjectives in Bulgarian",
            subtitle: "Learn to use qualificative adjectives in Bulgarian",
            introduction: "Qualificative adjectives in Bulgarian are used to describe nouns. They agree in gender, number, and case with the noun they modify.",
            
            singularTitle: "Singular Qualificative Adjectives",
            singularText: "Singular qualificative adjectives in Bulgarian.",
            singularTable: {
                headers: ["Gender", "Masculine", "Feminine", "Neuter"],
                rows: [
                    ["Example", "красив (krasiv)", "красива (krasiva)", "красиво (krasivo)"],
                    ["Example", "добър (dobur)", "добра (dobra)", "добро (dobro)"],
                    ["Example", "голям (golyam)", "голяма (golyama)", "голямо (golyamo)"]
                ]
            },
            
            pluralTitle: "Plural Qualificative Adjectives",
            pluralText: "Plural qualificative adjectives in Bulgarian.",
            pluralTable: {
                headers: ["Gender", "Plural"],
                rows: [
                    ["Example", "красиви (krasivi)"],
                    ["Example", "добри (dobri)"],
                    ["Example", "големи (golemi)"]
                ]
            },
            
            usageTitle: "Using Qualificative Adjectives",
            usageText: "Qualificative adjectives are placed before or after the noun they modify.",
            usageExamples: [
                "красив дом (a beautiful house)",
                "добра книга (a good book)",
                "голям град (a big city)",
                "къща красива (a beautiful house)",
                "книга добра (a good book)"
            ],
            
            exceptionsTitle: "Exceptions and Special Cases",
            exceptionsText: "Some qualificative adjectives have special forms.",
            exceptionsExamples: [
                "добър (dobur) - good (masculine)",
                "добра (dobra) - good (feminine)",
                "добро (dobro) - good (neuter)",
                "добри (dobri) - good (plural)"
            ],
            
            practiceButton: "Practice Qualificative Adjectives",
            
            tipsTitle: "Tips for Qualificative Adjectives",
            tip1: "Always agree the qualificative adjective with the noun it modifies.",
            tip2: "Learn irregular forms by heart.",
            tip3: "Remember that qualificative adjectives agree in gender and number.",
            tip4: "Practice with simple sentences before using complex ones.",
            tip5: "Use qualificative adjectives to enrich your vocabulary."
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

            {/* Adjectifs qualificatifs au singulier */}
            <div className="conjugation-group-explanation">
                <h2>{t.singularTitle}</h2>
                <p>{t.singularText}</p>
                
                <div className="conjugation-group-examples">
                    <div className="conjugation-group-card">
                        <table className="conjugation-group-table">
                            <thead>
                                <tr>
                                    {t.singularTable.headers.map((header, index) => (
                                        <th key={index}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {t.singularTable.rows.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((cell, cellIndex) => (
                                            <td key={cellIndex}>{cell}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Adjectifs qualificatifs au pluriel */}
            <div className="conjugation-group-explanation">
                <h2>{t.pluralTitle}</h2>
                <p>{t.pluralText}</p>
                
                <div className="conjugation-group-examples">
                    <div className="conjugation-group-card">
                        <table className="conjugation-group-table">
                            <thead>
                                <tr>
                                    {t.pluralTable.headers.map((header, index) => (
                                        <th key={index}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {t.pluralTable.rows.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((cell, cellIndex) => (
                                            <td key={cellIndex}>{cell}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Utilisation */}
            <div className="conjugation-group-explanation">
                <h2>{t.usageTitle}</h2>
                <p>{t.usageText}</p>
                
                <div className="conjugation-group-examples">
                    <div className="conjugation-group-card">
                        <div className="conjugation-group-notes">
                            <ul>
                                {t.usageExamples.map((example, index) => (
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
                <Link to="/qualificativeAdjectives_quiz">
                    <button>{t.practiceButton}</button>
                </Link>
            </div>
        </div>
    );
};

export default QualificativeAdjectivesCourse; 