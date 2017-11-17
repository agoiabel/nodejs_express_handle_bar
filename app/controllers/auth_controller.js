let User = require('../models/user');
let bcrypt = require('bcrypt');
let session = require('express-session');

/**
 * Controller for all the external unsecured views
 * 
 * @type 
 */
var AuthController = {
	/**
	 * Handle the process of authenticating a user
	 * 
	 * @return        
	 */
	store: function (req, res) {

		if (! (req.body.email && req.body.password) ) {
			var err = new Error('Email and password are required');
			err.status = 401;
			return next(err);
		}

		User.findOne({ email: req.body.email })
			.exec(function (error, user) {
				if (error) {
					res.send('Email does not exists');
				}

				bcrypt.compare(req.body.password, user.password, function (error, result) {
					if (! result === true) {
						res.send('wrong password');						
					} else {
						//store in a session
						req.session.userId = user._id;
						res.redirect('/dashboard');		
					}
				});


			});
		//query the user,s table with the inputted email
			//if doesn't exists,  
		//check if
	},

	/**
	 * Handle the process of logging a user out
	 * 
	 * @param req 
	 * @param res 
	 * @return      
	 */
	logout: function (req, res) {
		if (req.session.userId) {
			req.session.userId.destroy(function (error) {
				if (error) { 
					return next(error);
				} else {
					return res.redirect('/');
				}
			});
		}
	}
};

module.exports = AuthController;