import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../../context/LanguageContext';
import '../../../css/CourseStyle/courses/ConjugaisonCourse.css';

const ConditionalCourse = () => {
    const { language } = useContext(LanguageContext);

    const translations = {
        fr: {
            title: "Le Conditionnel en Bulgare",
            subtitle: "Apprenez à former et utiliser le conditionnel en bulgare",
            introduction: "Le conditionnel en bulgare est formé principalement avec la particule 'бих' (bih) et le participe passé. Cette page vous aidera à comprendre comment utiliser le conditionnel correctement.",
            
            basicConditionalTitle: "Conditionnel de Base",
            basicConditionalText: "Le conditionnel simple est formé en ajoutant 'бих' (bih) devant le participe passé du verbe.",
            basicConditionalExamples: [
                "Обичам (j'aime) → Бих обичал (j'aimerais)",
                "Искам (je veux) → Бих искал (je voudrais)",
                "Разбирам (je comprends) → Бих разбирал (je comprendrais)",
                "Говоря (je parle) → Бих говорил (je parlerais)",
                "Работя (je travaille) → Бих работил (je travaillerais)"
            ],
            
            pastConditionalTitle: "Conditionnel Passé",
            pastConditionalText: "Le conditionnel passé est formé avec 'бих' et le participe passé du verbe.",
            pastConditionalExamples: [
                "Обичах (j'aimais) → Бих обичал (j'aurais aimé)",
                "Исках (je voulais) → Бих искал (j'aurais voulu)",
                "Разбирах (je comprenais) → Бих разбирал (j'aurais compris)",
                "Говорех (je parlais) → Бих говорил (j'aurais parlé)",
                "Работех (je travaillais) → Бих работил (j'aurais travaillé)"
            ],
            
            conditionalWithIfTitle: "Conditionnel avec 'Ако'",
            conditionalWithIfText: "Le conditionnel est souvent utilisé avec 'ако' (si) pour former des phrases conditionnelles.",
            conditionalWithIfExamples: [
                "Ако имах време, бих отишъл (Si j'avais le temps, j'irais)",
                "Ако знаех, бих ти казал (Si je savais, je te le dirais)",
                "Ако можех, бих помогнал (Si je pouvais, j'aiderais)",
                "Ако искаше, бих дошъл (S'il voulait, je viendrais)",
                "Ако беше нужно, бих останал (Si c'était nécessaire, je resterais)"
            ],
            
            conditionalExpressionsTitle: "Expressions Conditionnelles",
            conditionalExpressionsText: "Il existe des expressions conditionnelles courantes en bulgare.",
            conditionalExpressionsExamples: [
                "Бих искал да... (Je voudrais...)",
                "Бих предпочел да... (Je préférerais...)",
                "Бих могъл да... (Je pourrais...)",
                "Бих трябвало да... (Je devrais...)",
                "Бих бил щастлив да... (Je serais heureux de...)"
            ],
            
            exceptionsTitle: "Exceptions et Cas Particuliers",
            exceptionsText: "Certains verbes ont des formes conditionnelles particulières.",
            exceptionsExamples: [
                "Съм (être) → Бих бил (je serais)",
                "Имам (avoir) → Бих имал (j'aurais)",
                "Мога (pouvoir) → Бих могъл (je pourrais)",
                "Трябва (devoir) → Бих трябвало (je devrais)",
                "Иска се (on veut) → Бих се искало (on voudrait)"
            ],
            
            usageTitle: "Utilisation du Conditionnel",
            usageText: "Le conditionnel en bulgare est utilisé dans différents contextes.",
            usageExamples: [
                "Pour exprimer un souhait : Бих искал да отида (Je voudrais aller)",
                "Pour une hypothèse : Ако имах пари, бих купил (Si j'avais de l'argent, j'achèterais)",
                "Pour une suggestion : Бих предложил да... (Je suggérerais de...)",
                "Pour une politesse : Бих искал да попитам (Je voudrais demander)",
                "Pour une condition : Ако беше възможно, бих... (Si c'était possible, je...)"
            ],
            
            practiceButton: "Pratiquer le Conditionnel",
            
            tipsTitle: "Conseils pour le Conditionnel",
            tip1: "Utilisez toujours 'бих' avec le participe passé du verbe.",
            tip2: "N'oubliez pas d'utiliser 'ако' pour les phrases conditionnelles.",
            tip3: "Apprenez les expressions conditionnelles courantes.",
            tip4: "Faites attention aux verbes irréguliers.",
            tip5: "Pratiquez la formation du conditionnel avec différents verbes."
        },
        en: {
            title: "Conditional in Bulgarian",
            subtitle: "Learn to form and use the conditional in Bulgarian",
            introduction: "The conditional in Bulgarian is primarily formed with the particle 'бих' (bih) and the past participle. This page will help you understand how to use the conditional correctly.",
            
            basicConditionalTitle: "Basic Conditional",
            basicConditionalText: "The simple conditional is formed by adding 'бих' (bih) before the past participle of the verb.",
            basicConditionalExamples: [
                "Обичам (I like) → Бих обичал (I would like)",
                "Искам (I want) → Бих искал (I would want)",
                "Разбирам (I understand) → Бих разбирал (I would understand)",
                "Говоря (I speak) → Бих говорил (I would speak)",
                "Работя (I work) → Бих работил (I would work)"
            ],
            
            pastConditionalTitle: "Past Conditional",
            pastConditionalText: "The past conditional is formed with 'бих' and the past participle of the verb.",
            pastConditionalExamples: [
                "Обичах (I liked) → Бих обичал (I would have liked)",
                "Исках (I wanted) → Бих искал (I would have wanted)",
                "Разбирах (I understood) → Бих разбирал (I would have understood)",
                "Говорех (I spoke) → Бих говорил (I would have spoken)",
                "Работех (I worked) → Бих работил (I would have worked)"
            ],
            
            conditionalWithIfTitle: "Conditional with 'Ако'",
            conditionalWithIfText: "The conditional is often used with 'ако' (if) to form conditional sentences.",
            conditionalWithIfExamples: [
                "Ако имах време, бих отишъл (If I had time, I would go)",
                "Ако знаех, бих ти казал (If I knew, I would tell you)",
                "Ако можех, бих помогнал (If I could, I would help)",
                "Ако искаше, бих дошъл (If he wanted, I would come)",
                "Ако беше нужно, бих останал (If it was necessary, I would stay)"
            ],
            
            conditionalExpressionsTitle: "Conditional Expressions",
            conditionalExpressionsText: "There are common conditional expressions in Bulgarian.",
            conditionalExpressionsExamples: [
                "Бих искал да... (I would like to...)",
                "Бих предпочел да... (I would prefer to...)",
                "Бих могъл да... (I could...)",
                "Бих трябвало да... (I should...)",
                "Бих бил щастлив да... (I would be happy to...)"
            ],
            
            exceptionsTitle: "Exceptions and Special Cases",
            exceptionsText: "Some verbs have special conditional forms.",
            exceptionsExamples: [
                "Съм (to be) → Бих бил (I would be)",
                "Имам (to have) → Бих имал (I would have)",
                "Мога (can) → Бих могъл (I could)",
                "Трябва (must) → Бих трябвало (I should)",
                "Иска се (one wants) → Бих се искало (one would want)"
            ],
            
            usageTitle: "Using the Conditional",
            usageText: "The conditional in Bulgarian is used in different contexts.",
            usageExamples: [
                "To express a wish: Бих искал да отида (I would like to go)",
                "For a hypothesis: Ако имах пари, бих купил (If I had money, I would buy)",
                "For a suggestion: Бих предложил да... (I would suggest to...)",
                "For politeness: Бих искал да попитам (I would like to ask)",
                "For a condition: Ако беше възможно, бих... (If it was possible, I would...)"
            ],
            
            practiceButton: "Practice Conditional",
            
            tipsTitle: "Tips for Conditional",
            tip1: "Always use 'бих' with the past participle of the verb.",
            tip2: "Don't forget to use 'ако' for conditional sentences.",
            tip3: "Learn common conditional expressions.",
            tip4: "Pay attention to irregular verbs.",
            tip5: "Practice forming the conditional with different verbs."
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

            {/* Conditionnel de base */}
            <div className="conjugation-group-explanation">
                <h2>{t.basicConditionalTitle}</h2>
                <p>{t.basicConditionalText}</p>
                
                <div className="conjugation-group-examples">
                    <div className="conjugation-group-card">
                        <div className="conjugation-group-notes">
                            <ul>
                                {t.basicConditionalExamples.map((example, index) => (
                                    <li key={index}>{example}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Conditionnel passé */}
            <div className="conjugation-group-explanation">
                <h2>{t.pastConditionalTitle}</h2>
                <p>{t.pastConditionalText}</p>
                
                <div className="conjugation-group-examples">
                    <div className="conjugation-group-card">
                        <div className="conjugation-group-notes">
                            <ul>
                                {t.pastConditionalExamples.map((example, index) => (
                                    <li key={index}>{example}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Conditionnel avec 'Ако' */}
            <div className="conjugation-group-explanation">
                <h2>{t.conditionalWithIfTitle}</h2>
                <p>{t.conditionalWithIfText}</p>
                
                <div className="conjugation-group-examples">
                    <div className="conjugation-group-card">
                        <div className="conjugation-group-notes">
                            <ul>
                                {t.conditionalWithIfExamples.map((example, index) => (
                                    <li key={index}>{example}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Expressions conditionnelles */}
            <div className="conjugation-group-explanation">
                <h2>{t.conditionalExpressionsTitle}</h2>
                <p>{t.conditionalExpressionsText}</p>
                
                <div className="conjugation-group-examples">
                    <div className="conjugation-group-card">
                        <div className="conjugation-group-notes">
                            <ul>
                                {t.conditionalExpressionsExamples.map((example, index) => (
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
                <Link to="/conditional_quiz">
                    <button>{t.practiceButton}</button>
                </Link>
            </div>
        </div>
    );
};

export default ConditionalCourse; 