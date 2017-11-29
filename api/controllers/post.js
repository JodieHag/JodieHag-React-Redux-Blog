'use strict'

const Post = require('../models/post');

function getPost (req, res) {
  let url = req.params.url;

  Post.find({url: url}, (err, post) => {
    if (err) rest.status(500).send({ message: `Error al realizar la petición: ${err}` });
    if (!post) return res.status(404).send({ message: `El post no existe` });

    res.status(200).send({ post });
  });
}

function getPosts (req, res) {
  Post.find({}, (err, post) => {
    if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}`});
    if (!post) return res.status(404).send({ message: `No existen posts.` });
  res.status(200).send({ post });
  });
}

function savePost(req, res) {
  console.log('POST /api/post');
  console.log(req.body);

  let post = new Post();
  post.title = req.body.title;
  post.url = req.body.url;
  post.picture = req.body.picture;
  post.description = req.body.description;
  post.contentPost = req.body.contentPost;
  post.category = req.body.category;
  post.date = req.body.date;
  post.postit = req.body.postit;
  post.likes = req.body.likes;
  post.views = req.body.views;

  post.save((err, postStore) => {
    if (err) res.status(500).send({message: `Error al guardar el post: ${err}.`});

    res.status(200).send({post: postStore});

  });
}

function updatePost (req, res) {
  let postId = req.params.postId;
  let update = req.body;

  Post.findByIdAndUpdate(postId, update, (err, postUpdate) => {
    if (err) res.status(500).send({message: `Error al actualizar el post: ${err}`});

    res.status(200).send({post: postUpdate });
  });
}

function deletePost (req, res) {
  let postId = req.params.postId;

  Post.findById(postId, (err, post) => {
    if (err) res.status(500).send({message: `Error al borrar el post: ${err}`});

    post.remove(err => {
      if (err) res.status(500).send({message: `Error al borrar el post: ${err}`});
      res.status(200).send({message: `El post ha sido borrado.`});
    })
  });
}

module.exports = {
  getPosts,
  getPost,
  savePost,
  updatePost,
  deletePost
};
