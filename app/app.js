// it's the first JS file that reaches users' request.
// the requests will be routed to decent modules as needed.

'use strict';
//* module
const express = require('express'); //@ import express module
const app = express(); //@ operate express.js
const PORT = 3000;

//* routing
const home = require('./src/routes/home'); //@ to route the requests (connect to the folder)

//* MVC (Model, View, Controller) - separate 'V'
//* setting app
//@ app.set(name, value): certain names can be used to configure the behavior of the server
//@ view engine: choose the engine to read ejs
app.set('views', './src/views');
app.set('view engine', 'ejs');

//@ app.use(path, callback): is used to set up middleware
app.use('/', home);

app.listen(PORT, () => {
  console.log('open server');
});

module.exports = app;
