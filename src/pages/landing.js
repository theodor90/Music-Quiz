import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion'
import Guitar from '../images/guitar.png'
import '../styles/landing.css'
import '../styles/styles.css';


function LandingPage() {
    return (
        <Container>
            <div className="landing-layout">
                <motion.div className=""
                    initial={{ x: '100vw' }} // Initial position of the image (off-screen to the right)
                    animate={{ x: 0 }} // Animate to position 0 (center of the screen)
                    transition={{ type: 'spring', stiffness: 120, duration: 1 }} // Animation type and duration
                    style={{ position: 'fixed', top: 0, right: 0 }}
                >
                 <img src={Guitar} className="landing-img" alt="Your Image" />
                </motion.div>
                <div class="center">
                    <button class="button">Play</button>
                </div>

                <div class="bottom-buttons">
                    <button class="button-left"><i className="fa fa-exclamation"/></button>
                    <button class="button-right"><i className="fa fa-question"/></button>
                </div>
            </div>
        </Container>
    );
}
export default LandingPage;