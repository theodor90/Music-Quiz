import React, { useState, useRef, useEffect } from "react";
import "../styles/howtoplay.css";
import "../styles/styles.css";
import { FiPlus } from "react-icons/fi";
import Footer from "../components/Footer";
import Musicnote1 from "../components/Musicnote1";
import "../styles/styles.css";
import { Link } from 'react-router-dom';

export default function App() {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  const toggleAccordion1 = () => {
    setActive1(!active1);
  };

  const toggleAccordion2 = () => {
    setActive2(!active2);
  };

  const toggleAccordion3 = () => {
    setActive3(!active3);
  };

  const contentRef1 = useRef(null);
  const contentRef2 = useRef(null);
  const contentRef3 = useRef(null);

  useEffect(() => {
    contentRef1.current.style.maxHeight = active1
      ? `${contentRef1.current.scrollHeight}px`
      : "0px";
  }, [contentRef1, active1]);

  useEffect(() => {
    contentRef2.current.style.maxHeight = active2
      ? `${contentRef2.current.scrollHeight}px`
      : "0px";
  }, [contentRef2, active2]);

  useEffect(() => {
    contentRef3.current.style.maxHeight = active3
      ? `${contentRef3.current.scrollHeight}px`
      : "0px";
  }, [contentRef3, active3]);

  return (
    <div>
      <Link to="/">
      <button className="btn btn-secondary home-button">HOME</button>
      </Link>
      <section className="container-hero">
        <h1 className="title">Welcome to Music Quiz!</h1>
        <div>
          <div className="info-text">
            <p className="welcome-text">
            Get ready to dive into the world of music and put your knowledge to the test.
              <br />
              Can you identify the artists behind the tunes? Let's find out!
            </p>
          </div>
          <div className="musicnote-container">
            <div className="musicnote-left">
              <Musicnote1 />
            </div>
            <div className="musicnote-right">
              <Musicnote1 />
            </div>
          </div>
        </div>
      </section>
      <div className="question-container-1">
        <div>
          <button
            className={`question-section ${active1}`}
            onClick={toggleAccordion1}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style">
                Listen & Guess
                </h4>
                <FiPlus
                  className={active1 ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef1}
                className={active1 ? `answer answer-divider` : `answer`}
              >
                <p>Hear a song snippet. Who's the artist?</p>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="question-container-2">
        <div>
          <button
            className={`question-section ${active2}`}
            onClick={toggleAccordion2}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style">Type Your Answer</h4>
                <FiPlus
                  className={active2 ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef2}
                className={active2 ? `answer answer-divider` : `answer`}
              >
                <p>Enter the artist's name.</p>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="question-container-3">
        <div>
          <button
            className={`question-section ${active3}`}
            onClick={toggleAccordion3}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style">
                Submit in Time
                </h4>
                <FiPlus
                  className={active3 ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef3}
                className={active3 ? `answer answer-divider` : `answer`}
              >
                <p>Beat the clock to score points.</p>
              </div>
            </div>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
