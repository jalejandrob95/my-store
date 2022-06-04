const express = require('express');
const cors = require('cors');
const routersApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./midlewares/error.handler');

const app = express();
const port = 3003;

//Midlewares
app.use(express.json());

const whitelist = ['http://localhost:8080', 'http://localhost:8081'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}
app.use(cors(corsOptions));

//Routing
routersApi(app);

//Error handling middleware
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
