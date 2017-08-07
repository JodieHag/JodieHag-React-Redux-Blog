import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import slugify from 'slugify';
import { addPost, updateStatePosts } from '../../../../../actions/blogActions';
import Add from './Add';

class AddContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      img: '/img/image_blank.jpg',
      code: '# Your post in here',
      category: 'Developer',
      postit: true,
      url: ''
    };

    this.onRefreshAdd = this.onRefreshAdd.bind(this);
    this.updateCode = this.updateCode.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangePostIt = this.handleChangePostIt.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onRefreshAdd() {
    const { dispatch } = this.props;

    dispatch(updateStatePosts({ added: false }));
  }
  handleChangeTitle(event) {
    const slugy = slugify(event.target.value);
    this.setState({
      title: event.target.value,
      url: slugy
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
      postit: this.state.postit,
      url: this.state.url,
      date: new Date()
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
        changeDescription={this.handleChangeDescription}
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
        updating={posts.updating}
        added={posts.added}
        onRefreshAdd={this.onRefreshAdd}
      />
    );
  }
}

export default connect(state => ({
  posts: state.posts
}))(AddContainer);
