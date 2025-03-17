const express = require('express');
const fs = require('fs');
const app = express();

app.get('/movies', (req, res) => {
    fs.readFile('./data/movies.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading movie data');
        } else {
            res.json(JSON.parse(data));
        }
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
