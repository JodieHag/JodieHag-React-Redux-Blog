import React from 'react';
//import Editor from 'react-md-editor';
import marked from 'marked';
// import DropDownMenu from 'material-ui/DropDownMenu';
// import MenuItem from 'material-ui/MenuItem';
// import Toggle from 'material-ui/Toggle';
// import RaisedButton from 'material-ui/RaisedButton';
// import CircularProgress from 'material-ui/CircularProgress';
// import RefreshIndicator from 'material-ui/RefreshIndicator';


require('../../../../../../node_modules/codemirror/lib/codemirror.css');

class Add extends React.Component {

  constructor(props) {
    super(props);

    this.onRefreshAdd = this.props.onRefreshAdd.bind(this);
    this.changeTitle = this.props.changeTitle.bind(this);
    this.changeDescription = this.props.changeDescription.bind(this);
    this.changeCategory = this.props.changeCategory.bind(this);
    this.changePostIt = this.props.changePostIt.bind(this);
    this.updateCode = this.props.updateCode.bind(this);
    this.onSave = this.props.onSave.bind(this);
  }

  render() {
    const { title, img, content, category, postIt, updating, added, status } = this.props;
    const preview = marked(content);
    const categories = status.categories;
    const style = {
      container: {
        position: 'relative'
      },
      refresh: {
        display: 'inline-block',
        position: 'relative',
        left: '0',
        top: '0'
      }
    };
    // return (
    //   <div className="section-add">
    //     <hr />
    //     { added ?
    //       <div className="text-center" style={style.container}>
    //         <h2 className="text-center">¡Nuevo post añadido!</h2>
    //         <RefreshIndicator
    //           percentage={100}
    //           size={70}
    //           color="purple"
    //           status="ready"
    //           className="pointer"
    //           top={0}
    //           onClick={this.onRefreshAdd}
    //           style={style.refresh}
    //         />
    //       </div>
    //       :
    //       (updating ?
    //         <CircularProgress size={60} thickness={7} />
    //         :
    //         <div className="row">
    //           <div className="col-md-8 col-md-offset-2">
    //             <h3>
    //               Añade tu nuevo post
    //             </h3>
    //             <div className="row">
    //               <div className="col-md-9">
    //                 <div className="form-group">
    //                   <label htmlFor="title">Titulo:</label>
    //                   <input type="text" className="form-control" id="title" onChange={this.changeTitle} />
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="row">
    //               <div className="col-md-6">
    //                 <div className="form-group">
    //                   <label htmlFor="description">Mini descripción:</label>
    //                   <textarea className="form-control" rows="3" id="description" placeholder="Añade tu descripción aquí" onChange={this.changeDescription} />
    //                 </div>
    //               </div>
    //               <div className="col-md-6">
    //                 <div className="row">
    //                   <div className="col-md-12">
    //                     <div className="form-group">
    //                       <label htmlFor="photo">Foto:</label>
    //                       <input type="file" className="form-control" id="photo" />
    //                       <img src={img} alt={title} className="thumbail" />
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="row">
    //                   <div className="col-md-12">
    //                     <div className="postit">
    //                       <Toggle
    //                         toggled={postIt}
    //                         onToggle={this.changePostIt}
    //                         labelPosition="right"
    //                         label="Publicar / Ocultar"
    //                       />
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="row">
    //               <div className="editor col-md-6">
    //                 <div className="form-group">
    //                   <label htmlFor="title">Post:</label>
    //                   <Editor value={content} onChange={this.updateCode} />
    //                 </div>
    //               </div>
    //               <div
    //                 className="preview col-md-6"
    //                 dangerouslySetInnerHTML={{
    //                   __html: preview
    //                 }}
    //               />
    //             </div>
    //           </div>
    //           <div className="row">
    //             <div className="col-md-4 col-md-offset-4 text-center">
    //               <div className="category">
    //                 <DropDownMenu
    //                   value={category}
    //                   onChange={this.changeCategory}
    //                   openImmediately
    //                   autoWidth={false}
    //                 >
    //                   {categories.map(categorie =>
    //                     (
    //                       <MenuItem
    //                         value={categorie}
    //                         primaryText={categorie}
    //                       />
    //                     )
    //                     )}
    //                 </DropDownMenu>
    //               </div>
    //             </div>
    //           </div>
    //           <hr />
    //           <div className="row">
    //             <div className="col-md-12">
    //               <RaisedButton
    //                 label="Publicar"
    //                 primary
    //                 fullWidth
    //                 onClick={this.onSave}
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       )
    //     }
    //   </div>
    // );

    return (
      <p>Añadir cosas</p>
    );
  }
}

export default Add;

Add.propTypes = {
  // changeTitle: React.PropTypes.func.isRequired,
  // changeDescription: React.PropTypes.func.isRequired,
  // changeCategory: React.PropTypes.func.isRequired,
  // changePostIt: React.PropTypes.func.isRequired,
  // updateCode: React.PropTypes.func.isRequired,
  // onSave: React.PropTypes.func.isRequired,
  // onRefreshAdd: React.PropTypes.func.isRequired,
  // title: React.PropTypes.string,
  // img: React.PropTypes.string,
  // content: React.PropTypes.string,
  // category: React.PropTypes.string,
  // postIt: React.PropTypes.bool,
  // updating: React.PropTypes.bool,
  // added: React.PropTypes.bool
};

Add.defaultProps = {
  title: '',
  img: '',
  content: '',
  category: '',
  postIt: true,
  updating: false,
  added: false
};
