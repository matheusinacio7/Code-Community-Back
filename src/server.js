const { app } = require('./app');
require('dotenv').config();

const port = 9000;

app.get('/', (_req, res) => {
  res.status(200).send('Welcome to Code Community API!');
});

app.use(require('./middlewares/UserMiddleware'));

app.listen(port, () => console.log(`Server is running on port ${port}`));
