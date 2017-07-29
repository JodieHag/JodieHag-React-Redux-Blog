import React from 'react';
import { connect } from 'react-redux';

import { addPost } from '../../../../../actions/blogActions';
import Add from './Add';

class AddContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      img: '/img/image_blank.jpg',
      code: '# Your post in here',
      category: 'Vagine',
      postit: true
    };
    this.updateCode = this.updateCode.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangePostIt = this.handleChangePostIt.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  handleChangeTitle(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleChangeDescription(event) {
    this.setState({
      description: event.target.value
    });
  }

  handleChangePostIt(event, toggle) {
    this.setState({
      postit: toggle
    });
  }

  handleChangePicture(event) {
    this.setState({
      picture: event.target.value
    });
  }
  updateCode(newCode) {
    this.setState({
      code: newCode
    });
  }
  handleChangeCategory(event, index, value) {
    this.setState({
      category: value
    });
  }

  onSave() {
    this.props.dispatch(addPost({
      title: this.state.title,
      description: this.state.description,
      contentPost: this.state.code,
      picture: this.state.img,
      category: this.state.category,
      postit: this.state.postit
    }));
  }
  render() {
    const { posts } = this.props;
    const { title, description, img, code, category, postit } = this.state;
    return (
      <Add
        post={posts.post}
        status={posts}
        onSave={this.onSave}
        changeTitle={this.handleChangeTitle}
        updateCode={this.updateCode}
        changeCategory={this.handleChangeCategory}
        changePostIt={this.handleChangePostIt}
        title={title}
        description={description}
        img={img}
        content={code}
        category={category}
        postIt={postit}
      />
    );
  }
}

export default connect(state => ({
  posts: state.posts
}))(AddContainer);
