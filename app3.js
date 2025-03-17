const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

const filePath = './data/movies.json';


app.get('/movies', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error reading movie data');
        res.json(JSON.parse(data));
    });
});


app.post('/movies', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        let movies = JSON.parse(data);
        const newMovie = { id: movies.length + 1, ...req.body };
        movies.push(newMovie);
        fs.writeFile(filePath, JSON.stringify(movies, null, 2), () => {
            res.status(201).json(newMovie);
        });
    });
});


app.put('/movies/:id', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        let movies = JSON.parse(data);
        const index = movies.findIndex(m => m.id === parseInt(req.params.id));
        if (index !== -1) {
            movies[index] = { ...movies[index], ...req.body };
            fs.writeFile(filePath, JSON.stringify(movies, null, 2), () => {
                res.json(movies[index]);
            });
        } else {
            res.status(404).send('Movie not found');
        }
    });
});


app.delete('/movies/:id', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        let movies = JSON.parse(data);
        const newMovies = movies.filter(m => m.id !== parseInt(req.params.id));
        fs.writeFile(filePath, JSON.stringify(newMovies, null, 2), () => {
            res.status(200).send('Movie deleted');
        });
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
