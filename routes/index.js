/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index');
};

exports.viewComplete = function(req, res){
  res.render('congrats');
}
