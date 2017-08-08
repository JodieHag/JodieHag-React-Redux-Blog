import React from 'react';
import { Link } from 'react-router';
import Markdown from 'react-markdown';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getPost } from '../../../../actions/blogActions';

class Post extends React.Component {

  componentWillMount() {
    const { dispatch, params } = this.props;
    const url = params.url;
    dispatch(getPost({ url }));
  }

  render() {
    const { posts } = this.props;
    const post = posts.update_post;
    return (
      <div className="main main-raised">
        <div className="section">
          <div className="section-single-post">
            <div className="container">
              <div className="col-md-8 col-md-offset-2">
                <Link to="/blog" className="btn-link"><i className="fa fa-arrow-left" /> Volver atrás</Link>
                <div className="section-single-post__title">
                  <h1>{post.title}</h1>
                </div>
                <hr />
                <div
                  className="section-single-post__body"
                >
                  <Markdown source={post.contentPost} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  posts: state.posts
}))(Post);

Post.propTypes = {
  posts: PropTypes.object,
  dispatch: PropTypes.func,
  params: PropTypes.string
};

Post.defaultProps = {
  posts: {},
  dispatch: null,
  params: ''
};
