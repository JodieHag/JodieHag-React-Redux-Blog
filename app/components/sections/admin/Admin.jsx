import React from 'react';
import PanelContainer from './panel/PanelContainer';

class Admin extends React.Component {

  render() {
    return (
      <div className="main main-raised">
        <div className="section">
          <div className="section-admin">
            <div className="container">
              <PanelContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
