import React from 'react';
import { Link } from 'react-router';
import Background from '../../../../static/img/background.png';
import Remoto from './remoto.png';
import Creativa from './creativa.png';
import Productiva from './productiva.png';

require('./services.scss');

const Services = () => (
  <section className="section-service">
    <div className="row valign-wrapper">
      <div className="col m4">
        <div className="img-servicios" style={{ backgroundImage: `url(${Remoto})` }} />
        <div className="section-service__content">
          <h5 className="center-align title">Remoto</h5>
          <p className="center-align description">Por norma trabajo en remoto, a veces desde aquí, otras desde allá... ¡Para inicios de proyectos o reuniones importantes e incluso para dar clases, acudo a donde haga falta!</p>
        </div>
      </div>
      <div className="col m4">
        <div className="img-servicios" style={{ backgroundImage: `url(${Creativa})` }} />
        <div className="section-service__content">
          <h5 className="center-align title">¿Diseñar? ¿Maquetar? ¿Programar?</h5>
          <p className="center-align description">¡Todo! Tras más de 6 años de experiencia, diseño, maqueto y programo, aunque mi especialidad es.. ¡El mundo Reactivo!</p>
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
  </section>
);

export default Services;
