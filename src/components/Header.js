import PropTypes from 'prop-types'
import React from 'react'
import resume from '/public/resume.pdf'
const Header = (props) => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-code"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Austin Hague</h1>
        <p>WELCOME TO MY PORTFOLIO PAGE</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            ABOUT.
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            WORK.
          </button>
        </li>
        <li>
          <button>
            <a
              href={resume}
              download="AustinHagueResume"
              style={{ borderBottom: 'none' }}
            >
              RESUME.
            </a>
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            CONTACT.
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
