'use strict';

var itunes = require('../../searchitunes');

exports.search = function(req, res) {

  console.log(req.query);

  itunes (req.query)
    .then (data => res.json(data))
    .catch (console.error)
  ;
};
