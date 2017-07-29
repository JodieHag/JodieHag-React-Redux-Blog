import React from 'react';
import { connect } from 'react-redux';
import Header from './common/Header.jsx';
import Navbar from './common/Navbar.jsx';
import Footer from './common/Footer.jsx';

require('../front/scss/App.scss');

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="wrapper">
          <Header />
            {this.props.children}
          <Footer />
        </div>
      </div>
    );
  }
}

export default AppContainer;
