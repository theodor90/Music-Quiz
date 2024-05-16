import { useState } from "react";
import ReactPlayer from 'react-player'
import Database from "../database.json";
import "./GameFace.css";
import "../styles/components.css"

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
      <p className="score">Score: {score}</p>
      <h3 className="song-title">Whats song is this?</h3>
      <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url={q1.url}
              pip={false}
              playing={true}
              controls={false}
              light={false}
              auto_play={true}
              playbackRate={1.0}
              volume={0.8}
              muted={false}
            />
          </div>
      <img src={q1.profileImg} className="artist-img"></img>
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
