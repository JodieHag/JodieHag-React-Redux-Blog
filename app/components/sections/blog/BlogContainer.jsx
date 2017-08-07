import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadPosts, updateStatePosts } from '../../../actions/blogActions';
import Blog from './Blog';

class BlogContainer extends React.Component {
  constructor(props) {
    super(props);

    this.categorySelected = this.categorySelected.bind(this);
  }

  componentWillMount() {
    const { dispatch, posts } = this.props;
    dispatch(loadPosts({ posts }));
  }

  categorySelected(category) {
    this.props.dispatch(updateStatePosts({ category }));
  }
  render() {
    const { posts } = this.props;
    return (
      <Blog
        posts={posts}
        categorySelected={this.categorySelected}
      />
    );
  }
}

export default connect(state => ({
  posts: state.posts
}))(BlogContainer);

BlogContainer.propTypes = {
  posts: PropTypes.object,
  dispatch: PropTypes.func
};

BlogContainer.defaultProps = {
  posts: {},
  dispatch: null
};
