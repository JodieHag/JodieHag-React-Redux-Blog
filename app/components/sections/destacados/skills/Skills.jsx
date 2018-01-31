import React from 'react';
import { Link } from 'react-router';
import ReactIcon from './react-only.png';
import ReduxIcon from './redux-only.png';
import WebpackIcon from './webpack.png';
import SassIcon from './sass.png';
import BabelIcon from './babel.png';
import JestIcon from './jest.png';
import Background from '../../../../static/img/background.png';

require('./skills.scss');

const Skills = () => (
  <section className="section-skills">
    <div className="row valign-wrapper">
      <div className="col m2">
        <div className="img-skills scale-in" style={{ backgroundImage: `url(${ReactIcon})` }} />
      </div>
      <div className="col m2">
        <div className="img-skills scale-in" style={{ backgroundImage: `url(${ReduxIcon})` }} />
      </div>
      <div className="col m2">
        <div className="img-skills scale-in" style={{ backgroundImage: `url(${WebpackIcon})` }} />
      </div>
      <div className="col m2">
        <div className="img-skills" style={{ backgroundImage: `url(${BabelIcon})` }} />
      </div>
      <div className="col m2">
        <div className="img-skills" style={{ backgroundImage: `url(${SassIcon})` }} />
      </div>
      <div className="col m2">
        <div className="img-skills" style={{ backgroundImage: `url(${JestIcon})` }} />
      </div>
    </div>
    <div className="valign-wrapper" style={{backgroundImage: `url(${Background})`, backgroundColor: '#583071' }}>
      <Link to="/" className="waves-effect waves-light btn btn-large btn-home white primary">
        ¿Quieres aprender React?
      </Link>
      <Link to="/" className="waves-effect waves-light btn btn-large btn-home white primary">
        ¿Quieres ver mis trabajos?
      </Link>
    </div>
  </section>
);

export default Skills;
