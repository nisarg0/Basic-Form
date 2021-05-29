const mongoose = require("mongoose");
require("dotenv").config();

const db_username = process.env.DB_USERNAME;
const db_pass = process.env.DB_PASS;
const db_name = process.env.DB_NAME;

// Replace this with your MONGOURI.
const MONGOURI = `mongodb+srv://${db_username}:${db_pass}@userdetails.vfecg.mongodb.net/${db_name}?retryWrites=true&w=majority`;

const InitiateMongoServer = async () => {
	try {
		await mongoose.connect(MONGOURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("Connected to DB !!");
	} catch (e) {
		console.log(e);
		throw e;
	}
};

module.exports = InitiateMongoServer;
