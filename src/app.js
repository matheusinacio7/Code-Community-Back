const express = require('express');
const router = require('./routes');
const path = require('path');
const cors = require('cors');

const pathUploads = path.join(__dirname, '..', 'uploads');
const app = express();
app.use(cors());

app.use(express.json());

app.use(express.static(pathUploads));

app.use(router);

module.exports = { app };
