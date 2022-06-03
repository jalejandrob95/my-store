const express = require('express');
const catRouter = require('./catsRouter');

function routersApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/cats', catRouter);
}

module.exports = routersApi;
