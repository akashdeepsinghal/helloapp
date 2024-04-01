// const express = require('express');

// const { v4 } = require('uuid');

// app.get('/api', (req, res) => {
//   const path = `/api/item/${v4()}`;
//   res.setHeader('Content-Type', 'text/html');
//   res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
//   res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
// });

// app.get('/api/item/:slug', (req, res) => {
//   const { slug } = req.params;
//   res.end(`Item: ${slug}`);
// });

// module.exports = app;

// export default (req, res) => {
//   res.send({ message: 'testing' });
// };

import express from 'express';
const app = express();

const port = process.env.PORT || 3333;
app.get('/', (req, res) => res.send('Express on Vercel'));

app.listen(port, () => console.log('Server ready on port:' + port));

module.exports = app;
