const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const databaseUri = "mongodb://localhost/beautylounge";

/**
 * connect to database
 * 
 * @return 
 */
var connectDB = async function () {
    return await mongoose.connect(databaseUri, { useMongoClient: true })
        .then(() => {
            console.log('Connected to MongoDB at ', databaseUri);

            return mongoose.connection;
        })
        .catch(err => console.dir(`Database connection error: ${err.message}`) );
}

/**
 * disconnect database
 * 
 * @return 
 */
var disconnectDB = async function () {
	return await mongoose.connect(databaseUri, function () {
		mongoose.connection.db.dropDatabase();
	});
}

module.exports.connectDB = connectDB;
module.exports.disconnectDB = disconnectDB;