import React from 'react';
import { connect } from 'react-redux';
import { loadPosts } from '../../../../actions/blogActions';
import Panel from './Panel';

class PanelContainer extends React.Component {

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
      <Panel
        status={posts}
      />
    );
  }
}
export default connect(state => ({
  posts: state.posts
}))(PanelContainer);
