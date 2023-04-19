// GET /notes should return the notes.html file.
// GET * should return the index.html file.

// GET /api/notes should read the db.json file and return all saved notes as JSON.
// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

// Each note should have a randomized ID (uuid)

const express = require('express');
const api = require('./routes/index.js')
const PORT = process.env.PORT || 3001;
const app = express();
const uuid = require('./helpers/uuid');
const fs = require('fs');
const { readFromFile, writeToFile, readAndApend } = require('./helpers/fsUtils.js')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const { noteTitle, noteText } = req.body

if (noteTitle && noteText) {
    // Variable for the object we will save
    const newReview = {
      noteTitle,
      noteText,
      note_id: uuid(),
    };
}