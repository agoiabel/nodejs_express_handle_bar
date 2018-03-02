let middleware = require('../middlewares/index');

let PagesController = require('../controllers/pages_controller');
let UsersController = require('../controllers/users_controller');
let AuthController = require('../controllers/auth_controller');
let ProductsController = require('../controllers/products_controller');


/**
 * Route declarations
 * 
 * @param  app 
 * @return
 */
module.exports = function (app) {	
	app.get('/', PagesController.index);
	app.get('/single-item/:product_slug', PagesController.show);

	app.get('/create-user', UsersController.create);
	app.post('/login-store', AuthController.store);
	app.get('/logout', AuthController.logout);

	app.get('/dashboard', middleware.requiresLogin, UsersController.dashboard);
	app.get('/add-new-product', middleware.requiresLogin, ProductsController.create);
	
	app.post('/store-new-product', middleware.requiresLogin, ProductsController.store);
	app.get('/add-image-to/:product_slug', middleware.requiresLogin, ProductsController.upload_image);
	app.post('/store-product-image', middleware.requiresLogin, ProductsController.store_upload_image);

	app.get('/product/index', middleware.requiresLogin, ProductsController.index);

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