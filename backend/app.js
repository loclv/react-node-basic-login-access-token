var express = require('express');
var db = require('./db');
var cors = require('cors');

var UserController = require('./user/UserController');
var AuthController = require('./auth/AuthController');

var app = express();

app.use(cors());

app.use('/users', UserController);
app.use('/api/auth', AuthController);

module.exports = app;
