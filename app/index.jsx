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

import { getPost } from './actions/blogActions';

injectTapEventPlugin();

const onPostEnter = (nextState) => {
  configureStore.dispatch(getPost(nextState.params.url));
};

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={configureStore}>
          <Router history={browserHistory}>
            <Route path="/" component={AppContainer}>
              <Route path="cuentamecosas" component={AdminContainer} />
              <Route path="blog" component={BlogContainer} />
              <Route path="blog/:url" component={Post} onEnter={onPostEnter} />
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
