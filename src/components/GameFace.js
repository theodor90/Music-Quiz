import { useState } from "react";
import Database from "../database.json";
import Timer from "./Timer";
import "./GameFace.css";

const GameFace = () => {
  const [quizQuestions, setQuizQuestions] = useState(Database);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  let [score, setScore] = useState(0);

  const q1 = quizQuestions[currentQuestionIndex];

  const correctAnswer = q1.songName;

// 1. MAKE IT SO THAT THE RIGHT ANSWER TURNS GREEN, OTHERS RED. Add a "Next question" button after an answer has been clicked.
// 2. SHOW ANSWERS AFTER X AMOUNT OF TIME, BASED ON TIMER
// 3. RANDOMIZE BUTTON ORDER

  function checkAnswer(event) {
    if (event.target.id === correctAnswer) {
      console.log("Right answer!");
      setScore(prevScore => prevScore + 1);
    } else {
      console.log("Wrong answer!");
    }

    // Takes user to the next question
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      // Add "Endgame.jsx" here
      console.log("End of questions!");
    }
  }

  return (
    <div id="gamePage">
      <Timer />
      <h3>Whats song is this?</h3>
      <div className="game-btns">
        {q1.answers.map((answer) => (
        <button key={answer} id={answer} onClick={checkAnswer} className="btn btn-secondary">
          {answer}
        </button>
      ))}
      </div>
      
    </div>
  );
};

export default GameFace;
