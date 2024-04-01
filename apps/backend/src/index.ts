// /**
//  * This is not a production server yet!
//  * This is only a minimal backend to get started.
//  */

// import express from 'express';
// import * as path from 'path';

// import { core } from '@backend/core';

// const app = express();

// app.use('/assets', express.static(path.join(__dirname, 'assets')));

// app.get('/api', (req, res) => {
//   // res.send({ message: core() });
//   res.send({ message: 'testing' });
// });

// const port = process.env.PORT || 3333;
// const server = app.listen(port, () => {
//   console.log(`Listening at http://localhost:${port}/api`);
// });
// server.on('error', console.error);

// api/api.ts

// export default (req, res) => {
//   res.send({ message: 'testing' });
// };

import express from 'express';
const app = express();

const port = process.env.PORT || 3333;
app.get('/', (req, res) => res.send('Express on Vercel'));

app.listen(port, () => console.log('Server ready on port:' + port));

module.exports = app;
