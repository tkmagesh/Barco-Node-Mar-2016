var tasks = [
	{id : 1, name : "Learn JavaScript", isClosed : true},
	{id : 2, name : "Master Node.js", isClosed : false},
	{id : 3, name : "Explore Angular.js", isClosed : false},
	{id : 4, name : "Learn to debug node apps", isClosed : false}
]

function addNew(newTaskName, cb){
	var newTask = {
		id : tasks.reduce(function(result, task){
			return result > task.id ? result : task.id;
		})+1,
		name : newTaskName,
		isClosed : false
	};
	setTimeout(function(){
		tasks.push(newTask);
		cb();
	},3000)
}
module.exports = {
	getAll : function(){
		return tasks;
	},
	addNew : addNew
};