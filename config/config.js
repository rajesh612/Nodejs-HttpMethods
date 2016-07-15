/**
 * Created by rajesh on 7/11/16.
 */

'use strict';


// self invoking function
var initGlobalConfig = function () {
    var config = {
        server:{},
        client:{}
    };

    var defaultConfig =    require('./env/default');
    config = defaultConfig;
    return config;
};

module.exports = initGlobalConfig();
