import React from 'react';
import { Link } from 'react-router';
import classNames from 'classNames';

class Footer extends React.Component {

  render() {
    const { home } = this.props;
    return (
      <footer className={classNames('page-footer',
        { transparent: home }
        )}
      >
        {home ?
          null
        :
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Footer Content</h5>
              <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li>
                  <Link to="https://github.com/JodieHag" target="_blank">
                    <i className="fa fa-github fa-2x" />git
                  </Link>
                </li>
                <li>
                  <Link to="https://www.linkedin.com/in/judit-sanchez-garrido-19766048/" target="_blank">
                    <i className="fa fa-linkedin fa-2x" aria-hidden="true" />linked
                  </Link>
                </li>
                <li>
                  <Link to="mailto:info@jodiehag.com">
                    <i className="fa fa-venus fa-2x" aria-hidden="true" />mail
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        }
        <div className="footer-copyright">
          <div className="container row valign-wrapper">
          <span className="left col m4">
            © 2018 , made with
             <i className="material-icons">favorite</i>
             by JodieHag.
           </span>
           <ul className="right lista-link col m8">
             <li>
               <Link to="https://github.com/JodieHag" target="_blank">
                 <i className="fa fa-github fa-2x" />git
               </Link>
             </li>
             <li>
               <Link to="https://www.linkedin.com/in/judit-sanchez-garrido-19766048/" target="_blank">
                 <i className="fa fa-linkedin fa-2x" aria-hidden="true" />linked
               </Link>
             </li>
             <li>
               <Link to="mailto:info@jodiehag.com">
                 <i className="fa fa-venus fa-2x" aria-hidden="true" />mail
               </Link>
             </li>
           </ul>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
