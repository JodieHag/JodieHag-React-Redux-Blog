import React from 'react';
import Footer from '../components/common/Footer';

const AppContainer = props => (
  <div className="JodieHag">
    {props.children}
    <Footer
      home
    />
  </div>
);

export default AppContainer;
