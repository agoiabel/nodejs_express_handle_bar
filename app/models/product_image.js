const mongoose = require('mongoose');
const Product = require('./product');

let Schema = mongoose.Schema;
let productImageSchema = Schema({
	image_path: {
		type: String,
		required: true
	},
	product: [{
			type: Schema.Types.ObjectId,
			ref: Product
	}],
});

let ProductImage = module.exports = mongoose.model('ProductImage', productImageSchema);