import React from 'react';
import { Link } from 'react-router';
import Logo from '../../static/img/logo.png';
import Header from './Header';
import Background from '../../static/img/background.png';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // SIDENAV
    $('.button-collapse').sideNav();
  }

  render() {
    const { header } = this.props;
    return (
      <nav
        className="nav-extended"
      >
        <div className="nav-background">
          <div className="back" style={{ backgroundImage: `url(${Background})` }} />
        </div>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo center">
            <img src={Logo}
              alt="JodieHag"
              rel="tooltip"
              data-html="true"
              title="<b>JodieHag</b> is a FrontEnd Developer Womb"
              data-placement="bottom"
              className="logo-min"
            />
          </Link>
          <a href="#" data-activates="mobile-menu" className="button-collapse">
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down nav navbar-nav navbar-right">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
          <ul className="side-nav" id="mobile-menu">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
          {header ?
            <Header />
          :
            null
          }
        </div>
        </nav>
    );
  }
}

export default Navbar;
