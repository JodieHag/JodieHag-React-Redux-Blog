import React from 'react';
import { Link } from 'react-router';

class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-fixed-top navbar-color-on-scroll">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navigation-index"
            />
            <a href="http://wwww.jodiehag.com">
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
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right" id="navigation-index">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
