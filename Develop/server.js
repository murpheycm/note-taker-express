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
app.use(express.json());


//Connecting to the routes js files
require('./routes/api-routes.js');
require('./routes/html-routes.js');

//Listening for the server on port
app.listen(PORT, function() {
    console.log('listening on port' + PORT);
});