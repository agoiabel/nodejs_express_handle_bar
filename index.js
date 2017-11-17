const express = require('express');
const app = express();

/**
 * specify all express configurations
 * 
 * @type 
 */
let expressConfig = require('./app/config/expressConfig')(app);

/**
 * Specify database connections
 * 
 * @type 
 */
let db = require('./app/config/database').connectDB();

/**
 * specify the application,s routes
 * 
 * @type 
 */
let routes = require('./app/config/route.js')(app);
	
/**
 * Start application,s server 
 * 
 * @type 
 */
var port = process.env.PORT || 5000;
app.listen(port);