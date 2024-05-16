import { useState, useEffect } from "react";
import Database from "../database.json";
import "./GameFace.css";

const GameFace = () => {
  const nextBtn = document.getElementById("nextBtn");
  const [quizQuestions, setQuizQuestions] = useState(Database);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  let [score, setScore] = useState(0);
  let [answerDisable, setAnswerDisable] = useState(false);
  let [nextBtnDisabled, setNextBtnDisabled] = useState(false);

  const q1 = quizQuestions[currentQuestionIndex];

  const correctAnswer = q1.songName;

  // 1. MAKE IT SO THAT THE RIGHT ANSWER TURNS GREEN, OTHERS RED. Add a "Next question" button after an answer has been clicked.
  // 2. SHOW ANSWERS AFTER X AMOUNT OF TIME, BASED ON TIMER

  // Shuffle answers array when the component mounts or when currentQuestionIndex changes
  useEffect(() => {
    shuffleAnswers();
  }, [currentQuestionIndex]);

  const shuffleAnswers = () => {
    // Create a copy of the answers array
    const shuffledAnswers = [...q1.answers];
    // Shuffle the copied array
    for (let i = shuffledAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledAnswers[i], shuffledAnswers[j]] = [
        shuffledAnswers[j],
        shuffledAnswers[i],
      ];
    }
    // Update the state with the shuffled answers
    setQuizQuestions((prevState) => {
      const updatedQuestions = [...prevState];
      updatedQuestions[currentQuestionIndex].answers = shuffledAnswers;
      return updatedQuestions;
    });
  };

  // Checks if the selected answer is correct
  function checkAnswer(event) {
    if (event.target.id === correctAnswer) {
      console.log("Right answer!");
      setScore((prevScore) => prevScore + 1);
    } else {
      console.log("Wrong answer!");
    }
    setNextBtnDisabled(false);
    setAnswerDisable(true);
  }

  // Takes user to the next question
  function handleNext() {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      // Add "Endgame.jsx" here
      console.log("End of questions!");
    }
    setNextBtnDisabled(true);
    setAnswerDisable(false);
  }

  return (
    <div id="gamePage">
      <p>Score: {score}</p>
      <h3>Whats song is this?</h3>
      <div className="game-btns">
        {q1.answers.map((answer) => (
          <button
            key={answer}
            id={answer}
            onClick={checkAnswer}
            className="btn btn-secondary"
            disabled={answerDisable}
          >
            {answer}
          </button>
        ))}
        <button
          id="nextBtn"
          className="btn"
          onClick={handleNext}
          disabled={nextBtnDisabled}
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default GameFace;
