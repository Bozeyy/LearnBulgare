import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../../context/LanguageContext';
import '../../../css/CourseStyle/courses/ConjugaisonCourse.css';

const ConjugaisonCourse = () => {
    const { language } = useContext(LanguageContext);

    const translations = {
        fr: {
            title: "La Conjugaison en Bulgare",
            subtitle: "Apprenez les bases de la conjugaison des verbes bulgares",
            introduction: "La conjugaison en bulgare est différente de celle du français. Le bulgare utilise des suffixes pour indiquer le temps, l'aspect, la personne et le nombre. Cette page vous aidera à comprendre les principes de base.",
            
            presentSection: "Le Présent",
            presentText: "En bulgare, le présent est formé en ajoutant des suffixes à la racine du verbe. Contrairement au français, il n'y a pas de distinction entre les verbes du premier et du deuxième groupe.",
            
            pastSection: "Le Passé",
            pastText: "Le passé en bulgare peut être exprimé de plusieurs façons : le passé simple (aoriste), le passé composé (perfect) et l'imparfait. Chaque forme a ses propres suffixes.",
            
            futureSection: "Le Futur",
            futureText: "Le futur en bulgare est généralement formé avec la particule 'ще' suivie du verbe au présent.",
            
            aspectSection: "L'Aspect",
            aspectText: "En bulgare, les verbes peuvent être perfectifs ou imperfectifs. Les verbes perfectifs indiquent une action complétée, tandis que les verbes imperfectifs indiquent une action en cours ou répétée.",
            
            examplesTitle: "Exemples de Conjugaison",
            practiceButton: "Pratiquer la Conjugaison",
            
            tipsTitle: "Conseils pour la Conjugaison",
            tip1: "Apprenez d'abord les pronoms personnels (аз, ти, той/тя/то, ние, вие, те).",
            tip2: "Identifiez la racine du verbe en retirant les suffixes.",
            tip3: "Faites attention à l'aspect du verbe (perfectif ou imperfectif).",
            tip4: "Pratiquez régulièrement avec des verbes courants.",
            
            conjugationTable: {
                title: "Conjugaison du verbe 'правя' (faire) au présent",
                headers: ["Pronom", "Bulgarian", "Français"],
                rows: [
                    ["Je", "правя", "je fais"],
                    ["Tu", "правиш", "tu fais"],
                    ["Il/Elle", "прави", "il/elle fait"],
                    ["Nous", "правим", "nous faisons"],
                    ["Vous", "правите", "vous faites"],
                    ["Ils/Elles", "правят", "ils/elles font"]
                ]
            },
            
            firstGroupTitle: "Premier Groupe - Verbes en -ам/-ям",
            firstGroupDescription: "Les verbes du premier groupe se terminent par -ам ou -ям à la première personne du singulier. C'est le groupe le plus nombreux en bulgare.",
            firstGroupExample: "Exemple avec le verbe 'четя' (lire) :",
            firstGroupTable: {
                headers: ["Pronom", "Bulgarian", "Français"],
                rows: [
                    ["Je", "чета", "je lis"],
                    ["Tu", "четеш", "tu lis"],
                    ["Il/Elle", "чете", "il/elle lit"],
                    ["Nous", "четем", "nous lisons"],
                    ["Vous", "четете", "vous lisez"],
                    ["Ils/Elles", "четат", "ils/elles lisent"]
                ]
            },
            firstGroupNotes: [
                "Les verbes de ce groupe suivent un modèle régulier",
                "La voyelle de la racine peut changer selon la personne",
                "Exemples courants : четя (lire), пиша (écrire), живея (vivre)"
            ],
            
            secondGroupTitle: "Deuxième Groupe - Verbes en -а/-я",
            secondGroupDescription: "Les verbes du deuxième groupe se terminent par -а ou -я à la première personne du singulier. Ils sont moins nombreux que ceux du premier groupe.",
            secondGroupExample: "Exemple avec le verbe 'правя' (faire) :",
            secondGroupTable: {
                headers: ["Pronom", "Bulgarian", "Français"],
                rows: [
                    ["Je", "правя", "je fais"],
                    ["Tu", "правиш", "tu fais"],
                    ["Il/Elle", "прави", "il/elle fait"],
                    ["Nous", "правим", "nous faisons"],
                    ["Vous", "правите", "vous faites"],
                    ["Ils/Elles", "правят", "ils/elles font"]
                ]
            },
            secondGroupNotes: [
                "Les verbes de ce groupe ont souvent une consonne avant la terminaison",
                "La conjugaison est plus simple que pour le premier groupe",
                "Exemples courants : правя (faire), кажа (dire), видя (voir)"
            ],
            
            thirdGroupTitle: "Troisième Groupe - Verbes Irréguliers",
            thirdGroupDescription: "Le troisième groupe comprend les verbes irréguliers qui ne suivent pas les modèles des deux premiers groupes. Ils ont souvent des changements de voyelle ou de consonne.",
            thirdGroupExample: "Exemple avec le verbe 'съм' (être) :",
            thirdGroupTable: {
                headers: ["Pronom", "Bulgarian", "Français"],
                rows: [
                    ["Je", "съм", "je suis"],
                    ["Tu", "си", "tu es"],
                    ["Il/Elle", "е", "il/elle est"],
                    ["Nous", "сме", "nous sommes"],
                    ["Vous", "сте", "vous êtes"],
                    ["Ils/Elles", "са", "ils/elles sont"]
                ]
            },
            thirdGroupNotes: [
                "Ces verbes doivent être appris individuellement",
                "Ils sont souvent des verbes très courants",
                "Exemples : съм (être), имам (avoir), ида (aller)"
            ],
            
            exceptionsTitle: "Exceptions et Cas Particuliers",
            exceptionsText: "Certains verbes peuvent avoir des conjugaisons particulières ou des changements de voyelle selon le contexte. Il est important de les apprendre par cœur."
        },
        en: {
            title: "Bulgarian Verb Conjugation",
            subtitle: "Learn the basics of Bulgarian verb conjugation",
            introduction: "Conjugation in Bulgarian is different from French. Bulgarian uses suffixes to indicate tense, aspect, person, and number. This page will help you understand the basic principles.",
            
            presentSection: "The Present Tense",
            presentText: "In Bulgarian, the present tense is formed by adding suffixes to the verb root. Unlike French, there is no distinction between first and second group verbs.",
            
            pastSection: "The Past Tense",
            pastText: "The past in Bulgarian can be expressed in several ways: the simple past (aorist), the compound past (perfect), and the imperfect. Each form has its own suffixes.",
            
            futureSection: "The Future Tense",
            futureText: "The future in Bulgarian is generally formed with the particle 'ще' followed by the verb in the present tense.",
            
            aspectSection: "Aspect",
            aspectText: "In Bulgarian, verbs can be perfective or imperfective. Perfective verbs indicate a completed action, while imperfective verbs indicate an ongoing or repeated action.",
            
            examplesTitle: "Conjugation Examples",
            practiceButton: "Practice Conjugation",
            
            tipsTitle: "Tips for Conjugation",
            tip1: "First learn the personal pronouns (аз, ти, той/тя/то, ние, вие, те).",
            tip2: "Identify the verb root by removing the suffixes.",
            tip3: "Pay attention to the verb aspect (perfective or imperfective).",
            tip4: "Practice regularly with common verbs.",
            
            conjugationTable: {
                title: "Conjugation of the verb 'правя' (to do) in the present tense",
                headers: ["Pronoun", "Bulgarian", "English"],
                rows: [
                    ["I", "правя", "I do"],
                    ["You", "правиш", "you do"],
                    ["He/She", "прави", "he/she does"],
                    ["We", "правим", "we do"],
                    ["You (plural)", "правите", "you do"],
                    ["They", "правят", "they do"]
                ]
            },
            
            firstGroupTitle: "First Group - Verbs in -ам/-ям",
            firstGroupDescription: "First group verbs end in -ам or -ям in the first person singular. This is the largest group in Bulgarian.",
            firstGroupExample: "Example with the verb 'четя' (to read):",
            firstGroupTable: {
                headers: ["Pronoun", "Bulgarian", "English"],
                rows: [
                    ["I", "чета", "I read"],
                    ["You", "четеш", "you read"],
                    ["He/She", "чете", "he/she reads"],
                    ["We", "четем", "we read"],
                    ["You (plural)", "четете", "you read"],
                    ["They", "четат", "they read"]
                ]
            },
            firstGroupNotes: [
                "Verbs in this group follow a regular pattern",
                "The root vowel may change according to the person",
                "Common examples: четя (to read), пиша (to write), живея (to live)"
            ],
            
            secondGroupTitle: "Second Group - Verbs in -а/-я",
            secondGroupDescription: "Second group verbs end in -а or -я in the first person singular. They are less numerous than first group verbs.",
            secondGroupExample: "Example with the verb 'правя' (to do):",
            secondGroupTable: {
                headers: ["Pronoun", "Bulgarian", "English"],
                rows: [
                    ["I", "правя", "I do"],
                    ["You", "правиш", "you do"],
                    ["He/She", "прави", "he/she does"],
                    ["We", "правим", "we do"],
                    ["You (plural)", "правите", "you do"],
                    ["They", "правят", "they do"]
                ]
            },
            secondGroupNotes: [
                "Verbs in this group often have a consonant before the ending",
                "Conjugation is simpler than for the first group",
                "Common examples: правя (to do), кажа (to say), видя (to see)"
            ],
            
            thirdGroupTitle: "Third Group - Irregular Verbs",
            thirdGroupDescription: "The third group includes irregular verbs that don't follow the patterns of the first two groups. They often have vowel or consonant changes.",
            thirdGroupExample: "Example with the verb 'съм' (to be):",
            thirdGroupTable: {
                headers: ["Pronoun", "Bulgarian", "English"],
                rows: [
                    ["I", "съм", "I am"],
                    ["You", "си", "you are"],
                    ["He/She", "е", "he/she is"],
                    ["We", "сме", "we are"],
                    ["You (plural)", "сте", "you are"],
                    ["They", "са", "they are"]
                ]
            },
            thirdGroupNotes: [
                "These verbs must be learned individually",
                "They are often very common verbs",
                "Examples: съм (to be), имам (to have), ида (to go)"
            ],
            
            exceptionsTitle: "Exceptions and Special Cases",
            exceptionsText: "Some verbs may have particular conjugations or vowel changes depending on the context. It's important to learn them by heart."
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

            <div className="conjugation-section">
                <h2>{t.presentSection}</h2>
                <p>{t.presentText}</p>
            </div>

            <div className="conjugation-section">
                <h2>{t.pastSection}</h2>
                <p>{t.pastText}</p>
            </div>

            <div className="conjugation-section">
                <h2>{t.futureSection}</h2>
                <p>{t.futureText}</p>
            </div>

            <div className="conjugation-section">
                <h2>{t.aspectSection}</h2>
                <p>{t.aspectText}</p>
            </div>

            <div className="conjugation-group-explanation">
                <h2>{t.firstGroupTitle}</h2>
                <p>{t.firstGroupDescription}</p>
                
                <div className="conjugation-group-examples">
                    <div className="conjugation-group-card">
                        <h3>{t.firstGroupExample}</h3>
                        <table className="conjugation-group-table">
                            <thead>
                                <tr>
                                    {t.firstGroupTable.headers.map((header, index) => (
                                        <th key={index}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {t.firstGroupTable.rows.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((cell, cellIndex) => (
                                            <td key={cellIndex}>{cell}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        
                        <div className="conjugation-group-notes">
                            <h4>Notes importantes :</h4>
                            <ul>
                                {t.firstGroupNotes.map((note, index) => (
                                    <li key={index}>{note}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="conjugation-group-explanation">
                <h2>{t.secondGroupTitle}</h2>
                <p>{t.secondGroupDescription}</p>
                
                <div className="conjugation-group-examples">
                    <div className="conjugation-group-card">
                        <h3>{t.secondGroupExample}</h3>
                        <table className="conjugation-group-table">
                            <thead>
                                <tr>
                                    {t.secondGroupTable.headers.map((header, index) => (
                                        <th key={index}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {t.secondGroupTable.rows.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((cell, cellIndex) => (
                                            <td key={cellIndex}>{cell}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        
                        <div className="conjugation-group-notes">
                            <h4>Notes importantes :</h4>
                            <ul>
                                {t.secondGroupNotes.map((note, index) => (
                                    <li key={index}>{note}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="conjugation-group-explanation">
                <h2>{t.thirdGroupTitle}</h2>
                <p>{t.thirdGroupDescription}</p>
                
                <div className="conjugation-group-examples">
                    <div className="conjugation-group-card">
                        <h3>{t.thirdGroupExample}</h3>
                        <table className="conjugation-group-table">
                            <thead>
                                <tr>
                                    {t.thirdGroupTable.headers.map((header, index) => (
                                        <th key={index}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {t.thirdGroupTable.rows.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((cell, cellIndex) => (
                                            <td key={cellIndex}>{cell}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        
                        <div className="conjugation-group-notes">
                            <h4>Notes importantes :</h4>
                            <ul>
                                {t.thirdGroupNotes.map((note, index) => (
                                    <li key={index}>{note}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="conjugation-group-exceptions">
                <h3>{t.exceptionsTitle}</h3>
                <p>{t.exceptionsText}</p>
            </div>

            <div className="conjugation-section">
                <h2>{t.examplesTitle}</h2>
                <table className="conjugation-table">
                    <thead>
                        <tr>
                            {t.conjugationTable.headers.map((header, index) => (
                                <th key={index}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {t.conjugationTable.rows.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex}>{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="conjugation-example">
                    <p><span className="bulgarian">Аз правя домашното.</span> <span className="translation">(Je fais mes devoirs.)</span></p>
                    <p><span className="bulgarian">Ти четеш книга.</span> <span className="translation">(Tu lis un livre.)</span></p>
                    <p><span className="bulgarian">Той пише писмо.</span> <span className="translation">(Il écrit une lettre.)</span></p>
                </div>
            </div>

            <div className="conjugation-tips">
                <h3>{t.tipsTitle}</h3>
                <ul>
                    <li>{t.tip1}</li>
                    <li>{t.tip2}</li>
                    <li>{t.tip3}</li>
                    <li>{t.tip4}</li>
                </ul>
            </div>

            <div className="conjugation-practice">
                <Link to="/verbesc_0_10">
                    <button>{t.practiceButton}</button>
                </Link>
            </div>
        </div>
    );
};

export default ConjugaisonCourse; 