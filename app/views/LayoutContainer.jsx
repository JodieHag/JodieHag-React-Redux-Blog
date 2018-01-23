import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const AppContainer = props => (
  <div className="JodieHag">
    <Navbar
      pathname={props.location.pathname}
    />
    {props.children}
    <Footer
      home
    />
  </div>
);

export default AppContainer;
