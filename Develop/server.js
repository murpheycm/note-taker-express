// Required packages for the application to work
const express = require("express");
const fs = require("fs");

//Setup express app and PORT
var app = express();
var PORT = process.env.PORT || 8080

//Data parsing and determines use of express app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public/assets", express.static(__dirname + "/public/assets"));

//Links the route files for the api and html routes to the server
require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

//Listening function to begin when the server is setup
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});