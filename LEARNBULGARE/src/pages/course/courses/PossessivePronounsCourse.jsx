import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../../context/LanguageContext';
import '../../../css/CourseStyle/courses/ConjugaisonCourse.css';

const PossessivePronounsCourse = () => {
    const { language } = useContext(LanguageContext);

    const translations = {
        fr: {
            title: "Les Pronoms Possessifs en Bulgare",
            subtitle: "Apprenez à utiliser les pronoms possessifs en bulgare",
            introduction: "Les pronoms possessifs en bulgare sont utilisés pour indiquer la possession. Ils s'accordent en genre, nombre et cas avec le nom qu'ils modifient.",
            
            singularTitle: "Pronoms Possessifs au Singulier",
            singularText: "Les pronoms possessifs au singulier en bulgare.",
            singularTable: {
                headers: ["Personne", "Masculin", "Féminin", "Neutre"],
                rows: [
                    ["1ère personne", "мой (moy)", "моя (moya)", "моё (moyo)"],
                    ["2ème personne", "твой (tvoy)", "твоя (tvoya)", "твоё (tvoyo)"],
                    ["3ème personne", "негов (negov)", "негова (negova)", "негово (negovo)"]
                ]
            },
            
            pluralTitle: "Pronoms Possessifs au Pluriel",
            pluralText: "Les pronoms possessifs au pluriel en bulgare.",
            pluralTable: {
                headers: ["Personne", "Pluriel"],
                rows: [
                    ["1ère personne", "наш (nash)"],
                    ["2ème personne", "ваш (vash)"],
                    ["3ème personne", "техен (tehen)"]
                ]
            },
            
            usageTitle: "Utilisation des Pronoms Possessifs",
            usageText: "Les pronoms possessifs sont placés avant le nom qu'ils modifient.",
            usageExamples: [
                "моята книга (mon livre)",
                "твоят автомобил (ta voiture)",
                "неговата къща (sa maison)",
                "нашият град (notre ville)",
                "вашият дом (votre maison)"
            ],
            
            exceptionsTitle: "Exceptions et Cas Particuliers",
            exceptionsText: "Certains pronoms possessifs ont des formes spéciales.",
            exceptionsExamples: [
                "свой (svoi) - son propre (réfléchi)",
                "своя (svoya) - sa propre (réfléchi)",
                "своё (svoyo) - son propre (réfléchi)",
                "свои (svoi) - ses propres (réfléchi)"
            ],
            
            practiceButton: "Pratiquer les Pronoms Possessifs",
            
            tipsTitle: "Conseils pour les Pronoms Possessifs",
            tip1: "Accordez toujours le pronom possessif avec le nom qu'il modifie.",
            tip2: "Utilisez 'свой' pour parler de quelque chose qui appartient au sujet de la phrase.",
            tip3: "N'oubliez pas que les pronoms possessifs s'accordent en genre et en nombre.",
            tip4: "Apprenez les formes irrégulières par cœur.",
            tip5: "Pratiquez avec des phrases simples avant d'utiliser des phrases complexes."
        },
        en: {
            title: "Possessive Pronouns in Bulgarian",
            subtitle: "Learn to use possessive pronouns in Bulgarian",
            introduction: "Possessive pronouns in Bulgarian are used to indicate possession. They agree in gender, number, and case with the noun they modify.",
            
            singularTitle: "Singular Possessive Pronouns",
            singularText: "Singular possessive pronouns in Bulgarian.",
            singularTable: {
                headers: ["Person", "Masculine", "Feminine", "Neuter"],
                rows: [
                    ["1st person", "мой (moy)", "моя (moya)", "моё (moyo)"],
                    ["2nd person", "твой (tvoy)", "твоя (tvoya)", "твоё (tvoyo)"],
                    ["3rd person", "негов (negov)", "негова (negova)", "негово (negovo)"]
                ]
            },
            
            pluralTitle: "Plural Possessive Pronouns",
            pluralText: "Plural possessive pronouns in Bulgarian.",
            pluralTable: {
                headers: ["Person", "Plural"],
                rows: [
                    ["1st person", "наш (nash)"],
                    ["2nd person", "ваш (vash)"],
                    ["3rd person", "техен (tehen)"]
                ]
            },
            
            usageTitle: "Using Possessive Pronouns",
            usageText: "Possessive pronouns are placed before the noun they modify.",
            usageExamples: [
                "моята книга (my book)",
                "твоят автомобил (your car)",
                "неговата къща (his house)",
                "нашият град (our city)",
                "вашият дом (your house)"
            ],
            
            exceptionsTitle: "Exceptions and Special Cases",
            exceptionsText: "Some possessive pronouns have special forms.",
            exceptionsExamples: [
                "свой (svoi) - one's own (reflexive)",
                "своя (svoya) - one's own (reflexive)",
                "своё (svoyo) - one's own (reflexive)",
                "свои (svoi) - one's own (reflexive)"
            ],
            
            practiceButton: "Practice Possessive Pronouns",
            
            tipsTitle: "Tips for Possessive Pronouns",
            tip1: "Always agree the possessive pronoun with the noun it modifies.",
            tip2: "Use 'свой' to talk about something that belongs to the subject of the sentence.",
            tip3: "Remember that possessive pronouns agree in gender and number.",
            tip4: "Learn irregular forms by heart.",
            tip5: "Practice with simple sentences before using complex ones."
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

            {/* Pronoms possessifs au singulier */}
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

            {/* Pronoms possessifs au pluriel */}
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
                <Link to="/possessivePronouns_quiz">
                    <button>{t.practiceButton}</button>
                </Link>
            </div>
        </div>
    );
};

export default PossessivePronounsCourse; 