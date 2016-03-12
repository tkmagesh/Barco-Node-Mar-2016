function add(x,y){
    console.log('[Provider] - processing ', x, ' and ', y);
    var promise = new Promise(function(resolveFn, rejectFn){
        setTimeout(function(){
            console.log('[Provider] - returning result');
            var result = x + y;
            resolveFn(result);
        },3000);
     });
    return promise;
}

function add(x,y){
	var deferred = Promise.defer()
    console.log('[Provider] - processing ', x, ' and ', y);
    doTheAddJob(deferred, x, y);
    return deferred.promise;
}

function doTheAddJob(deferred, x,y){
	setTimeout(function(){
        console.log('[Provider] - returning result');
        var result = x + y;
        deferred.resolve(result);
    },3000);
}

function addClient(x,y){
	var p = add(x,y);
	p.then(function(result){
		console.log('result = ', result);
	});
}