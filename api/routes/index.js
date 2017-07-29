'use strict'

const express = require('express');

const api = express.Router();
const PostCntrls = require('../controllers/post');
const UserCntrls = require('../controllers/users');

api.get('/post', PostCntrls.getPosts);
api.get('/post/:postId', PostCntrls.getPost);
api.post('/post', PostCntrls.savePost);
api.put('/post/:postId', PostCntrls.updatePost);
api.delete('/post/:postId', PostCntrls.deletePost);

api.get('/user', UserCntrls.getUsers);
api.get('/user/:userId', UserCntrls.getUser);
api.post('/user', UserCntrls.saveUser);
api.put('/user/:userId', UserCntrls.updateUser);
api.delete('/user/:userId', UserCntrls.deleteUser);

module.exports = api;
