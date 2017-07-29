'use strict'

const mongoose = require('mongoose');
const app = require('./api/app');
const config = require('./api/config.js');

//Connectar con la base de datos
mongoose.connect(config.db, (err, res) => {
  if (err) {
    return console.log(`Error al conectar a la base de datos: ${err}`);
  }
  console.log(`Conexión con la base de datos establecida..`);
  app.listen(config.port, () => {
    console.log(`API REST corriendo en http://localhost:${config.port}`);
  });
});
