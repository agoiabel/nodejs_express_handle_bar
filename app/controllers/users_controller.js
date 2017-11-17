UserModel = require('../models/user');
bcrypt = require('bcrypt');

/**
 * Controller for all the external unsecured views
 * 
 * @type 
 */
var UsersController = {
	/**
	 * Handle the process of creating new user
	 * 
	 * @param  req 
	 * @param  res 
	 * @return     
	 */
	create: function (req, res) {
		
		var userData = {
			firstname: 'Abel',
			lastname: 'Agoi',
			email: 'agoiabeladeyemi@gmail.com',
			password: 'abc',
			phonenumber: '080232328993'			
		};

		UserModel.create(userData, function (error, user) {
			if (error) {
				console.dir(error);
				return;
			}
			console.dir('user created successfully');
			console.dir(user);
		});

	},

	/**
	 * Handle the view to show dashboard
	 * 
	 * @param  req
	 * @param  res
	 * @return    
	 */
	dashboard: function (req, res) {
		res.render('dashboard');
	}
};

module.exports = UsersController;