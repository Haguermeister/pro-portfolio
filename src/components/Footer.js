import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
        <ul className="icons">
            <li>
                <a href="https://www.linkedin.com/in/austinhague" className="icon fa-linkedin">
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
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
