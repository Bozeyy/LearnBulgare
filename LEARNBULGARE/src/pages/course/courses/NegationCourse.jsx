import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../../context/LanguageContext';
import '../../../css/CourseStyle/courses/ConjugaisonCourse.css';

const NegationCourse = () => {
    const { language } = useContext(LanguageContext);

    const translations = {
        fr: {
            title: "La Négation en Bulgare",
            subtitle: "Apprenez à former des phrases négatives en bulgare",
            introduction: "La négation en bulgare est formée principalement avec la particule 'не' (ne). Cette page vous aidera à comprendre comment utiliser la négation correctement.",
            
            basicNegationTitle: "Négation de Base",
            basicNegationText: "La négation la plus simple est formée en ajoutant 'не' (ne) devant le verbe.",
            basicNegationExamples: [
                "Обичам (j'aime) → Не обичам (je n'aime pas)",
                "Искам (je veux) → Не искам (je ne veux pas)",
                "Разбирам (je comprends) → Не разбирам (je ne comprends pas)",
                "Говоря (je parle) → Не говоря (je ne parle pas)",
                "Работя (je travaille) → Не работя (je ne travaille pas)"
            ],
            
            pastTenseTitle: "Négation au Passé",
            pastTenseText: "Pour nier une action au passé, on place 'не' devant le verbe au passé.",
            pastTenseExamples: [
                "Обичах (j'aimais) → Не обичах (je n'aimais pas)",
                "Исках (je voulais) → Не исках (je ne voulais pas)",
                "Разбирах (je comprenais) → Не разбирах (je ne comprenais pas)",
                "Говорех (je parlais) → Не говорех (je ne parlais pas)",
                "Работех (je travaillais) → Не работех (je ne travaillais pas)"
            ],
            
            futureTenseTitle: "Négation au Futur",
            futureTenseText: "Pour nier une action au futur, on place 'не' devant le verbe au futur.",
            futureTenseExamples: [
                "Ще обичам (j'aimerai) → Няма да обичам (je n'aimerai pas)",
                "Ще искам (je voudrai) → Няма да искам (je ne voudrai pas)",
                "Ще разбирам (je comprendrai) → Няма да разбирам (je ne comprendrai pas)",
                "Ще говоря (je parlerai) → Няма да говоря (je ne parlerai pas)",
                "Ще работя (je travaillerai) → Няма да работя (je ne travaillerai pas)"
            ],
            
            compoundNegationTitle: "Négations Composées",
            compoundNegationText: "Il existe des expressions négatives composées en bulgare.",
            compoundNegationExamples: [
                "Никога (jamais) : Не идвам никога (je ne viens jamais)",
                "Нищо (rien) : Не виждам нищо (je ne vois rien)",
                "Никой (personne) : Не виждам никой (je ne vois personne)",
                "Никъде (nulle part) : Не отивам никъде (je ne vais nulle part)",
                "Никак (aucunement) : Не разбирам никак (je ne comprends aucunement)"
            ],
            
            doubleNegationTitle: "Double Négation",
            doubleNegationText: "En bulgare, la double négation est courante et renforce la négation.",
            doubleNegationExamples: [
                "Никога не идвам (je ne viens jamais)",
                "Нищо не виждам (je ne vois rien)",
                "Никой не знае (personne ne sait)",
                "Никъде не отивам (je ne vais nulle part)",
                "Никак не разбирам (je ne comprends aucunement)"
            ],
            
            exceptionsTitle: "Exceptions et Cas Particuliers",
            exceptionsText: "Certains verbes et expressions ont des formes négatives particulières.",
            exceptionsExamples: [
                "Имам (j'ai) → Нямам (je n'ai pas)",
                "Мога (je peux) → Не мога (je ne peux pas)",
                "Трябва (il faut) → Не трябва (il ne faut pas)",
                "Иска се (on veut) → Не иска се (on ne veut pas)",
                "Знае се (on sait) → Не знае се (on ne sait pas)"
            ],
            
            usageTitle: "Utilisation de la Négation",
            usageText: "La négation en bulgare est utilisée de différentes manières selon le contexte.",
            usageExamples: [
                "Pour nier une action : Не работя (je ne travaille pas)",
                "Pour nier une qualité : Не е красив (il n'est pas beau)",
                "Pour nier une possession : Нямам книга (je n'ai pas de livre)",
                "Pour nier une capacité : Не мога да говоря (je ne peux pas parler)",
                "Pour nier une obligation : Не трябва да отиваш (tu ne dois pas y aller)"
            ],
            
            practiceButton: "Pratiquer la Négation",
            
            tipsTitle: "Conseils pour la Négation",
            tip1: "Placez toujours 'не' devant le verbe que vous voulez nier.",
            tip2: "Pour le futur, utilisez 'няма да' au lieu de 'ще'.",
            tip3: "Apprenez les expressions négatives composées pour enrichir votre vocabulaire.",
            tip4: "Faites attention aux exceptions comme 'имам' → 'нямам'.",
            tip5: "Pratiquez la double négation pour renforcer votre expression."
        },
        en: {
            title: "Negation in Bulgarian",
            subtitle: "Learn to form negative sentences in Bulgarian",
            introduction: "Negation in Bulgarian is primarily formed with the particle 'не' (not). This page will help you understand how to use negation correctly.",
            
            basicNegationTitle: "Basic Negation",
            basicNegationText: "The simplest negation is formed by adding 'не' (not) before the verb.",
            basicNegationExamples: [
                "Обичам (I like) → Не обичам (I don't like)",
                "Искам (I want) → Не искам (I don't want)",
                "Разбирам (I understand) → Не разбирам (I don't understand)",
                "Говоря (I speak) → Не говоря (I don't speak)",
                "Работя (I work) → Не работя (I don't work)"
            ],
            
            pastTenseTitle: "Past Tense Negation",
            pastTenseText: "To negate a past action, place 'не' before the past tense verb.",
            pastTenseExamples: [
                "Обичах (I liked) → Не обичах (I didn't like)",
                "Исках (I wanted) → Не исках (I didn't want)",
                "Разбирах (I understood) → Не разбирах (I didn't understand)",
                "Говорех (I spoke) → Не говорех (I didn't speak)",
                "Работех (I worked) → Не работех (I didn't work)"
            ],
            
            futureTenseTitle: "Future Tense Negation",
            futureTenseText: "To negate a future action, use 'няма да' instead of 'ще'.",
            futureTenseExamples: [
                "Ще обичам (I will like) → Няма да обичам (I won't like)",
                "Ще искам (I will want) → Няма да искам (I won't want)",
                "Ще разбирам (I will understand) → Няма да разбирам (I won't understand)",
                "Ще говоря (I will speak) → Няма да говоря (I won't speak)",
                "Ще работя (I will work) → Няма да работя (I won't work)"
            ],
            
            compoundNegationTitle: "Compound Negations",
            compoundNegationText: "There are compound negative expressions in Bulgarian.",
            compoundNegationExamples: [
                "Никога (never) : Не идвам никога (I never come)",
                "Нищо (nothing) : Не виждам нищо (I see nothing)",
                "Никой (nobody) : Не виждам никой (I see nobody)",
                "Никъде (nowhere) : Не отивам никъде (I go nowhere)",
                "Никак (not at all) : Не разбирам никак (I don't understand at all)"
            ],
            
            doubleNegationTitle: "Double Negation",
            doubleNegationText: "In Bulgarian, double negation is common and strengthens the negation.",
            doubleNegationExamples: [
                "Никога не идвам (I never come)",
                "Нищо не виждам (I see nothing)",
                "Никой не знае (nobody knows)",
                "Никъде не отивам (I go nowhere)",
                "Никак не разбирам (I don't understand at all)"
            ],
            
            exceptionsTitle: "Exceptions and Special Cases",
            exceptionsText: "Some verbs and expressions have special negative forms.",
            exceptionsExamples: [
                "Имам (I have) → Нямам (I don't have)",
                "Мога (I can) → Не мога (I can't)",
                "Трябва (must) → Не трябва (must not)",
                "Иска се (one wants) → Не иска се (one doesn't want)",
                "Знае се (one knows) → Не знае се (one doesn't know)"
            ],
            
            usageTitle: "Using Negation",
            usageText: "Negation in Bulgarian is used in different ways depending on the context.",
            usageExamples: [
                "To negate an action: Не работя (I don't work)",
                "To negate a quality: Не е красив (he is not beautiful)",
                "To negate possession: Нямам книга (I don't have a book)",
                "To negate ability: Не мога да говоря (I can't speak)",
                "To negate obligation: Не трябва да отиваш (you must not go)"
            ],
            
            practiceButton: "Practice Negation",
            
            tipsTitle: "Tips for Negation",
            tip1: "Always place 'не' before the verb you want to negate.",
            tip2: "For future tense, use 'няма да' instead of 'ще'.",
            tip3: "Learn compound negative expressions to enrich your vocabulary.",
            tip4: "Pay attention to exceptions like 'имам' → 'нямам'.",
            tip5: "Practice double negation to strengthen your expression."
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

            {/* Négation de base */}
            <div className="conjugation-group-explanation">
                <h2>{t.basicNegationTitle}</h2>
                <p>{t.basicNegationText}</p>
                
                <div className="conjugation-group-examples">
                    <div className="conjugation-group-card">
                        <div className="conjugation-group-notes">
                            <ul>
                                {t.basicNegationExamples.map((example, index) => (
                                    <li key={index}>{example}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Négation au passé */}
            <div className="conjugation-group-explanation">
                <h2>{t.pastTenseTitle}</h2>
                <p>{t.pastTenseText}</p>
                
                <div className="conjugation-group-examples">
                    <div className="conjugation-group-card">
                        <div className="conjugation-group-notes">
                            <ul>
                                {t.pastTenseExamples.map((example, index) => (
                                    <li key={index}>{example}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Négation au futur */}
            <div className="conjugation-group-explanation">
                <h2>{t.futureTenseTitle}</h2>
                <p>{t.futureTenseText}</p>
                
                <div className="conjugation-group-examples">
                    <div className="conjugation-group-card">
                        <div className="conjugation-group-notes">
                            <ul>
                                {t.futureTenseExamples.map((example, index) => (
                                    <li key={index}>{example}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Négations composées */}
            <div className="conjugation-group-explanation">
                <h2>{t.compoundNegationTitle}</h2>
                <p>{t.compoundNegationText}</p>
                
                <div className="conjugation-group-examples">
                    <div className="conjugation-group-card">
                        <div className="conjugation-group-notes">
                            <ul>
                                {t.compoundNegationExamples.map((example, index) => (
                                    <li key={index}>{example}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Double négation */}
            <div className="conjugation-group-explanation">
                <h2>{t.doubleNegationTitle}</h2>
                <p>{t.doubleNegationText}</p>
                
                <div className="conjugation-group-examples">
                    <div className="conjugation-group-card">
                        <div className="conjugation-group-notes">
                            <ul>
                                {t.doubleNegationExamples.map((example, index) => (
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
                <Link to="/negation_quiz">
                    <button>{t.practiceButton}</button>
                </Link>
            </div>
        </div>
    );
};

export default NegationCourse; 