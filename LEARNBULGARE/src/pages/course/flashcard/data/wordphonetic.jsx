import { useContext } from "react";
import { LanguageContext } from "../../../../context/LanguageContext"; // Import du contexte

const translations = {
  fr: {
    title: "Mots courants",
    data: [
      { question: "Здравей", answer: "zdravey", info: "Bonjour (informel)" },
      { question: "Здравейте", answer: "zdraveyte", info: "Bonjour (formel/pluriel)" },
      { question: "Чао", answer: "chao", info: "Au revoir" },
      { question: "Довиждане", answer: "dovizhdane", info: "Au revoir (formel)" },
      { question: "Да", answer: "da", info: "Oui" },
      { question: "Не", answer: "ne", info: "Non" },
      { question: "Благодаря", answer: "blagodarya", info: "Merci" },
      { question: "Моля", answer: "molya", info: "S'il vous plaît / De rien" },
      { question: "Извинете", answer: "izvinete", info: "Excusez-moi" },
      { question: "Съжалявам", answer: "sazhalyavam", info: "Je suis désolé(e)" },
      { question: "Как си?", answer: "kak si?", info: "Comment vas-tu ?" },
      { question: "Как сте?", answer: "kak ste?", info: "Comment allez-vous ?" },
      { question: "Добре", answer: "dobre", info: "Bien" },
      { question: "Лошо", answer: "losho", info: "Mal" },
      { question: "Как се казваш?", answer: "kak se kazvash?", info: "Comment t'appelles-tu ?" },
      { question: "Казвам се...", answer: "kazvam se...", info: "Je m'appelle..." },
      { question: "Откъде си?", answer: "otkade si?", info: "D'où viens-tu ?" },
      { question: "Аз съм от...", answer: "az sam ot...", info: "Je viens de..." },
      { question: "Приятно ми е", answer: "priyatno mi e", info: "Enchanté(e)" },
      { question: "Разбирам", answer: "razbiram", info: "Je comprends" },
      { question: "Не разбирам", answer: "ne razbiram", info: "Je ne comprends pas" },
      { question: "Говорите ли английски?", answer: "govorite li angliyski?", info: "Parlez-vous anglais ?" },
      { question: "Къде е...?", answer: "kade e...?", info: "Où est...?" },
      { question: "Тоалетната", answer: "toaletnata", info: "Les toilettes" },
      { question: "Помощ!", answer: "pomoshch!", info: "À l'aide !" },
      { question: "Колко струва?", answer: "kolko struva?", info: "Combien ça coûte ?" },
      { question: "Сметката, моля", answer: "smetkata, molya", info: "L'addition, s'il vous plaît" }
    ]
  },
  en: {
    title: "Common questions",
    data: [
      { question: "Здравей", answer: "zdravey", info: "Hello (informal)" },
      { question: "Здравейте", answer: "zdraveyte", info: "Hello (formal/plural)" },
      { question: "Чао", answer: "chao", info: "Goodbye" },
      { question: "Довиждане", answer: "dovizhdane", info: "Goodbye (formal)" },
      { question: "Да", answer: "da", info: "Yes" },
      { question: "Не", answer: "ne", info: "No" },
      { question: "Благодаря", answer: "blagodarya", info: "Thank you" },
      { question: "Моля", answer: "molya", info: "Please / You're welcome" },
      { question: "Извинете", answer: "izvinete", info: "Excuse me" },
      { question: "Съжалявам", answer: "sazhalyavam", info: "I'm sorry" },
      { question: "Как си?", answer: "kak si?", info: "How are you?" },
      { question: "Как сте?", answer: "kak ste?", info: "How are you? (formal)" },
      { question: "Добре", answer: "dobre", info: "Good" },
      { question: "Лошо", answer: "losho", info: "Bad" },
      { question: "Как се казваш?", answer: "kak se kazvash?", info: "What’s your name?" },
      { question: "Казвам се...", answer: "kazvam se...", info: "My name is..." },
      { question: "Откъде си?", answer: "otkade si?", info: "Where are you from?" },
      { question: "Аз съм от...", answer: "az sam ot...", info: "I'm from..." },
      { question: "Приятно ми е", answer: "priyatno mi e", info: "Nice to meet you" },
      { question: "Разбирам", answer: "razbiram", info: "I understand" },
      { question: "Не разбирам", answer: "ne razbiram", info: "I don't understand" },
      { question: "Говорите ли английски?", answer: "govorite li angliyski?", info: "Do you speak English?" },
      { question: "Къде е...?", answer: "kade e...?", info: "Where is...?" },
      { question: "Тоалетната", answer: "toaletnata", info: "The toilet" },
      { question: "Помощ!", answer: "pomoshch!", info: "Help!" },
      { question: "Колко струва?", answer: "kolko struva?", info: "How much does it cost?" },
      { question: "Сметката, моля", answer: "smetkata, molya", info: "The bill, please" }
    ]
  }
};

const useWordsFlashcards = () => {
  const { language } = useContext(LanguageContext);
  return {
    data: translations[language].data,
    title: translations[language].title
  };
};

export { useWordsFlashcards };
