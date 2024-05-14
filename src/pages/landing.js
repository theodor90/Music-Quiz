import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion'
import Guitar from '../images/electric-guitar.png'
import '../styles/landing.css'
import '../styles/styles.css';


function LandingPage() {
    return (
        <Container>
            <div className="landing-layout">
                 <button className="btn button-top-left btn-secondary">Profile</button>
                 <button className="btn button-buttom-left btn-secondary">Highscore</button>
                  <button className="btn button-center btn-secondary">Play</button>
                  <button className="btn button-bottom-right btn-secondary">How to play</button> 
                <motion.div className=""
                    initial={{ x: '100vw' }} // Initial position of the image (off-screen to the right)
                    animate={{ x: 0 }} // Animate to position 0 (center of the screen)
                    transition={{ type: 'spring', stiffness: 120, duration: 1 }} // Animation type and duration
                    style={{ position: 'fixed', top: 0, right: 0 }}
                >
                 <img src={Guitar} className="landing-img" alt="Your Image" />
                </motion.div>
            </div>
        </Container>
    );
}
export default LandingPage;