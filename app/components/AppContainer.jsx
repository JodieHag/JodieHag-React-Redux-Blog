import React from 'react';
import Main from '../router/Router';

require('../front/scss/App.scss');

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Main />
    );
  }
}

export default AppContainer;
