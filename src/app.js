const express = require('express');
const router = require('./routes');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const pathUploads = path.join(__dirname, '..', 'uploads');
const app = express();

const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use(express.static(pathUploads));

app.use(express.static(pathUploads));

app.use(router);

module.exports = { app };
