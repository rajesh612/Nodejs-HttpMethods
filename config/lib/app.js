/**
 * Created by rajesh on 7/11/16.
 */

'use strict';

var express = require('./express');  // it will search within same directory instead of node_modules
var config = require('../config');
var path = require('path');



module.exports.loadRoutes = function (app) {
  var coreRoute =   require(path.join(process.cwd(),'modules/core/server/routes/core.server.routes'));
    coreRoute(app);
}



module.exports.start = function () {
   var app = express.init();  // calls the express init function
    this.loadRoutes(app);
    app.listen(config.app.port,function () {
        console.log("Contacts App server is running on " + config.app.port + '. . .');
    });
}