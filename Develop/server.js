//Required packages for app to function
const express = require('express');
const fs = require('fs');
const path = require('path');
const db = require('./db/db.json');

//Defining the PORT and app
const app = express();
const PORT = process.env.PORT || 3001;

//Parse data from the express server application
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());




//Links to js files for api and html routes
require("./routes/html-routes")(app);
require("./routes/api-routes")(app);



//Listening for the server on port
app.listen(PORT, function() {
    console.log('listening on port' + PORT);
});