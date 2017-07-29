import React from 'react';
import SidebarMenuContainer from './menu/SidebarMenuContainer';
import AddContainer from './add/AddContainer';
import UpdateContainer from './update/UpdateContainer';

class Panel extends React.Component {

  render() {
    const { status } = this.props;
    return (
      <div className="section-panel">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SidebarMenuContainer
                adding={status.adding}
                deleting={status.deleting}
                updatingPost={status.updatingPost}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {status.adding ?
                <AddContainer
                  adding={status.adding}
                />
              :
                <div className="updating">
                  {status.updatingPost ?
                    <UpdateContainer
                      adding={status.adding}
                      posts={status}
                    />
                    :
                    null
                  }
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Panel;
