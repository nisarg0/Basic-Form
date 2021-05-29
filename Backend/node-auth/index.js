// https://dev.to/dipakkr/implementing-authentication-in-nodejs-with-express-and-jwt-codelab-1-j5i
// webtoken-eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjBiMWZiODYyMzQxOWU0ZWMwZjcwNDAxIn0sImlhdCI6MTYyMjI3Njk5OSwiZXhwIjoxNjIyMjg2OTk5fQ.aFFd6o9byJpFQ7ji3xt3jehlfaRVgCTC8uHNsR4Jc3k
// https://zellwk.com/blog/crud-express-mongodb/

const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user");
const InitiateMongoServer = require("./config/db");

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
// use this to check in postman
// app.use(bodyParser.json());
// use this for forms
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware
app.get("/", (req, res) => {
	res.json({ message: "API Working" });
});

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", user);

app.listen(PORT, (req, res) => {
	console.log(`Server Started at PORT ${PORT}`);
});
