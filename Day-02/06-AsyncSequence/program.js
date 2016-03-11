function f1Sync(){
	console.log("f1Sync started");
	console.log("f1Sync completed");
}

function f2Sync(){
	console.log("f2Sync started");
	console.log("f2Sync completed");
}

function f3Sync(){
	console.log("f3Sync started");
	console.log("f3Sync completed");
}

function f4Sync(){
	console.log("f4Sync started");
	console.log("f4Sync completed");
}



function f1(next){
	console.log("f1 started");
	setTimeout(function(){
		console.log("f1 completed");	
		if (typeof next === 'function') next();
	},3000);
}

function f2(next){
	console.log("f2 started");
	setTimeout(function(){
		console.log("f2 completed");	
		if (typeof next === 'function') next();

	},3000);
}

function f3(next){
	console.log("f3 started");
	setTimeout(function(){
		console.log("f3 completed");	
		if (typeof next === 'function') next();
	},3000);
}

function f4(next){
	console.log("f4 started");
	setTimeout(function(){
		console.log("f4 completed");	
		if (typeof next === 'function') next();
	},3000);
}

var syncFns = [f1Sync, f2Sync, f3Sync, f4Sync];

function runSync(){
	for(var i=0; i<syncFns.length; i++)
		syncFns[i]();
}

var fns = [f1, f2, f3, f4];

function run(){
	function exec(fns){
		var first = fns[0],
			remaining = fns.slice(1),
			next = function(){
				exec(remaining);
			}
		if (typeof first === 'function')
			first(next);
	}
	exec(fns);
}

module.exports.runSync = runSync;
module.exports.run = run;
