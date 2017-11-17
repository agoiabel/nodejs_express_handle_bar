/**
 * Controller for all the external unsecured views
 * 
 * @type 
 */
var PagesController = {
	index: function (req, res) {
		res.render('index');
	},

	show: function (req, res) {
		res.render('single-item');
	}
};

module.exports = PagesController;