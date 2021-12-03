const express = require('express');
const cors = require('cors');
const app = express();
// settings
app.set('port', process.env.PORT || 8000);
// middlewares
app.use(cors());
app.use(express.json());
// routes
app.use('/api/users',require('./routes/users'));
app.use('/api/agua',require('./routes/agua') );
app.use('/api/jabon',require('./routes/jabon') );

module.exports = app;