import React from 'react';
import Yo from './me.jpg';
import data from './home.json';
import Background from '../../../static/img/background.png';

require('./home.scss');

class Home extends React.Component {

  render() {
    console.log(data);
    return (
      <section className="section section-home">
        <section className="section section-about">
          <div className="row valign-wrapper">
            <div className="col m4">
              <div className="circle img-profile z-depth-2" style={{ backgroundImage: `url(${Yo})` }} />
            </div>
            <div className="col m8">
              <div className="section-about__content ">
                <p className="description">
                  Bienvenidx a mi locura mental.
                </p>
                <p className="description">
                  Soy desarrolladora FrontEnd, en los últimos años me he especializado en ReactJs junto con Redux.
                  <br />
                  En mi laboratorio mental siempre estoy experimentando buenas prácticas y intentando mantenerme al día para poder ofrecer un código limpio, optimizado y de calidad.
                  <br />
                  Adoro la autogestión y la libertad del trabajo con confianza desde cualquier parte del mundo.
                  <br />
                  Si quieres saber más sobre mí...
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-skills" style={{backgroundImage: `url(${Background})` }}>
          <div className="row valign-wrapper">
            {data.data.map(item => (
              <div className="col m2" key={item.name}>
                <div style={{ backgroundColor: `${item.color}` }}>
                  <label>{item.name}
                    <span className="bar z-depth-2" ></span>
                  </label>
                </div>
              </div>
              )
            )}
          </div>
        </section>
      </section>
    );
  }
}
export default Home;
