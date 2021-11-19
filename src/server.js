const { app } = require('./app');
require('dotenv').config();

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.status(200).send('Welcome to Code Community API!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});