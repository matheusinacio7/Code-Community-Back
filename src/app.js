const express = require('express');
const router = require('./routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(router);

module.exports = { app };
