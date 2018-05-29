import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';

import AppContainer from './components/AppContainer';
import PortfolioContainer from './components/sections/portfolio/PortfolioContainer';
import BlogContainer from './components/sections/blog/BlogContainer';
import Post from './components/sections/blog/post/Post';
import AdminContainer from './components/sections/admin/AdminContainer';

export default class App extends React.Component {
  render() {
    return (
        <Provider store={configureStore}>
          <BrowserRouter>
            <Switch>
            <Route path="/" component={AppContainer} />
          </Switch>
          </BrowserRouter>
        </Provider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
