const path = require("path");
const express = require('express');
const mongoose = require("mongoose");
require('./db/mongoose');
const logger = require("morgan");
const cors = require('cors');
const helmet = require("helmet");
const compression = require("compression");

const dev = process.env.NODE_ENV !== "production";
const app = express();
const port = process.env.PORT || 4000;

if (!dev) {
  app.use(helmet());
  app.use(compression());
}
app.use(logger("combined"));
app.use(cors({
  credentials: true
}));

app.listen(port, () => {
  console.log(`server is up and running on port 4000`);
});