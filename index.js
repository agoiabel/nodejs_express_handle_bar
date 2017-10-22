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
	res.render('index', {
		title: ' My blog',
		entries: blogEngine.getBlogEntries()
	});
});
app.get('/about', function (req, res) {
	res.render('about');
});
app.get('/article/:id', function (req, res) {
	res.render('article', {
		article: blogEngine.getBlogEntry(req.params.id)
	});
});

app.listen(3000);