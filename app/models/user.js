let mongoose = require('mongoose');
let bcrypt = require('bcrypt');

let userSchema = mongoose.Schema({
	firstname: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	phonenumber: {
		type: String,
		required: true
	}
});

userSchema.statics.authenticate = function (email, password, callback) {
	User.findOne({ email: email })
		.exec(function (error, user) {
			return user;
			
			// if (error) {
			// 	return callback(error);
			// } else if (!user) {
			// 	var err = new Error('User not found');
			// 	err.status = 401;
			// 	return callback(err);
			// }
			// bcrypt.compare(password, user.password, function (error, result) {
			// 	if (result === true) {
			// 		return callback(null, user);
			// 	} else {
			// 		return callback();
			// 	}
			// });

		});
}

userSchema.pre('save', function (next) {
	var user = this;
	bcrypt.hash(user.password, 10, function (err, hash) {
		if (err) {
			console.dir('error');
			// return next(err);
		}
		user.password = hash;
		next();
	});
}); 

let User = module.exports = mongoose.model('User', userSchema);