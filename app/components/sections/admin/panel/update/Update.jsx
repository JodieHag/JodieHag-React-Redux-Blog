import React from 'react';
import Toggle from 'material-ui/Toggle';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import EditContent from './EditContent';

require('../../../../../../node_modules/codemirror/lib/codemirror.css');

const customContentStyle = {
  width: '80%'
};

class Update extends React.Component {

  constructor(props) {
    super(props);

    this.changeTitle = this.props.changeTitle.bind(this);
    this.changePicture = this.props.changePicture.bind(this);
    this.changeDescription = this.props.changeDescription.bind(this);
    this.changeCategory = this.props.changeCategory.bind(this);
    this.updateCode = this.props.updateCode.bind(this);
    this.onSave = this.props.onSave.bind(this);
    this.onCancel = this.props.onCancel.bind(this);
    this.showAlert = this.props.showAlert.bind(this);
    this.hideAlert = this.props.hideAlert.bind(this);
  }

  render() {
    const { post, editMode, update_post, borrarAlert, updated } = this.props;
    return (
      <div className="section-update">
        <hr />
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <h3>
              Modifica los posts
            </h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <Table
            height='400px'
            fixedHeader
            fixedFooter
          >
            <TableHeader
            >
              <TableRow>
                <TableHeaderColumn tooltip="El título">Título</TableHeaderColumn>
                <TableHeaderColumn tooltip="Publicado/Privado">Estado</TableHeaderColumn>
                <TableHeaderColumn tooltip="Editar">Editar</TableHeaderColumn>
                <TableHeaderColumn tooltip="Borrar">Borrar</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              deselectOnClickaway
              showRowHover
              stripedRows={false}
            >
              {post.map((item, index) => (
                <TableRow key={item._id} disabled={!updated}>
                  <TableRowColumn>{item.title}</TableRowColumn>
                  <TableRowColumn>
                    <Toggle
                      toggled={item.postit}
                      onClick={this.props.updatePostIt.bind(this, item._id)}
                      onToggle={this.props.changePostIt.bind(this)}
                      labelPosition="right"
                      label=""
                    />
                  </TableRowColumn>
                  <TableRowColumn>
                    <RaisedButton
                      label="Modificar"
                      primary
                      fullWidth
                      onClick={this.props.onUpdate.bind(this, item.url)}
                    />
                  </TableRowColumn>
                  <TableRowColumn>
                    <RaisedButton
                      label="Eliminar"
                      secondary
                      fullWidth
                      onClick={this.props.showAlert.bind(this, item.url)}
                    />
                  </TableRowColumn>
                </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
        <Dialog
          title="Edita tu post"
          modal={false}
          open={editMode}
          autoScrollBodyContent
          contentStyle={customContentStyle}
          onRequestClose={this.onCancel}
        >
          <EditContent
            title={update_post.title}
            id={update_post._id}
            description={update_post.description}
            content={update_post.contentPost}
            picture={update_post.picture}
            category={update_post.category}
            changeTitle={this.changeTitle}
            changeDescription={this.changeDescription}
            changeCategory={this.changeCategory}
            changePicture={this.changePicture}
            updateCode={this.updateCode}
            onSave={this.onSave}
          />
        </Dialog>
        <Dialog
          actions={[
            <RaisedButton
              label="Cancel"
              primary
              onTouchTap={this.hideAlert}
            />,
            <RaisedButton
              label="Borrar"
              secondary
              onTouchTap={this.props.onDelete.bind(this, update_post._id)}
            />
          ]}
          modal={false}
          open={borrarAlert}
          onRequestClose={this.hideAlert}
        >
          Borrar?
        </Dialog>
      </div>
    );
  }
}

export default Update;
