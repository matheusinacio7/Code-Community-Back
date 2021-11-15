const express = require('express');
const User = require('./controllers/UserController');

const PORT = 3000;

const app = express();

app.use(express.json());

// endpoints
app.use('/', (req, res) => {
    res.status(200).send('Welcome to Code Community API!');
});

app.use('/user', User);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));