const express = require('express');
const app = express();

app.use('/api/users', require('./users'));
app.use('/api/auth', require('./auth'));
app.use('/api/community', require('./community'));

module.exports = app;