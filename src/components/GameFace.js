import { useState } from "react";
import Database from "../database.json";

const GameFace = () => {
  const [quizQuestions, setQuizQuestions] = useState(Database);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  let [score, setScore] = useState(0);

  const q1 = quizQuestions[currentQuestionIndex];

  const correctAnswer = q1.songName;

  function checkAnswer(event) {
    if (event.target.id === correctAnswer) {
      console.log("Right answer!");
      setScore(prevScore => prevScore + 1);
    } else {
      console.log("Wrong answer!");
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      console.log("End of questions!");
    }
  }

  return (
    <div>
      <p>Score: {score}</p>
      <h3>Whats song is this?</h3>
      {q1.answers.map((answer) => (
        <button key={answer} id={answer} onClick={checkAnswer}>
          {answer}
        </button>
      ))}
    </div>
  );
};

export default GameFace;
