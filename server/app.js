const path = require("path");
const express = require('express');
const mongoose = require("mongoose");
require('./db/mongoose');


const dev = process.env.NODE_ENV !== "production";
const app = express();
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server is up and running on port 4000`);
});