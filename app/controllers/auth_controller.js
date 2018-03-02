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
	store: async (req, res) => {

		if (! (req.body.email && req.body.password) ) {
			var err = new Error('Email and password are required');
			err.status = 401;
			return next(err);
		}

		try	{
			const user = await User.findOne({ email: req.body.email })

			bcrypt.compare(req.body.password, user.password, function (error, result) {
				if (! result === true) {
					res.send('wrong password');						
				} else {
					//store in a session
					req.session.userId = user._id;
					res.redirect('/dashboard');		
				}
			});

		} catch (err) {
			var err = new Error('Email does not exists');
			err.status = 401;
			return next(err);
		}

	},

	/**
	 * Handle the process of logging a user out
	 * 
	 * @param req 
	 * @param res 
	 * @return      
	 */
	logout: async function (req, res) {
		if (req.session.userId) {
			try {
				let session = await req.session.userId.destroy();
				return res.redirect('/');
			} catch (err) {
				return next(error);				
			}
		}
	}

};

module.exports = AuthController;