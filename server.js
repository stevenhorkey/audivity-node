// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
require('dotenv').config()
var express = require("express");
var passport = require('passport');
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;

// Requiring our models for syncing
var db = require(__dirname+"/Models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// app.use(session({
//   secret: config.use_secret,
//   resave: true,
//   saveUninitialized: true
// })); // session secret
// app.use(passport.initialize());
// app.use(passport.session());
// Routes
// =============================================================
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

require('./config/passport/passport.js')(passport, db.User);
// Syncing our sequelize models and then starting the Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});