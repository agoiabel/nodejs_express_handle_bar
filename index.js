const express = require('express');
const app = express();

const hbs = require('hbs');
const blogEngine = require('./blog');

/**
 * set view template
 */
app.set('view engine', 'html');
app.engine('html', hbs.__express);
	
/**
 * set the public folder as the static assets folders
 */
app.use(express.static('public'));

/**
 * first stepof template without any templating
 * 
 * @param req  
 * @param  res) 
 * @return 
 */
app.get('/', function (req, res) {
	res.render('index');
});
app.get('/contact', function (req, res) {
	res.render('contact');
});
app.get('/beauty-expert', function (req, res) {
	res.render('beauty-expert');
});
app.get('/make-up', function (req, res) {
	res.render('make-up');
});
app.get('/skin-care', function (req, res) {
	res.render('skin-care');
});

var port = process.env.PORT || 3000;

app.listen(port);