//Required packages for app to function
const express = require('express');

//Defining the PORT and app
const app = express();
const PORT = process.env.PORT || 3001;

//Parse data from the express server application
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Listening for the server on port
app.listen(PORT, function() {
    console.log('listening on port' + PORT);
});