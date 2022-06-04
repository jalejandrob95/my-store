const express = require('express');
const routersApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./midlewares/error.handler');

const app = express();
const port = 3003;

//Midlewares
app.use(express.json());

//Routing
routersApi(app);

//Error handling middleware
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
