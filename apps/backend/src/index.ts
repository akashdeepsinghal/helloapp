/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';

import { core } from '@backend/core';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  // res.send({ message: core() });
  res.send({ message: 'testing' });
});

const port = 3333;
console.log('port in backend:', port);
const server = app.listen(port, () => {
  console.log(`Listening backend at http://localhost:${port}/api`);
});
server.on('error', console.error);
