'use strict';

module.exports = function(app) {
	var todoList = require('../controllers/appleMusicController');

  app.route('/search')
		.get(todoList.search);

};
