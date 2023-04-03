'use strict';

const express = require('express');
const reverse = require('./reverse/reverse');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/reverse-it', (req, res, next) => {
  if (req.query.input) {
    let result = reverse(req.query.input)
    res.send(result);
  } else {
    res.send("Input a string as a query");
  }
});

module.exports = app;