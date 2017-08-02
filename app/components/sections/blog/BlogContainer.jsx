import React from 'react';
import { connect } from 'react-redux';

import { loadPosts } from '../../../actions/blogActions';
import Blog from './Blog';

class BlogContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch, posts } = this.props;
    this.props.dispatch(loadPosts({ posts }));

    setTimeout(() => {
      this.setState({
        posts: posts.post
      });
    }, 1000);
  }

  render() {
    const { posts } = this.props;
    return (
      <Blog posts={posts} />
    );
  }
}

export default connect(state => ({
  posts: state.posts
}))(BlogContainer);
