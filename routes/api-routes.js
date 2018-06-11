// *********************************************************************************
// api-routes.js - this file offers a set of routes for api
// *********************************************************************************

// Dependencies
// =============================================================

// Routes
var db = require("../models");
var axios = require("axios")

module.exports = function (app) {

    // Api call to backend triggers an api call to mailchimp to initiate automated email.
    app.post("/test", function(req, res){
        console.log(req);
        console.log(res);
        axios.post('/test', {
            firstName: 'Steven',
            lastName: 'Flintstone'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    })

}

