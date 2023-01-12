//* C(Controller) - MVC

'use strict';
//@ res.render(path): send html/ejs files
const home = (req, res) => {
  res.render('home/index');
};

const login = (req, res) => {
  res.render('home/login');
};

//@ export the module as Object because we will export several functions
//@ if you write only key without value, it will automatically consider 'key value 'as a value
module.exports = {
  home,
  login,
};
