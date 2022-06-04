const express = require('express');
const catRouter = require('./cats.router');
//const usersRouter = require('./users.router');

function routersApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/cats', catRouter);
  //router.use('/users', usersRouter);
}

module.exports = routersApi;
