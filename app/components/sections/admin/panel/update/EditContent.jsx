import React from 'react';
import Editor from 'react-md-editor';
import marked from 'marked';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

require('../../../../../../node_modules/codemirror/lib/codemirror.css');

class EditContent extends React.Component {

  constructor(props) {
    super(props);

    this.changePicture = this.props.changePicture.bind(this);
    this.changeDescription = this.props.changeDescription.bind(this);
    this.changeTitle = this.props.changeTitle.bind(this);
    this.changeCategory = this.props.changeCategory.bind(this);
    this.updateCode = this.props.updateCode.bind(this);
  }

  render() {
    const { title, img, content, description, category, id } = this.props;
    const preview = marked(content);
    return (
      <div className="section-add">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-9">
                <div className="form-group">
                  <label htmlFor="title">Titulo:</label>
                  <input type="text" className="form-control" id="title" onChange={this.changeTitle} value={title} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="description">Mini descripción:</label>
                  <textarea className="form-control" rows="3" id="description" value={description} onChange={this.changeDescription} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="photo">Foto:</label>
                      <input type="file" className="form-control" id="photo" />
                      <img src={img} alt={title} className="thumbail" onChange={this.changePicture} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="editor col-md-6">
                <div className="form-group">
                  <label htmlFor="title">Post:</label>
                  <Editor value={content} onChange={this.updateCode} />
                </div>
              </div>
              <div
                className="preview col-md-6"
                dangerouslySetInnerHTML={{
                  __html: preview
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <div className="category">
                <DropDownMenu
                  value={category}
                  onChange={this.changeCategory}
                  openImmediately
                  autoWidth={false}
                >
                  <MenuItem
                    value="Vagine"
                    primaryText="Vagine"
                  />
                  <MenuItem
                    value="Angry"
                    primaryText="Angry"
                  />
                  <MenuItem
                    value="Developer"
                    primaryText="Developer"
                  />
                </DropDownMenu>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-12">
              <RaisedButton
                label="Publicar"
                primary
                fullWidth
                onClick={this.props.onSave.bind(this, id)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditContent;

EditContent.propTypes = {
  changeTitle: React.PropTypes.func.isRequired,
  changeCategory: React.PropTypes.func.isRequired,
  updateCode: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired,
  title: React.PropTypes.string,
  img: React.PropTypes.string,
  category: React.PropTypes.string
};

EditContent.defaultProps = {
  title: '',
  img: '',
  content: '',
  category: ''
};
