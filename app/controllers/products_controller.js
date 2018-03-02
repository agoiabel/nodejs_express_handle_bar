const ProductModel = require('../models/product');
const ProductImageModel = require('../models/product_image');

/**
 * Controller for all the external unsecured views
 * 
 * @type 
 */
var ProductsController = {

	/**
	 * Display view to show all products
	 * 
	 * @param  req 
	 * @param  res 
	 * @return     
	 */
	index: async (req, res) => {
		let products = await ProductModel.find({});

		res.render('all-product', {products: products});
	},

	/**
	 * display view to create new product
	 * @param  req 
	 * @param  res 
	 * @return     
	 */
	create: (req, res) => {
		res.render('add-new-product');
	},

	/**
	 * Store new product
	 * 
	 * @param req 
	 * @param res 
	 * @return     
	 */
	store: async (req, res) => {
		try	{
			let product = await ProductModel.create(req.body);
			let createdProduct = await ProductModel.findOne({_id: product._id});
			createdProduct.slug = createdProduct._id +'_'+ createdProduct.title.split(' ').join('_');
			let updatedProduct = await createdProduct.save();
			res.redirect('/add-image-to/'+updatedProduct.slug);		
		} catch (err) {
			next(err);
		}
	},

	/**
	 * display view to show images
	 * 
	 * @param req 
	 * @param  res 
	 * @return     
	 */
	upload_image: (req, res) => {
		res.render('upload_image', {product_slug: req.params.product_slug});
	},

	/**
	 * Upload product images
	 * 
	 * @param  req
	 * @param  res 
	 * @return 
	 */
	store_upload_image: async (req, res) => {
	    
	    var file = req.files.file;  // here is the field name of the form
		
	    var updateBasePath = 'public/uploads/';
	    var dataBasePath = '../uploads/';

	    var fileName = new Date() + getTime() + Math.random()+'.png';
	    var uploadFilePath = updateBasePath+fileName;
	    var databaseFilePath = dataBasePath+fileName;

	    try {
	    	file.mv(uploadFilePath);	

			let newImage = new ProductImageModel({
				image_path: databaseFilePath
			});

			/**
			 * Store product in image
			 * @type 
			 */
			let product = await ProductModel.findOne({slug: req.body.product_slug});
			newImage.product = product;
			await newImage.save();
		
			/**
			 * Push image to the product image array
			 */
			product.images.push(newImage);
			await product.save();

			res.send(201).end();
	    } catch (err) {
			return console.dir(error);
	    }
	},

	/**
	 * Show individual product that will be use in frontend
	 * 
	 * @param  req 
	 * @param  res 
	 * @return     
	 */
	// show: async (req, res) => {
	// 	try {
	// 		let product = await ProductModel.findOne({slug: req.params.product_slug});
	// 		res.render('single-item', {product: product});
	// 	} catch (err) {
	// 		next(err);
	// 	}
	// }

};

module.exports = ProductsController;