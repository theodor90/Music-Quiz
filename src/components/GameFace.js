import { useState } from 'react';
import Database from '../database.json';

const GameFace = () => {
  const [quizQuestions, setQuizQuestions] = useState(Database)
  const q1 = Database[0]
  return (
    /* <div>{q1.map(() => (
       <div key={id}><h3>{songName}
       </h3><p>Artist: {artist}</p>
         <iframe src={url} width="100%" height="166" frameBorder="no" allowFullScreen={true}>
         </iframe></div>))}</div>);*/
    <div>
      <h3>Whats song is this?</h3>
      {q1.answers.map((answer) =>(
        <button key={answer}>{answer}</button>
      ))}
    </div>
  )
};

export default GameFace;
