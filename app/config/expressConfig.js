const express = require('express');
const hbs = require('hbs');
const session = require('express-session');
const bodyParser = require('body-parser');

/**
 * This is the file were all express configuarations are declared
 * 
 * @param  app 
 * @return 
 */
module.exports = function (app) {
	/**
	 * Use for handling session
	 * 
	 * @type 
	 */
	app.use(session({
		secret: 'agoi abel',
		resave: true,
		saveUninitialized: false
	}));

	/**
	 * Use for handling body parsing
	 */
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	/**
	 * Use to set the static / asset folder
	 */
	app.use(express.static('public'));

	/**
	 * Use the set the views template which uses handlebar
	 */
	app.set('view engine', 'html');
	app.engine('html', hbs.__express);
}