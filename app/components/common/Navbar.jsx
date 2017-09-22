import React from 'react';
import { Link } from 'react-router';
// <li><Link to="/blog">Blog</Link></li>
class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-fixed-top navbar-color-on-scroll navbar-transparent">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navigation-index"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="http://wwww.jodiehag.com">
              <div className="logo-container">
                <div className="logo">
                  <img
                    src="/img/logo.png"
                    alt="JodieHag"
                    rel="tooltip"
                    data-html="true"
                    title="<b>JodieHag</b> is a FrontEnd Developer Womb"
                    data-placement="bottom"
                    className="logo-min"
                  />
                </div>
              </div>
            </a>
          </div>
          <div className="navbar-collapse collapse" id="navigation-index">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/work">Work</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
