import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './stores/configureStore';

import AppContainer from './components/AppContainer';
import BlogContainer from './components/sections/blog/BlogContainer';
import Post from './components/sections/blog/post/Post';
import AdminContainer from './components/sections/admin/AdminContainer';

injectTapEventPlugin();

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={configureStore}>
          <Router history={browserHistory}>
            <Route path="/" component={AppContainer}>
              <Route path="cuentamecosas" component={AdminContainer} />
              <Route path="blog" component={BlogContainer} />
              <Route path="blog/:post_name" component={Post} />
            </Route>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
