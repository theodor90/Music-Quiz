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
                <motion.div
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
                    <button class="button"><img src="left-icon.png" alt="Left Icon" /> Left</button>
                    <button class="button">Right <img src="right-icon.png" alt="Right Icon" /></button>
                </div>
            </div>
        </Container>
    );
}
export default LandingPage;