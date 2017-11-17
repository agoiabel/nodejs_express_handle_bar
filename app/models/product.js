let mongoose = require('mongoose');

let productSchema = mongoose.Schema({
	product_category_id: {
		type: Integer,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	price: {
		type: String,
		required: true
	},
	crop_image_path: {
		type: String,
		required: true
	},
	uncropped_image_path: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	logs: {
		type: Object,
		required: false
	},
	reviews: {
		type: Object,
		required: false
	}
});

let Product = module.exports = mongoose.model('Product', productSchema);