var userCtrl 	= require('./app/controllers/user');
var userRoutes 	= require('./app/routes/user');

/*
	API routes resources
*/
exports.route = function(app) {

	

	app.use('/users', userRoutes);

};
