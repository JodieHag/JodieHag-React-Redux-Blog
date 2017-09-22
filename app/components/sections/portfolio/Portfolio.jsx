import React from 'react';

class Portfolio extends React.Component {
  render() {
    return (
      <div className="main main-raised">
        <div className="section">
          <div className="section-posts">
            <div className="container">
              <div className="profile-content">
                <div className="container">
                  <div className="description text-center">
                    <p>Me dedico a inventar, crear, dar forma y materializar lo que se te ocurra.</p>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="profile-tabs">
                        <div className="description text-center">
                          <p> Puedes ver mis trabajos en la web de mi Studio</p>
                          <a href="http://www.jelly-brains.com" target="_blank">
                            <img src="/img/clients/jelly.png" alt="JellyBrains" className="jellybrains" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="profile-tabs">
                        <div className="description text-center">
                          <h3>Principales clientes</h3>
                          <div className="clients">
                            <a href="https://www.fiveisblue.com/" rel="noopener noreferrer" target="_blank">
                              <img src="/img/clients/fiveisblue.jpg" alt="Five is Blue" />
                            </a>
                            <a href="https://doubleyou.com/" rel="noopener noreferrer" target="_blank">
                              <img src="/img/clients/doubleyou.jpg" alt="DoubleYou" />
                            </a>
                            <a href="https://berepublic.com/" rel="noopener noreferrer" target="_blank">
                              <img src="/img/clients/berepublic2.svg" alt="BeRepublic" />
                            </a>
                            <a href="http://market-control.com/" rel="noopener noreferrer" target="_blank">
                              <img src="/img/clients/marketcontrol.png" alt="MarketControl" />
                            </a>
                            <a href="http://www.cofounderslab.com/" rel="noopener noreferrer" target="_blank">
                              <img src="/img/clients/cofounders.png" alt="CofoundersLab" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="profile-tabs">
                        <div className="description text-center">
                          <br />
                          <p>Gracias a mis clientes he podido trabajar con importantes marcas y así hacer que mi trabajo llegue a muchos usuarios.</p>
                          { this.props.children }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;

Portfolio.propTypes = {
};

Portfolio.defaultProps = {
};
