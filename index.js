const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello World, Nozaipo! 1');
});

module.exports = app.listen(8080, () => {
});
