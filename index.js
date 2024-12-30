const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express on Vercel!');
});

// Ensure that you have other routes configured properly
app.get('/another-route', (req, res) => {
  res.send('Another route!');
});

module.exports = app; // Use module.exports to export the app for Vercel
