const ProductModel = require('../models/product');

/**
 * Controller for all the external unsecured views
 * 
 * @type 
 */
var PagesController = {
	index: function (req, res) {
		res.render('index');
	},

	show: async function (req, res) {
		try {
			let product = await ProductModel.findOne({slug: req.params.product_slug}).populate('images');
			res.render('single-item', {product: product});
		} catch (err) {
			return next(err);
		}

		// res.render('single-item');
	}
};

module.exports = PagesController;