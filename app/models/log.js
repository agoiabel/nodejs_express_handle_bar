const mongoose = require('mongoose');
const Product = require('./product');

let Schema = mongoose.Schema;
let logSchema = Schema({
	slug: {
		type: String,
		// required: true
	},
	title: {
		type: String,
		required: true
	},
	products: [{
			type: Schema.Types.ObjectId,
			ref: Product
	}],
});

let Log = module.exports = mongoose.model('Log', logSchema);