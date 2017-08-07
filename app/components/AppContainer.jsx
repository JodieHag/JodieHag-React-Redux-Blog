import React from 'react';
import Header from './common/Header';
import Navbar from './common/Navbar';
import Footer from './common/Footer';

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
        </div>
        <Footer />
      </div>
    );
  }
}

export default AppContainer;
