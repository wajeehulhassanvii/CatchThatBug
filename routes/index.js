
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Login Page' });
};

exports.showForgottenPage = function(req, res){
  res.render('passwordForgotten', { title: 'Password Forrgotten' });
};

exports.showSignupPage = function(req, res){
  res.render('signUp', { title: 'SignUp Page' });
};
