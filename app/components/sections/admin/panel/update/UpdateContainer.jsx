import React from 'react';
import { connect } from 'react-redux';

import { getPost, updatePost, updateStatePosts, deletePost, loadPosts } from '../../../../../actions/blogActions';
import Update from './Update';

class UpdateContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: '',
      editMode: false,
      toggle: false,
      borrarAlert: false
    };

    this.onUpdate = this.onUpdate.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.updateCode = this.updateCode.bind(this);
    this.handleChangePicture = this.handleChangePicture.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangePostIt = this.handleChangePostIt.bind(this);
    this.updatePostIt = this.updatePostIt.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.showAlert = this.showAlert.bind(this);
    this.hideAlert = this.hideAlert.bind(this);
  }
  onUpdate(id) {
    this.props.dispatch(getPost({ id }));
    this.setState({
      editMode: true
    });
  }

  onCancel() {
    this.setState({
      editMode: false
    });
  }

  onDelete(id) {
    this.props.dispatch(deletePost({ id }));
    this.setState({
      borrarAlert: false
    });
  }
  showAlert(id) {
    this.props.dispatch(getPost({ id }));
    this.setState({
      borrarAlert: true
    });
  }
  hideAlert() {
    this.setState({
      borrarAlert: false
    });
  }

  onSave(id) {
    const { posts, dispatch } = this.props;
    dispatch(updatePost({
      id,
      title: posts.update_post.title,
      description: posts.update_post.description,
      contentPost: posts.update_post.contentPost,
      picture: posts.update_post.picture,
      category: posts.update_post.category,
      postit: posts.update_post.postit,
      _id: posts.update_post._id
    }));

    this.setState({
      editMode: false
    });
    dispatch(loadPosts({ posts }));
  }

  handleChangeTitle(event) {
    const { posts } = this.props;
    this.props.dispatch(updateStatePosts({
      update_post: {
        title: event.target.value,
        description: posts.update_post.description,
        postit: posts.update_post.postit,
        picture: posts.update_post.picture,
        contentPost: posts.update_post.contentPost,
        category: posts.update_post.category,
        _id: posts.update_post._id
      }
    }));
  }

  handleChangeDescription(event) {
    const { posts } = this.props;
    this.props.dispatch(updateStatePosts({
      update_post: {
        description: event.target.value,
        title: posts.update_post.title,
        postit: posts.update_post.postit,
        picture: posts.update_post.picture,
        contentPost: posts.update_post.contentPost,
        category: posts.update_post.category,
        _id: posts.update_post._id
      }
    }));
  }

  handleChangePostIt(event, toggle) {
    this.setState({
      toggle: toggle
    });
  }

  updatePostIt(event) {
    const { posts, dispatch } = this.props;
    dispatch(updatePost({
      id: event,
      postit: this.state.toggle
    }));
    dispatch(loadPosts({ posts }));
  }

  handleChangePicture(event) {
    const { posts } = this.props;
    this.props.dispatch(updateStatePosts({
      update_post: {
        picture: event.target.value,
        description: posts.update_post.description,
        title: posts.update_post.title,
        postit: posts.update_post.postit,
        contentPost: posts.update_post.contentPost,
        category: posts.update_post.category,
        _id: posts.update_post._id
      }
    }));
  }

  updateCode(newCode) {
    const { posts } = this.props;
    this.props.dispatch(updateStatePosts({
      update_post: {
        contentPost: newCode,
        picture: posts.update_post.picture,
        description: posts.update_post.description,
        title: posts.update_post.title,
        postit: posts.update_post.postit,
        category: posts.update_post.category,
        _id: posts.update_post._id
      }
    }));
  }

  handleChangeCategory(event, index, value) {
    const { posts, dispatch } = this.props;
    dispatch(updateStatePosts({
      update_post: {
        category: value,
        contentPost: posts.update_post.contentPost,
        picture: posts.update_post.picture,
        description: posts.update_post.description,
        title: posts.update_post.title,
        postit: posts.update_post.postit,
        _id: posts.update_post._id
      }
    }));
  }

  render() {
    const { posts } = this.props;
    return (
      <Update
        post={posts.post}
        update_post={posts.update_post}
        onUpdate={this.onUpdate}
        id={this.state.id}
        editMode={this.state.editMode}
        borrarAlert={this.state.borrarAlert}
        onCancel={this.onCancel}
        onSave={this.onSave}
        changeTitle={this.handleChangeTitle}
        changePicture={this.handleChangePicture}
        updateCode={this.updateCode}
        changeCategory={this.handleChangeCategory}
        changePostIt={this.handleChangePostIt}
        updatePostIt={this.updatePostIt}
        changeDescription={this.handleChangeDescription}
        onDelete={this.onDelete}
        showAlert={this.showAlert}
        hideAlert={this.hideAlert}
      />
    );
  }
}

export default connect(state => ({
  posts: state.posts,
  common: state.common
}))(UpdateContainer);
