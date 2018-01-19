import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';

import LayoutContainer from './views/LayoutContainer';
import IndexHome from './views/home/IndexHome';
import PortfolioContainer from './components/sections/portfolio/PortfolioContainer';
import BlogContainer from './components/sections/blog/BlogContainer';
import Post from './components/sections/blog/post/Post';
import AdminContainer from './components/sections/admin/AdminContainer';

require('./static/scss/App.scss');
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import { getPost } from './actions/blogActions';

const onPostEnter = (nextState) => {
  configureStore.dispatch(getPost(nextState.params.url));
};

export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore}>
        <Router history={browserHistory}>
          <Route path="/" component={LayoutContainer}>
            <IndexRoute component={IndexHome} />
            <Route path="cuentamecosas" component={AdminContainer} />
            <Route path="blog" component={BlogContainer} />
            <Route path="blog/:url" component={Post} onEnter={onPostEnter} />
            <Route path="work" component={PortfolioContainer} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
