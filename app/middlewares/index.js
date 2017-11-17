var requiresLogin = function (req, res, next) {
	if (! req.session.userId) {
		var err = new Error("You are not unauthorized to view this page");
		err.status = 403;
		return next(err);
	}	
	return next();
}

module.exports.requiresLogin = requiresLogin;