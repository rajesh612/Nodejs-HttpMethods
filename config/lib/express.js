/**
 * Created by rajesh on 7/11/16.
 */

'use strict';

var express = require('express'),  // web server framework
bodyParser = require('body-parser')


// provides the interface to communicate with other modules ; how to use this in other modules is ->  require('./express');
module.exports.init = function () {
    var app = express();
    this.initBodyParser(app);
    return app;
}

module.exports.initBodyParser = function (app) {

    app.use(bodyParser.urlencoded({extended : false}))

    app.use(bodyParser.json())
}