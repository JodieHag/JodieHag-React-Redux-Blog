import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import Header from './Header';
import Background from '../../static/img/background.png';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // SIDENAV
    $('.button-collapse').sideNav();

    // <img src={Logo}
    //   alt="JodieHag"
    //   rel="tooltip"
    //   data-html="true"
    //   title="<b>JodieHag</b> is a FrontEnd Developer Womb"
    //   data-placement="bottom"
    //   className="logo-min"
    // />
  }

  render() {
    const { pathname } = this.props;
    return (
      <nav
        className={classNames('navbar-fixed nav-extended', { 'nav-full-height': pathname === '/' })}
      >
        <div className="nav-background">
          <div className="back" style={{ backgroundImage: `url(${Background})` }} />
        </div>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            <h3>JodieHag</h3>
          </Link>
          <a href="#" data-activates="mobile-menu" className="button-collapse">
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down nav navbar-nav navbar-right">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/blog">About</Link></li>
            <li><Link to="/blog">Contact</Link></li>
          </ul>
          <ul className="side-nav" id="mobile-menu">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/blog">About</Link></li>
            <li><Link to="/blog">Contact</Link></li>
          </ul>
          {pathname === '/' ?
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
