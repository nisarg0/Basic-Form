// https://zellwk.com/blog/crud-express-mongodb/
// https://www.knowi.com/blog/getting-started-with-mongodb-atlas-overview-and-tutorial/
// https://nordicapis.com/building-a-restful-api-using-node-js-and-mongodb/

const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const USERDETAILS_CON_URL =
	"mongodb+srv://root:root@userdetails.vfecg.mongodb.net/userDetails?retryWrites=true&w=majority";
const DATABASE_NAME = "userDetails";
const port = 5000;

var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var database, collection;

app.post("/personnel", (request, response) => {
	console.log(request.body);
	collection.insertOne(request.body, (error, result) => {
		if (error) {
			console.log(error);
			return;
		}
		console.log("Successfully inserted");
	});
	response.send("success");
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);

	MongoClient.connect(
		USERDETAILS_CON_URL,
		{
			useUnifiedTopology: true,
		},
		(err, client) => {
			if (err) return console.error(err);

			database = client.db(DATABASE_NAME);
			collection = database.collection("personnel");
			console.log("Connected to `" + DATABASE_NAME + "`!");
		}
	);
});
