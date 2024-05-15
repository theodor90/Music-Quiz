import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Display from './Display';
import InputField from './InputField';
import AnswerOption from './AnswerOption';

const GameFace = () => {
  return (
    <Container>
      <Display />
      <InputField />
      <div className="answear-container">
      <Row>
        <div className="col">
          <AnswerOption text="Answer option 1" />
        </div>
        <div className="col">
          <AnswerOption text="Answer option 2" />
        </div>
        <div className="col">
          <AnswerOption text="Answer option 3" />
        </div>
      </Row>
      </div>
    </Container>
  );
};

export default GameFace;
