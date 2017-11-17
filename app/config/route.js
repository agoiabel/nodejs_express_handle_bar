let middleware = require('../middlewares/index');

let PagesController = require('../controllers/pages_controller');
let UsersController = require('../controllers/users_controller');
let AuthController = require('../controllers/auth_controller');

/**
 * Route declarations
 * 
 * @param  app 
 * @return
 */
module.exports = function (app) {	
	app.get('/', PagesController.index);
	app.get('/single-item', PagesController.show);

	app.get('/create-user', UsersController.create);
	app.post('/login-store', AuthController.store);
	app.get('/logout', AuthController.logout);

	app.get('/dashboard', middleware.requiresLogin, UsersController.dashboard);


	/**
	 * Handle 404 error
	 * 
	 * @return 
	 */
	app.use(function (req, res, next) {
		const err = new Error('Not Found');
		err.status = 404;
		next(err);
	});

	/**
	 * General error handler
	 * 
	 * @param  err, req, res, next
	 * @return 
	 */
	app.use(function (err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: {}
		});

	});

}