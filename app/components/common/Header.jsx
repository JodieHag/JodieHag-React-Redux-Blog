import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <div className="header header-filtrer">
        <div className="container">
          <div id="space">
            <div className="stars" />
            <div className="stars" />
            <div className="stars" />
            <div className="stars" />
            <div className="stars" />
            <div className="stars" />
            <div className="stars" />
          </div>
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="brand">
                <h1>Jodie Hag</h1>
                <h3>FrontEnd Developer Freelance</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
