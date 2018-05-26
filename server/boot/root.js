'use strict';

var path          = require('path');

module.exports = function(server) {
  // Installs the default route for root of application
  var router = server.loopback.Router();

  router.use(function (req, res) {
    return res.render("index.html");
  });
  
  server.use(router);
};
