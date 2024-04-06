require('dotenv').config()
const express = require('express');
const swaggerUi = require("swagger-ui-express");
const { specs } = require('./swagger')
const cors = require('cors')
const router = require('./routes');
const { errorMiddleware } = require('./middlewares');
const bodyparser = require("body-parser");

const app = express()
const port = 3000

app.use(cors())
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

app.use(router)
app.use(errorMiddleware)

app.listen(port, () => console.log(`API listen on port ${port}`))