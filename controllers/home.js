const Survey = require('../models/Survey');
const Response = require('../models/Response');


/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

exports.userIndex = (req, res) => {
  res.render('userLayout', {
    title: 'Sliips - Salary Survey'
  });
};

// Post New Response
exports.userSurvey = (req, res, next) => {
	console.log('body: ' + JSON.stringify(req.body));
  var response = new Response({
    salary: req.body.salary,
    bonus: req.body.bonus
  });

  response.save(function(err){
    if(err){
      console.error(err);
    };
    res.send({status: 'ok'});
  });
};
