import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div class="footer-content">
          <div class="footer-left">
            <h1>Quiz Namn</h1>
            <h3>Developed by</h3>
            <ul>
              <li>
                <a href="">Theo <i class="fa-brands fa-github"></i></a>
              </li>
              <li>
                <a href="">Mattias <i class="fa-brands fa-github"></i></a>
              </li>
              <li>
                <a href="">David <i class="fa-brands fa-github"></i></a>
              </li>
              <li>
                <a href="">Alan <i class="fa-brands fa-github"></i></a>
              </li>
            </ul>
          </div>
          <div class="footer-right">
            <h3>
              <a href="">How to play</a>
            </h3>
            <h3>
              <a href="">Highscore</a>
            </h3>
          </div>
        </div>
        <div class="copy">
          <small>Copyright &copy; 2024</small>
        </div>
      </footer>
  )
}
