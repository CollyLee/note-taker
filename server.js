// GET /api/notes should read the db.json file and return all saved notes as JSON.
// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

const express = require('express');
const PORT = /* process.env.PORT ||  */3002;
const app = express();
const uuid = require('./helpers/uuid');
const fs = require('fs');
// const { readFromFile, writeToFile, readAndApend } = require('./helpers/fsUtils.js')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

app.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, './public/notes.html')))

app.post('/notes', (req, res) => {

  console.info(`${req.method} request received to add a review`);

  const { noteTitle, noteText } = req.body

  if (noteTitle && noteText) {
    // Variable for the object we will save
    const newNote = {
      noteTitle,
      noteText,
      note_id: uuid(),
    };
  }

  fs.readFile('./db/db.json', 'utf-8', (err, data) => {
    if (err) {
      throw error;
    } else {
      const parsedNotes = JSON.parse(data);
      parsedNotes.push(newNote);

      fs.writeFile('./db/db.json', JSON.stringify(parsedReviews),
        (err) => err ? console.error(err) : console.info('Your note has been added'))
    }
  })
})

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);