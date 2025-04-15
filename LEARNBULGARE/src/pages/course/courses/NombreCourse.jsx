import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../../context/LanguageContext';
import '../../../css/CourseStyle/courses/ConjugaisonCourse.css';

const NombreCourse = () => {
    const { language } = useContext(LanguageContext);

    const translations = {
        fr: {
            title: "Les Nombres en Bulgare",
            subtitle: "Apprenez à compter et à utiliser les nombres en bulgare",
            introduction: "Les nombres en bulgare suivent des règles spécifiques. Cette page vous aidera à comprendre comment compter et utiliser les nombres en bulgare.",
            
            basicNumbersTitle: "Nombres de Base",
            basicNumbersText: "Les nombres de 1 à 10 sont les fondements du système numérique bulgare. Apprenez-les par cœur pour pouvoir compter et former des nombres plus grands.",
            basicNumbersTable: {
                headers: ["Chiffre", "Bulgarian", "Français"],
                rows: [
                    ["1", "един", "un"],
                    ["2", "два", "deux"],
                    ["3", "три", "trois"],
                    ["4", "четири", "quatre"],
                    ["5", "пет", "cinq"],
                    ["6", "шест", "six"],
                    ["7", "седем", "sept"],
                    ["8", "осем", "huit"],
                    ["9", "девет", "neuf"],
                    ["10", "десет", "dix"]
                ]
            },
            
            teensTitle: "Nombres de 11 à 19",
            teensText: "Les nombres de 11 à 19 sont formés en combinant le chiffre des unités avec le mot 'десет' (dix).",
            teensTable: {
                headers: ["Chiffre", "Bulgarian", "Français"],
                rows: [
                    ["11", "единадесет", "onze"],
                    ["12", "дванадесет", "douze"],
                    ["13", "тринадесет", "treize"],
                    ["14", "четиринадесет", "quatorze"],
                    ["15", "петнадесет", "quinze"],
                    ["16", "шестнадесет", "seize"],
                    ["17", "седемнадесет", "dix-sept"],
                    ["18", "осемнадесет", "dix-huit"],
                    ["19", "деветнадесет", "dix-neuf"]
                ]
            },
            
            tensTitle: "Dizaines",
            tensText: "Les dizaines sont formées en ajoutant 'десет' (dix) après le chiffre correspondant.",
            tensTable: {
                headers: ["Chiffre", "Bulgarian", "Français"],
                rows: [
                    ["20", "двадесет", "vingt"],
                    ["30", "тридесет", "trente"],
                    ["40", "четиридесет", "quarante"],
                    ["50", "петдесет", "cinquante"],
                    ["60", "шестдесет", "soixante"],
                    ["70", "седемдесет", "soixante-dix"],
                    ["80", "осемдесет", "quatre-vingts"],
                    ["90", "деветдесет", "quatre-vingt-dix"]
                ]
            },
            
            hundredsTitle: "Centaines",
            hundredsText: "Les centaines sont formées en utilisant le mot 'сто' (cent) précédé du chiffre correspondant.",
            hundredsTable: {
                headers: ["Chiffre", "Bulgarian", "Français"],
                rows: [
                    ["100", "сто", "cent"],
                    ["200", "двеста", "deux cents"],
                    ["300", "триста", "trois cents"],
                    ["400", "четиристотин", "quatre cents"],
                    ["500", "петстотин", "cinq cents"],
                    ["600", "шестстотин", "six cents"],
                    ["700", "седемстотин", "sept cents"],
                    ["800", "осемстотин", "huit cents"],
                    ["900", "деветстотин", "neuf cents"]
                ]
            },
            
            thousandsTitle: "Milliers",
            thousandsText: "Les milliers sont formés en utilisant le mot 'хиляда' (mille) précédé du chiffre correspondant.",
            thousandsTable: {
                headers: ["Chiffre", "Bulgarian", "Français"],
                rows: [
                    ["1000", "хиляда", "mille"],
                    ["2000", "две хиляди", "deux mille"],
                    ["3000", "три хиляди", "trois mille"],
                    ["10000", "десет хиляди", "dix mille"],
                    ["100000", "сто хиляди", "cent mille"],
                    ["1000000", "един милион", "un million"]
                ]
            },
            
            compoundNumbersTitle: "Nombres Composés",
            compoundNumbersText: "Les nombres composés sont formés en combinant les différentes parties (milliers, centaines, dizaines, unités).",
            compoundNumbersExamples: [
                "25 = двадесет и пет (vingt-cinq)",
                "42 = четиридесет и две (quarante-deux)",
                "127 = сто двадесет и седем (cent vingt-sept)",
                "356 = триста петдесет и шест (trois cent cinquante-six)",
                "1999 = хиляда деветстотин деветдесет и девет (mille neuf cent quatre-vingt-dix-neuf)"
            ],
            
            ordinalNumbersTitle: "Nombres Ordinaux",
            ordinalNumbersText: "Les nombres ordinaux en bulgare sont formés en ajoutant des suffixes aux nombres cardinaux.",
            ordinalNumbersTable: {
                headers: ["Chiffre", "Bulgarian", "Français"],
                rows: [
                    ["1er", "първи", "premier"],
                    ["2e", "втори", "deuxième"],
                    ["3e", "трети", "troisième"],
                    ["4e", "четвърти", "quatrième"],
                    ["5e", "пети", "cinquième"],
                    ["10e", "десети", "dixième"],
                    ["20e", "двадесети", "vingtième"],
                    ["100e", "стотен", "centième"]
                ]
            },
            
            usageTitle: "Utilisation des Nombres",
            usageText: "Les nombres en bulgare sont utilisés de différentes manières selon le contexte.",
            usageExamples: [
                "Pour compter : едно, две, три... (un, deux, trois...)",
                "Pour l'heure : два часа (deux heures), trois heures et quart",
                "Pour les dates : първи май (premier mai), двадесет и трети декември (vingt-trois décembre)",
                "Pour les âges : на пет години (cinq ans), на двадесет години (vingt ans)",
                "Pour les prix : пет лева (cinq leva), двадесет и пет стотинки (vingt-cinq centimes)"
            ],
            
            practiceButton: "Pratiquer les Nombres",
            
            tipsTitle: "Conseils pour Apprendre les Nombres",
            tip1: "Apprenez d'abord les nombres de 1 à 10 par cœur.",
            tip2: "Comprenez la logique de formation des nombres de 11 à 19.",
            tip3: "Apprenez les dizaines et les centaines pour pouvoir former des nombres plus grands.",
            tip4: "Pratiquez en comptant à voix haute et en écrivant des nombres.",
            tip5: "Utilisez les nombres dans des phrases simples pour mémoriser leur utilisation."
        },
        en: {
            title: "Numbers in Bulgarian",
            subtitle: "Learn to count and use numbers in Bulgarian",
            introduction: "Numbers in Bulgarian follow specific rules. This page will help you understand how to count and use numbers in Bulgarian.",
            
            basicNumbersTitle: "Basic Numbers",
            basicNumbersText: "Numbers from 1 to 10 are the foundation of the Bulgarian number system. Learn them by heart to be able to count and form larger numbers.",
            basicNumbersTable: {
                headers: ["Digit", "Bulgarian", "English"],
                rows: [
                    ["1", "един", "one"],
                    ["2", "два", "two"],
                    ["3", "три", "three"],
                    ["4", "четири", "four"],
                    ["5", "пет", "five"],
                    ["6", "шест", "six"],
                    ["7", "седем", "seven"],
                    ["8", "осем", "eight"],
                    ["9", "девет", "nine"],
                    ["10", "десет", "ten"]
                ]
            },
            
            teensTitle: "Numbers from 11 to 19",
            teensText: "Numbers from 11 to 19 are formed by combining the unit digit with the word 'десет' (ten).",
            teensTable: {
                headers: ["Digit", "Bulgarian", "English"],
                rows: [
                    ["11", "единадесет", "eleven"],
                    ["12", "дванадесет", "twelve"],
                    ["13", "тринадесет", "thirteen"],
                    ["14", "четиринадесет", "fourteen"],
                    ["15", "петнадесет", "fifteen"],
                    ["16", "шестнадесет", "sixteen"],
                    ["17", "седемнадесет", "seventeen"],
                    ["18", "осемнадесет", "eighteen"],
                    ["19", "деветнадесет", "nineteen"]
                ]
            },
            
            tensTitle: "Tens",
            tensText: "Tens are formed by adding 'десет' (ten) after the corresponding digit.",
            tensTable: {
                headers: ["Digit", "Bulgarian", "English"],
                rows: [
                    ["20", "двадесет", "twenty"],
                    ["30", "тридесет", "thirty"],
                    ["40", "четиридесет", "forty"],
                    ["50", "петдесет", "fifty"],
                    ["60", "шестдесет", "sixty"],
                    ["70", "седемдесет", "seventy"],
                    ["80", "осемдесет", "eighty"],
                    ["90", "деветдесет", "ninety"]
                ]
            },
            
            hundredsTitle: "Hundreds",
            hundredsText: "Hundreds are formed by using the word 'сто' (hundred) preceded by the corresponding digit.",
            hundredsTable: {
                headers: ["Digit", "Bulgarian", "English"],
                rows: [
                    ["100", "сто", "hundred"],
                    ["200", "двеста", "two hundred"],
                    ["300", "триста", "three hundred"],
                    ["400", "четиристотин", "four hundred"],
                    ["500", "петстотин", "five hundred"],
                    ["600", "шестстотин", "six hundred"],
                    ["700", "седемстотин", "seven hundred"],
                    ["800", "осемстотин", "eight hundred"],
                    ["900", "деветстотин", "nine hundred"]
                ]
            },
            
            thousandsTitle: "Thousands",
            thousandsText: "Thousands are formed by using the word 'хиляда' (thousand) preceded by the corresponding digit.",
            thousandsTable: {
                headers: ["Digit", "Bulgarian", "English"],
                rows: [
                    ["1000", "хиляда", "thousand"],
                    ["2000", "две хиляди", "two thousand"],
                    ["3000", "три хиляди", "three thousand"],
                    ["10000", "десет хиляди", "ten thousand"],
                    ["100000", "сто хиляди", "hundred thousand"],
                    ["1000000", "един милион", "one million"]
                ]
            },
            
            compoundNumbersTitle: "Compound Numbers",
            compoundNumbersText: "Compound numbers are formed by combining different parts (thousands, hundreds, tens, units).",
            compoundNumbersExamples: [
                "25 = двадесет и пет (twenty-five)",
                "42 = четиридесет и две (forty-two)",
                "127 = сто двадесет и седем (one hundred twenty-seven)",
                "356 = триста петдесет и шест (three hundred fifty-six)",
                "1999 = хиляда деветстотин деветдесет и девет (one thousand nine hundred ninety-nine)"
            ],
            
            ordinalNumbersTitle: "Ordinal Numbers",
            ordinalNumbersText: "Ordinal numbers in Bulgarian are formed by adding suffixes to cardinal numbers.",
            ordinalNumbersTable: {
                headers: ["Digit", "Bulgarian", "English"],
                rows: [
                    ["1st", "първи", "first"],
                    ["2nd", "втори", "second"],
                    ["3rd", "трети", "third"],
                    ["4th", "четвърти", "fourth"],
                    ["5th", "пети", "fifth"],
                    ["10th", "десети", "tenth"],
                    ["20th", "двадесети", "twentieth"],
                    ["100th", "стотен", "hundredth"]
                ]
            },
            
            usageTitle: "Using Numbers",
            usageText: "Numbers in Bulgarian are used in different ways depending on the context.",
            usageExamples: [
                "For counting: едно, две, три... (one, two, three...)",
                "For time: два часа (two o'clock), три часа и петнадесет минути (three fifteen)",
                "For dates: първи май (May first), двадесет и трети декември (December twenty-third)",
                "For ages: на пет години (five years old), на двадесет години (twenty years old)",
                "For prices: пет лева (five leva), двадесет и пет стотинки (twenty-five cents)"
            ],
            
            practiceButton: "Practice Numbers",
            
            tipsTitle: "Tips for Learning Numbers",
            tip1: "First learn numbers from 1 to 10 by heart.",
            tip2: "Understand the logic of forming numbers from 11 to 19.",
            tip3: "Learn tens and hundreds to be able to form larger numbers.",
            tip4: "Practice by counting aloud and writing numbers.",
            tip5: "Use numbers in simple sentences to memorize their usage."
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

            {/* Nombres de base */}
            <div className="conjugation-group-explanation">
                <h2>{t.basicNumbersTitle}</h2>
                <p>{t.basicNumbersText}</p>
                
                <div className="conjugation-group-examples">
                    <div className="conjugation-group-card">
                        <table className="conjugation-group-table">
                            <thead>
                                <tr>
                                    {t.basicNumbersTable.headers.map((header, index) => (
                                        <th key={index}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {t.basicNumbersTable.rows.map((row, rowIndex) => (
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

            {/* Nombres de 11 à 19 */}
            <div className="conjugation-group-explanation">
                <h2>{t.teensTitle}</h2>
                <p>{t.teensText}</p>
                
                <div className="conjugation-group-examples">
                    <div className="conjugation-group-card">
                        <table className="conjugation-group-table">
                            <thead>
                                <tr>
                                    {t.teensTable.headers.map((header, index) => (
                                        <th key={index}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {t.teensTable.rows.map((row, rowIndex) => (
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

            {/* Dizaines */}
            <div className="conjugation-group-explanation">
                <h2>{t.tensTitle}</h2>
                <p>{t.tensText}</p>
                
                <div className="conjugation-group-examples">
                    <div className="conjugation-group-card">
                        <table className="conjugation-group-table">
                            <thead>
                                <tr>
                                    {t.tensTable.headers.map((header, index) => (
                                        <th key={index}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {t.tensTable.rows.map((row, rowIndex) => (
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

            {/* Centaines */}
            <div className="conjugation-group-explanation">
                <h2>{t.hundredsTitle}</h2>
                <p>{t.hundredsText}</p>
                
                <div className="conjugation-group-examples">
                    <div className="conjugation-group-card">
                        <table className="conjugation-group-table">
                            <thead>
                                <tr>
                                    {t.hundredsTable.headers.map((header, index) => (
                                        <th key={index}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {t.hundredsTable.rows.map((row, rowIndex) => (
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

            {/* Milliers */}
            <div className="conjugation-group-explanation">
                <h2>{t.thousandsTitle}</h2>
                <p>{t.thousandsText}</p>
                
                <div className="conjugation-group-examples">
                    <div className="conjugation-group-card">
                        <table className="conjugation-group-table">
                            <thead>
                                <tr>
                                    {t.thousandsTable.headers.map((header, index) => (
                                        <th key={index}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {t.thousandsTable.rows.map((row, rowIndex) => (
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

            {/* Nombres composés */}
            <div className="conjugation-group-explanation">
                <h2>{t.compoundNumbersTitle}</h2>
                <p>{t.compoundNumbersText}</p>
                
                <div className="conjugation-group-examples">
                    <div className="conjugation-group-card">
                        <div className="conjugation-group-notes">
                            <ul>
                                {t.compoundNumbersExamples.map((example, index) => (
                                    <li key={index}>{example}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Nombres ordinaux */}
            <div className="conjugation-group-explanation">
                <h2>{t.ordinalNumbersTitle}</h2>
                <p>{t.ordinalNumbersText}</p>
                
                <div className="conjugation-group-examples">
                    <div className="conjugation-group-card">
                        <table className="conjugation-group-table">
                            <thead>
                                <tr>
                                    {t.ordinalNumbersTable.headers.map((header, index) => (
                                        <th key={index}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {t.ordinalNumbersTable.rows.map((row, rowIndex) => (
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

            {/* Utilisation des nombres */}
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
                <Link to="/nombres_1_10">
                    <button>{t.practiceButton}</button>
                </Link>
            </div>
        </div>
    );
};

export default NombreCourse; 