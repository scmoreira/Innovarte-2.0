require('dotenv').config();

// Debugger
require('./configs/debugger.config');

// App
const express = require('express');
const app = express();

// Database
require('./configs/mongoose.config');

// Configs
require('./configs/preformatter.config')(app);
require('./configs/middleware.config')(app);
require('./configs/views.config')(app);
require('./configs/passport.config')(app);
require('./configs/locals.config')(app);

// Routes index
require('./routes')(app);

module.exports = app;