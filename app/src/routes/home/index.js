'use strict';
const express = require('express');

//@ express.Router(): is used to cerate a new router object to handle requests
//@ returns: new Router Object
const router = express.Router();
const control = require('./home.ctrl');

//@ response with callback when it receives request from '/' path from browser
//! callback() is the C(controller) of MVC
router.get('/', control.home);

//@ slash(/) means root. so '/login' means go to login from the root page
router.get('/login', control.login);

//@ exports the module to use in other modules
module.exports = router;
