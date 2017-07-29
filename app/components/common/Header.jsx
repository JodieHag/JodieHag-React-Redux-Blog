import React from 'react';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header header-filtrer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="brand">
                <h1>Jodie Hag</h1>
                <h3>FrontEnd Developer Womb</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
