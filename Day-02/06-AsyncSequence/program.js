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



function f1(){
	console.log("f1 started");
	setTimeout(function(){
		console.log("f1 completed");	
	},3000);
}

function f2(){
	console.log("f2 started");
	setTimeout(function(){
		console.log("f2 completed");	

	},3000);
}

function f3(){
	console.log("f3 started");
	setTimeout(function(){
		console.log("f3 completed");	
	},3000);
}

function f4(){
	console.log("f4 started");
	setTimeout(function(){
		console.log("f4 completed");	
	},3000);
}



function runSync(){
	f1Sync();
	f2Sync();
	f3Sync();
	f4Sync();
}

function run(){
	f1();
	f2();
	f3();
	f4();
}

module.exports.runSync = runSync;
module.exports.run = run;
