const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Team Members: Jenil, Dharm & krish</h1>');
});

app.listen(3000, () => console.log('Server running on port 3000'));
