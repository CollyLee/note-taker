const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const uuid = require('./helpers/uuid');
const fs = require('fs');
const { error } = require('console');
// const { readFromFile, writeToFile, readAndApend } = require('./helpers/fsUtils.js')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/api/notes', (req, res) =>
  fs.readFile('./db/db.json', 'utf-8', (err, data) => {
    if (err) {
      throw err
    } res.status(200).json(JSON.parse(data))
  }))

app.post('/api/notes', (req, res) => {
  const { title, text } = req.body

  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuid(),
    };
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
      if (err) {
        throw error;
      } else {
        const parsedNotes = JSON.parse(data);
        parsedNotes.push(newNote);

        fs.writeFile('./db/db.json', JSON.stringify(parsedNotes),
          (err) => err ? console.error(err) : console.info('Your note has been added'))
      return }
    })
  }
})

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html')
  )
})

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

