var express = require('express');
var router = express.Router();
var taskService = require('../services/taskService');
/* GET users listing. */



router.get('/', function(req, res, next) {
	var tasks = taskService.getAll();

	var closedCount = tasks.reduce(function(result, task){
		return task.isClosed ? ++result : result;
	},0);

	var viewModel = { list : tasks, stats : {
		closedCount : closedCount,
		totalCount : tasks.length
	}};
  	res.render('tasks/index', viewModel);
});

router.get('/new', function(req, res, next){
	res.render('tasks/new');
});

router.post('/new', function(req, res, next){
	taskService.addNew(req.body.newTaskName, function(){
		res.redirect('/tasks');	
	});
	
});

module.exports = router;
