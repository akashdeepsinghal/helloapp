const express = require('express');
const app = express();

import { core } from '@backend/core';

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: core() });
});

// Export the serverless function
module.exports = (req, res) => {
  app(req, res);
};