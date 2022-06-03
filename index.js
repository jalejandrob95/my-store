const express = require('express');
const routersApi = require("./routes")

const app = express();
const port = 3003;

//Midlewares
app.use(express.json());

//Routing
routersApi(app)

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
