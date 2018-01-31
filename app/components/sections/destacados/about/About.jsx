import React from 'react';
import { Link } from 'react-router';
import Yo from './me.jpg';

const About = () => (
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
);

export default About;
