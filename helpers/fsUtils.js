const fs = require('fs');

// READS THE CURRENT JSON FILE, AND ADDS THE NEW CONTENT TO IT, AND WRITES TO A NEW JSON FILE
// const readAndAppend = (content, file) => {
//     fs.readFile(file, 'utf8', (err, data) => {
//         if (err) {
//             console.error(err);
//         } else {
//             const parsedData = JSON.parse(data);
//             parsedData.push(content);
//             writeToFile(file, parsedData);
//         }
//     });
// };

// const writeToFile = (destination, content) =>
//     fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
//         err ? console.error(err) : console.info(`\nData written to ${destination}`))

// const readFromFile = util.promisify(fs.readFile);

// module.exports = { readFromFile, writeToFile, readAndAppend };