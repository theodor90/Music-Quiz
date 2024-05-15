import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className="footer-content">
          <div className="footer-left">
            <h1>Quiz Namn</h1>
            <h3>Developed by</h3>
            <ul>
              <li>
                <a href='https://github.com/theodor90' target='_blank'>Theo <i className="fa-brands fa-github"></i></a>
              </li>
              <li>
                <a href='https://github.com/mattiasvlex' target='_blank'>Mattias <i className="fa-brands fa-github"></i></a>
              </li>
              <li>
                <a href='https://github.com/DavidR12344' target='_blank'>David <i className="fa-brands fa-github"></i></a>
              </li>
              <li>
                <a href='https://github.com/al-swe' target='_blank'>Alan <i className="fa-brands fa-github"></i></a>
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
