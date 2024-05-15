import React from 'react';
import Display from './Display';
import InputField from './InputField';
import AnswerOption from './AnswerOption';

const GameFace = () => {
  return (
    <div className="game-face">
      <Display />
      <InputField />
      <AnswerOption text="Answer option 1" />
      <AnswerOption text="Answer option 2" />
      <AnswerOption text="Answer option 3" />
    </div>
  );
};

export default GameFace;
