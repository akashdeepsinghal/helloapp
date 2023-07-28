const express = require('express');
const app = express();

// Import and set up your actual Express.js app from the original location
const actualApp = require('../apps/backend/src/main.js');
actualApp(app);

// Export the serverless function
module.exports = (req, res) => {
  app(req, res);
};