import React from 'react'
import './css/Footer.css'
import { FaGithub } from "react-icons/fa";


export default function Footer() {
  return (
    <footer>
        <div className="footer-content">
          <div className="footer-left">
            <h1>Quiz Namn</h1>
            <h3>Developed by</h3>
            <ul>
              <li>
                <a href='https://github.com/theodor90' target='_blank'>Theo <FaGithub className='fa-brands'/></a>
              </li>
              <li>
                <a href='https://github.com/mattiasvlex' target='_blank'>Mattias <FaGithub className='fa-brands'/></a>
              </li>
              <li>
                <a href='https://github.com/DavidR12344' target='_blank'>David <FaGithub className='fa-brands'/></a>
              </li>
              <li>
                <a href='https://github.com/al-swe' target='_blank'>Alan <FaGithub className='fa-brands'/></a>
              </li>
              <li>
              <a href='https://github.com/SaadSabah' target='_blank'>Saad <FaGithub className='fa-brands'/></a>
              </li>
            </ul>
          </div>
          <div className="footer-right">
            <h3>
              <a href="">How to play</a>
            </h3>
            <h3>
              <a href="">Highscore</a>
            </h3>
          </div>
        </div>
        <div className="copy">
          <small>Copyright &copy; 2024</small>
        </div>
      </footer>
  )
}
