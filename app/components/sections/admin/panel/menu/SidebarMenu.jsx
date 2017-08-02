import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import { connect } from 'react-redux';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import { updateStatePosts, loadPosts } from '../../../../../actions/blogActions';

const addPost = <FontIcon className="material-icons">add</FontIcon>;
const updatePost = <FontIcon className="material-icons">update</FontIcon>;

class SidebarMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      deleting: false,
      adding: true,
      updatingPost: false
    };
  }


  select(index) {
    this.setState({ selectedIndex: index });
    switch (index) {
      case index = 0:
        this.setState({
            adding: true,
            updatingPost: false
          }
        );

        break;
      case index = 1:
        const { posts, dispatch } = this.props;
        dispatch(loadPosts({ posts }));
        this.setState({
            adding: false,
            updatingPost: true
          }
        );
        break;
      // no default
    }
    this.updateState();
  }

  updateState() {
    const { dispatch } = this.props;
    dispatch(updateStatePosts({
      adding: this.state.adding,
      updatingPost: this.state.updatingPost
    }));
  }

  render() {
    return (
      <BottomNavigation selectedIndex={this.state.selectedIndex}>
        <BottomNavigationItem
            label="Add"
            icon={addPost}
            onTouchTap={() => this.select(0)}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Update"
            icon={updatePost}
            onTouchTap={() => this.select(1)}
            onClick={() => this.select(1)}
          />
      </BottomNavigation>
    );
  }
}

export default connect(state => ({
  posts: state.posts
}))(SidebarMenu);
