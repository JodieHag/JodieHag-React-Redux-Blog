import React from 'react';
import { Link } from 'react-router';
import Yo from './me.jpg';
import data from './home.json';
import Background from '../../../static/img/background.png';
import Remoto from './remoto.png';
import Creativa from './creativa.png';
import Productiva from './productiva.png';

require('./home.scss');

class Home extends React.Component {

  render() {
    console.log(data);
    return (
      <section className="section section-home">
        <section className="section section-service">
          <div className="row valign-wrapper">
            <div className="col m4">
              <div className="img-servicios" style={{ backgroundImage: `url(${Remoto})` }} />
              <div className="section-service__content">
                <h5 className="center-align title">Remoto</h5>
                <p className="center-align description">Por norma trabajo en remoto, a veces desde aquí, otras desde allá... ¡Para inicios de proyectos o reuniones importantes acudo a donde haga falta!</p>
              </div>
            </div>
            <div className="col m4">
              <div className="img-servicios" style={{ backgroundImage: `url(${Creativa})` }} />
              <div className="section-service__content">
                <h5 className="center-align title">¿Diseñar? ¿Maquetar? ¿Programar?</h5>
                <p className="center-align description">¡Todo! Tras más de 6 años de experiencia, diseño, maqueto y programo, aunque mi especialidad es.. ¡El mundo Radioactivo!</p>
              </div>
            </div>
            <div className="col m4">
              <div className="img-servicios" style={{ backgroundImage: `url(${Productiva})` }} />
              <div className="section-service__content">
                <h5 className="center-align title">El tiempo importa</h5>
                <p className="center-align description">Estimaciones, plazos de entrega, periodos de QA... Todo en esta vida se basa en el tiempo, y el tiempo vuela, me tomo muy enserio mi productividad, optimizar y código de calidad es mi prioridad.</p>
              </div>
            </div>
          </div>
          <div className="row valign-wrapper" style={{backgroundImage: `url(${Background})`, backgroundColor: 'coral' }}>
            <Link to="/" className="waves-effect waves-light btn">fsdfds</Link>
          </div>
        </section>
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
