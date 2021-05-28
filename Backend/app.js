// https://zellwk.com/blog/crud-express-mongodb/
// https://www.knowi.com/blog/getting-started-with-mongodb-atlas-overview-and-tutorial/
// https://nordicapis.com/building-a-restful-api-using-node-js-and-mongodb/

const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const USERDETAILS_CON_URL =
	"mongodb+srv://root:root@userdetails.vfecg.mongodb.net/userDetails?retryWrites=true&w=majority";
const DATABASE_NAME = "";

const client = new MongoClient(USERDETAILS_CON_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
MongoClient.connect(USERDETAILS_CON_URL, (err, client) => {
	if (err) return console.error(err);
	console.log("Connected to Database");
});

var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var database, collection;

app.listen(5000, () => {
	MongoClient.connect(
		USERDETAILS_CON_URL,
		{ useNewUrlParser: true },
		(error, client) => {
			if (error) {
				throw error;
			}
			database = client.db(DATABASE_NAME);
			collection = database.collection("personnel");
			console.log("Connected to `" + DATABASE_NAME + "`!");
		}
	);
});
