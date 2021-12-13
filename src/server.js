const { app } = require('./app');
const firewall = require('./middlewares/firewall');
require('dotenv').config();

const port = process.env.PORT || 3001;

app.get('/', firewall, (_req, res) => {
  res.status(200).send('Welcome to Code Community API!');
});

app.use(require('./middlewares/UserMiddleware'));

app.listen(port, () => console.log(`Server is running on port ${port}`));