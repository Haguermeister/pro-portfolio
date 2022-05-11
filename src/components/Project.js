import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpeg'
import stackOvereats from '../images/stack-overeats-screenshot.png'
import cockyCocktails from '../images/cocky-cocktails-screenshot.png'
import houseShow from '../images/HouseShow.png'

import ContactForm from './contactForm'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Hi I'm Austin Hague. I'm currently a Civil Engineer Corps Officer
            for the United States Navy. In 2018 I graduated from the United
            States Naval Academy with a Bachelor's Degree in Robotics and
            Control Engineering (GPA : 3.67) while playing Varsity Football. In
            May of 2022, I graduated from the University of Richmond Full Stack
            Web Development Bootcamp.
          </p>
          <p>
            My preivous experience includes leading as a company commander of 40
            United States Seabees in charge of construction equipment totaling
            up to $20 million. In addition, as a construction manager at the
            United States Naval Academy I provided construction management to a
            $40 million renovation project.
          </p>
          <p>
            I am a highly driven, team focused, problem solver with an
            engineering background who looks forward to creating a solution for
            you!
            <br />
            <br /> By the way dont forget to checkout my work!
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={houseShow} alt="" />
          </span>
          <h3>HouseShow</h3>
          <p>
            Full-Stack : MERN Stack | PWA | Bootstrap
            <br />
            Deployed :{' '}
            <a
              href="https://house-show.herokuapp.com/"
              style={{ borderBottom: 'none' }}
            >
              https://house-show.herokuapp.com/
            </a>
            <br />
            Github :{' '}
            <a
              href="https://github.com/Haguermeister/house-show"
              style={{ borderBottom: 'none' }}
            >
              https://github.com/Haguermeister/house-show
            </a>
          </p>
          <span className="image main">
            <img src={stackOvereats} alt="" />
          </span>
          <h3>Stack Overeats</h3>
          <p>
            Full-Stack : Handlebars | CSS | JavaScript | Sequelize | Bootstrap |
            Express | Node | NPM | Heroku
            <br />
            Deployed :{' '}
            <a
              href="https://stack-overeats.herokuapp.com/"
              style={{ borderBottom: 'none' }}
            >
              https://stack-overeats.herokuapp.com/
            </a>
            <br />
            Github :{' '}
            <a
              href="https://github.com/Haguermeister/stack-overeats"
              style={{ borderBottom: 'none' }}
            >
              https://github.com/Haguermeister/stack-overeats
            </a>
          </p>
          <span className="image main">
            <img src={cockyCocktails} alt="" />
          </span>
          <h3>Cocky Cocktails</h3>
          <p>
            Front-End : HTML CSS JavaScript Bulma Git Github
            <br />
            Deployed :{' '}
            <a
              href="https://whosshazo.github.io/cocktail-project/"
              style={{ borderBottom: 'none' }}
            >
              https://whosshazo.github.io/cocktail-project/
            </a>
            <br />
            Github :{' '}
            <a
              href="https://github.com/whosshazo/cocktail-project"
              style={{ borderBottom: 'none' }}
            >
              https://github.com/whosshazo/cocktail-project
            </a>
          </p>

          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <ContactForm />
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/austinhague"
                className="icon fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Haguermeister"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
