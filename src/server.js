const express = require('express');
require('dotenv').config();

const User = require('./controllers/UserController');

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

// endpoints
app.get('/', (req, res) => {
    res.status(200).send('Welcome to Code Community API!');
});

app.use('/user', User);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));