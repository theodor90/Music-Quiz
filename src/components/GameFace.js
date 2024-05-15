import { useState } from "react";
import Database from "../database.json";

const GameFace = () => {
  const [quizQuestions, setQuizQuestions] = useState(Database);
  const q1 = Database[0];

  const correctAnswer = q1.songName;

  function checkAnswer(event) {
    if (event.target.id === correctAnswer) {
      console.log("Right answer!");
    } else {
      console.log("Wrong answer!");
    }
  }

  return (
    <div>
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
