//Packages required to run application Express.js, file system, and path components
const express = require('express');
const fs = require('fs');
const path = require('path');

//Create variable for express.js
const app = express();
//Create variable for localhost server
const PORT = process.env.PORT || 8080;

//Use express to connect and parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());


//POST -- API call to post notes to server
app.post('/api/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) throw err;
    var notes = JSON.parse(data);
    let userNote = req.body;
    userNote.id = Math.floor(Math.random() * 5000);
    notes.push(userNote);
  fs.writeFile('./db/db.json', JSON.stringify(notes), (err, data) => {
      res.json(userNote);
  });
  }); 
});


//DELETE -- API Call to delete notes
app.delete('/api/notes/:id', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) throw err;
    let notes = JSON.parse(data);
    const newNotes = notes.filter(note => note.id !== parseInt(req.params.id));
  
  fs.writeFile('./db/db.json', JSON.stringify(newNotes), (err, data) => {
    res.json({msg: 'successfully'});
  });
});
});

//GET -- API call for note with unique id
app.get('api/notes/:id', (req, res) =>{
  res.json(notes[req.params.id]);
});


//GET -- API call for notes
app.get('/api/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) throw err;
    var notes = JSON.parse(data);
    res.json(notes);
  });
});


//HTML Routes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/notes.html'))
});
app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, '/index.html'));
});   


//Listener function to handle server events
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});


