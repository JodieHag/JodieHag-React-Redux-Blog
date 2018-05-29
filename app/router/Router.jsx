import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../components/common/Header';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

import AppContainer from '../components/AppContainer';
import PortfolioContainer from '../components/sections/portfolio/PortfolioContainer';
import BlogContainer from '../components/sections/blog/BlogContainer';
import Post from '../components/sections/blog/post/Post';
import AdminContainer from '../components/sections/admin/AdminContainer';

import { getPost } from '../actions/blogActions';

const onPostEnter = (nextState) => {
  configureStore.dispatch(getPost(nextState.params.url));
};

const Main = props => (
    <div className="App">
      <Navbar />
      <div className="wrapper">
        <Header />
        <main>
          <Switch>
            {/* <Route path="/cuentamecosas" component={AdminContainer} />
            <Route path="/blog" component={BlogContainer} />
            <Route path="/blog/:url" component={Post} onEnter={onPostEnter} /> */}
            <Route path="/work" component={PortfolioContainer} />
          </Switch>
        </main>
      </div>
      <Footer />
    </div>
);

export default Main;

Main.propTypes = {

};

Main.defaultProps = {

};
