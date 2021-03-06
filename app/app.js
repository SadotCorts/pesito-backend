const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const params = require('strong-params');

const indexRoute = require('./routes/index.js');
const usersRoute = require('./routes/user.js');
const goalsRoute = require('./routes/goals.js');

const PORT = 3001;
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(params.expressMiddleware());

app.use('/', indexRoute);
app.use('/api/users', usersRoute);
app.use('/api/goals', goalsRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
