import { useState } from "react";
import "./App.css";
import Question from "./Question";
function App() {
  const QUESTIONS = [
    {
      name: " India's largest city by population",
      options: ["Delhi", "Mumbai", "Pune", "Bangalore"],
      answer: 1,
      money: 1000,
    },
    {
      name: "India is a federal union comprising twenty-nine states and how many union territories?",
      options: ["6", "7", "8", "9"],
      answer: 1,
      money: 2000,
    },
    {
      name: "What are the major languages spoken in Andhra Pradesh?",
      options: [
        " English and Telugu",
        "Telugu and Urdu",
        "Telugu and Kannada",
        "All of the above languages",
      ],
      answer: 1,
      money: 3000,
    },
    {
      name: "What is the state flower of Haryana?",
      options: ["Lotus", "Rhondodendron", "Golden Shower", "Not declared"],
      answer: 1,
      money: 5000,
    },
    {
      name: " Where was the International Conference on 'Yoga for Diabetes' organized from January 4-6, 2017?",
      options: ["New Delhi ", "Jharkhand", "Jammu and Kashmir", "Haryana"],
      answer: 0,
      money: 10000,
    },
    {
      name: "Name the tower which was lighted up in Tricolour of India on Republic Day, 2017?",
      options: ["WTC Towers", "Jeddah Tower", "Burj Khalifa", "Burj Al Arab"],
      answer: 2,
      money: 20000,
    },
    {
      name: "Which of the following states is not located in the North?",
      options: [
        "Himachal Pradesh",
        "Jharkhand",
        "Jammu and Kashmir",
        "Haryana",
      ],
      answer: 1,
      money: 40000,
    },
    {
      name: "In what state is the Elephant Falls located?",
      options: ["Meghalaya", "Mizoram", "Orissa", "Manipur"],
      answer: 1,
      money: 80000,
    },
    {
      name: "Which state has the largest population?",
      options: ["Maharastra", "Rajasthan", "Bihar", "Andhra Pradesh"],
      answer: 1,
      money: 320000,
    },
    {
      name: "Which is the largest coffee producing state of India?",
      options: ["Maharastra", "Karnatka", "Maharashtra", "Rajasthan"],
      answer: 1,
      money: 640000,
    },
    {
      name: "In which state is the main language Khasi?",
      options: ["Nagaland", "Rajasthan", "Maharashtra", "Meghalaya"],
      answer: 3,
      money: 1250000,
    },
    {
      name: "Which of the following created history in 2016 by winning all three gold medals on offer in the 1st Western Asia Youth Chess Championship?",
      options: [
        "Nihal Sarin",
        "Kush Bhagat",
        "Praggnanandhaa",
        "Vidit Gujrathi",
      ],
      answer: 1,
      money: 2500000,
    },
    {
      name: " Which Bollywood actress is the new ambassador for Swachh Bharat Mission's youth-based 'Swachh Saathi' programme?",
      options: [
        "Vidya Balan ",
        "Dia Mirza ",
        "Priyanka Chopra",
        "Sonakshi Sinha",
      ],
      answer: 1,
      money: 5000000,
    },
    {
      name: "When is the Indian Air Force Day celebrated?",
      options: ["October 9", "October 10", "October 8", "October 11"],
      answer: 2,
      money: 10000000,
    },
  ];
  const qcopy = QUESTIONS;
  const [questionList, setQuestionList] = useState(QUESTIONS);
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(0);
  const [finalScore, setFinalScore] = useState(0);
  const [lifeLine, setLifeLine] = useState(true);
  const handleLifeline = (question) => {
    let q = questionList;
    let correct = q[question].answer;
    let options = q[question].options;
    let i = 0;
    for (i = 0; i < options.length && i !== correct; i++) {
      break;
    }
    let newOptions = [];
    newOptions.push(options[i]);
    newOptions.push(options[correct]);
    q[question].options = newOptions;
    setQuestionList(q);
    setLifeLine(false);
    setShowScore(1);
  };
  const handlePlayAgain = () => {
    setQuestionList(qcopy);
    setQuestion(0);
    setScore(0);
    setShowScore(0);
    setFinalScore(0);
    setLifeLine(true);
  };
  return (
    <div className="App">
      {question === 0 && !showScore ? (
        <h1>Welcome to KBC</h1>
      ) : (
        <h1>Round {question + 1}</h1>
      )}
      {showScore === 3 ? (
        <>
          <div className="score-section">You won {finalScore}</div>
          <button className="quit" onClick={() => handlePlayAgain()}>
            Play Again
          </button>
        </>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {question + 1}</span>/{QUESTIONS.length}
            </div>
            <div className="question-text">{QUESTIONS[question].name}</div>
          </div>
          <div className="answer-section">
            <Question
              QUESTIONS={questionList}
              question={question}
              setFinalScore={setFinalScore}
              setQuestion={setQuestion}
              setScore={setScore}
              score={score}
              setShowScore={setShowScore}
            />
            {lifeLine ? (
              <>
                <h2>Lifeline</h2>
                <button onClick={() => handleLifeline(question)}>50-50</button>
              </>
            ) : (
              <>
                <h2>No lifeline</h2>
              </>
            )}
          </div>
          <button className="quit" onClick={() => setShowScore(3)}>
            QUIT
          </button>
        </>
      )}
    </div>
  );
}

export default App;
