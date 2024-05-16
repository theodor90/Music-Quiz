import { useState, useEffect } from "react";
import Database from "../database.json";
import "./GameFace.css";
import ReactPlayer from "react-player";
import GameEnd from "./GameEnd";

const GameFace = () => {
  const nextBtn = document.getElementById("nextBtn");
  const [quizQuestions, setQuizQuestions] = useState(Database);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  let [score, setScore] = useState(0);
  let [answerDisable, setAnswerDisable] = useState(false);
  let [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [showButton, setShowButton] = useState(false);

  const q1 = quizQuestions[currentQuestionIndex];

  const correctAnswer = q1.songName;

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
    const buttons = document.getElementsByClassName("check");

    // Adds colors to the answer buttons, green for correct and red for wrong
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].id === correctAnswer) {
        buttons[i].classList.add("btn-correct");
      } else {
        buttons[i].classList.add("btn-wrong");
      }
      buttons[i].disabled = true;
    }

    // Checks answer and adds to score if correct
    if (event.target.id === correctAnswer) {
      console.log("Right answer!");
      setScore((prevScore) => prevScore + 1);
    } else {
      console.log("Wrong answer!");
    }

    setNextBtnDisabled(false);
  }

  // Takes user to the next question
  function handleNext() {
    const buttons = document.getElementsByClassName("check");

    // Remove the green and red classes from all answer buttons
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("btn-correct", "btn-wrong");
      buttons[i].disabled = false; // Re-enable answer buttons
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      // Add "Endgame.jsx" here
      console.log("End of questions!");
      setShowButton(true);
    }
    setNextBtnDisabled(true);
    setAnswerDisable(false);
  }

  return (
    <div id="gamePage">
      <h3>Score: {score}</h3>
      <h3>What song is this?</h3>
      <ReactPlayer 
      className="react-player"
      url={q1.url} 
      pip={false} //GitmMasterDavid (aka toalettmaster aka kommer5minsent aka toomanycupsofcoffee)
      playing={true} //GitmMasterDavid (aka toalettmaster aka kommer5minsent aka toomanycupsofcoffee)
      auto_play={true} //GitmMasterDavid (aka toalettmaster aka kommer5minsent aka toomanycupsofcoffee)
      />
      <img src={q1.profileImg} className="artist-img"></img>
      <div className="game-btns">
        {q1.answers.map((answer) => (
          <button
            key={answer}
            id={answer}
            onClick={checkAnswer}
            className="btn btn-secondary check"
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
        <GameEnd value={score} show={showButton}/>
      </div>
    </div>
  );
};

export default GameFace;
