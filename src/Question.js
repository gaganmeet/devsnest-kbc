import React from "react";

function Question({
  QUESTIONS,
  question,
  setFinalScore,
  setQuestion,
  setScore,
  score,
  setShowScore,
}) {
  const handleAnswerOptionClick = (idx, answer) => {
    if (idx === answer) {
      setScore(score + QUESTIONS[question].money);
      if (question + 1 === 5) {
        setFinalScore(score);
      }
      if (question + 1 >= 10) {
        setFinalScore(score);
      }
      const nextQuestion = question + 1;
      if (nextQuestion < QUESTIONS.length) {
        setQuestion(nextQuestion);
      } else {
        setShowScore(3);
      }
    } else {
      setShowScore(3);
    }
  };
  console.log(QUESTIONS);
  return (
    <div>
      {QUESTIONS[question].options.map((answerOption, idx) => (
        <button
          key={idx}
          onClick={() =>
            handleAnswerOptionClick(idx, QUESTIONS[question].answer)
          }
        >
          {answerOption}
        </button>
      ))}
    </div>
  );
}

export default Question;
