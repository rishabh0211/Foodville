const path = require("path");
const express = require('express');
const mongoose = require("mongoose");
require('./db/mongoose');
const logger = require("morgan");
const cors = require('cors');
const helmet = require("helmet");
const compression = require("compression");
const mongoSessionStore = require("connect-mongo");
const session = require("express-session");
const passport = require("passport");

require('./models/User');
require('./models/Meal');
require('./models/Restaurant');
require('./models/Order');
const routes = require('./routes');
require('./passport');

const dev = process.env.NODE_ENV !== "production";
const app = express();
const port = process.env.PORT;

if (!dev) {
  app.use(helmet());
  app.use(compression());
}
app.use(logger("combined"));
if (dev) {
  app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
  }));
}

app.use(express.json());

/** Session Configuration */
const MongoStore = mongoSessionStore(session);
const sessionConfig = {
  name: "foodville-session.sid",
  // secret used for using signed cookies w/ the session
  secret: process.env.SESSION_SECRET,
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 1 * 24 * 60 * 60 // save session for 1 day
  }),
  // forces the session to be saved back to the store
  resave: false,
  // don't save unmodified sessions
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 1 // expires in 1 days
  }
};
if (!dev) {
  sessionConfig.cookie.secure = true; // serve secure cookies in production environment
  app.set("trust proxy", 1); // trust first proxy
}
app.use(session(sessionConfig));

/* Add passport middleware to set passport up */
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  /* custom middleware to put our user data (from passport) on the req.user so we can access it as such anywhere in our app */
  res.locals.user = req.user || null;
  next();
});

app.use("/api", routes);

const staticPath = path.join(__dirname, 'build');
app.use("/", express.static(staticPath));
app.use("/restaurants", express.static(staticPath));
app.use("/cart", express.static(staticPath));
app.use("/restaurant/*", express.static(staticPath));
app.use("/orders", express.static(staticPath));

app.listen(port, () => {
  console.log(`server is up and running on port ${port}`);
});