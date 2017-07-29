'use strict'

const User = require('../models/users');

function getUser (req, res) {
  let userId = req.params.userId;

  User.findById(userId, (err, user) => {
    if (err) rest.status(500).send({ message: `Error al realizar la petición: ${err}` });
    if (!user) return res.status(404).send({ message: `El usuario no existe` });

    res.status(200).send({ user });
  });
}

function getUsers (req, res) {
  User.find({}, (err, user) => {
    if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}`});
    if (!user) return res.status(404).send({ message: `No existen usuarios.` });
  res.status(200).send({ user });
  });
}

function saveUser(req, res) {
  console.log('POST /api/user');
  console.log(req.body);

  let user = new User();
  user.user = req.body.user;
  user.password = req.body.password;
  user.name = req.body.name;
  user.email = req.body.email;
  user.genero = req.body.genero;
  user.date = req.body.date;
  user.age = req.body.age;

  user.save((err, userStore) =>{
    if (err) res.status(500).send({message: `Error al guardar el usuario: ${err}.`});

    res.status(200).send({user: userStore});

  });
}

function updateUser (req, res) {
  let userId = req.params.userId;
  let update = req.body;

  User.findByIdAndUpdate(userId, update, (err, userUpdate) => {
    if (err) res.status(500).send({message: `Error al actualizar el usuario: ${err}`});

    res.status(200).send({user: userUpdate });
  });
}

function deleteUser (req, res) {
  let userId = req.params.userId;

  User.findById(userId, (err, user) => {
    if (err) res.status(500).send({message: `Error al borrar el usuario: ${err}`});

    user.remove(err => {
      if (err) res.status(500).send({message: `Error al borrar el usuario: ${err}`});
      res.status(200).send({message: `El usuario ha sido borrado.`});
    })
  });
}

module.exports = {
  getUsers,
  getUser,
  saveUser,
  updateUser,
  deleteUser
};
