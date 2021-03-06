import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <nav className="pull-left">
            <ul>
              <li>
                <a href="https://github.com/JodieHag" target="_blank">
                  <i className="fa fa-github fa-2x" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/judit-sanchez-garrido-19766048/" target="_blank">
                  <i className="fa fa-linkedin fa-2x" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="mailto:info@jodiehag.com">
                  <i className="fa fa-envelope fa-2x" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright pull-right">
            &copy; 2018, made with
             <i className="material-icons">favorite</i>
             by JodieHag.
           </div>
        </div>
      </footer>

    );
  }
}
export default Footer;
