import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import { connect } from 'react-redux';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import { updateStatePosts } from '../../../../../actions/blogActions';

const addPost = <FontIcon className="material-icons">add</FontIcon>;
const updatePost = <FontIcon className="material-icons">update</FontIcon>;
const deletePost = <FontIcon className="material-icons">delete</FontIcon>;

class SidebarMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      deleting: false,
      adding: false,
      updatingPost: false
    };
  }


  select(index) {
    this.setState({ selectedIndex: index });
    switch (index) {
      case index = 0:
        this.setState({
            adding: true,
            updatingPost: false,
            deleting: false
          }
        );

        break;
      case index = 1:
        this.setState({
            adding: false,
            updatingPost: true,
            deleting: false
          }
        );
        break;
      case index = 2:
        this.setState({
            adding: false,
            updatingPost: false,
            deleting: true
          }
        );
        break;
      // no default
    }
    this.updateState();
  }

  updateState() {
    this.props.dispatch(updateStatePosts({
      adding: this.state.adding,
      updatingPost: this.state.updatingPost,
      deleting: this.state.deleting
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
