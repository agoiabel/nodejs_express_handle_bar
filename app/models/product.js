const mongoose = require('mongoose');


let Schema = mongoose.Schema;

let productSchema = Schema({
	product_category_id: {
		type: Number
		// required: true
	},
	slug: {
		type: String,
		// required: true
	},
	title: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	product_description: {
		type: String,
		required: true
	},
	external_link: {
		type: String,
		required: true
	},
	logs: [{
			type: Schema.Types.ObjectId,
			ref: "Log"
	}],
	images: [{
			type: Schema.Types.ObjectId,
			ref: "ProductImage"
	}]
});

let Product = module.exports = mongoose.model('Product', productSchema);