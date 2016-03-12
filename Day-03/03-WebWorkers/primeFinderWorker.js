function isPrime(n){
	for(var i=3; i<=Math.sqrt(n); i++)
		if (n % i === 0) return false;
	return true;
}

self.addEventListener("message", function(evtArg){
	var msgData = evtArg.data,
		start = msgData.start,
		end = msgData.end,
		reportingThreshold = (end-start)/20;
	var primeCount = 0;
	for(var i = start; i <= end; i++){
		if (isPrime(i)) ++primeCount;
		if ((i - start) % reportingThreshold === 0){
			var percentCompleted = ((i - start) / (end - start)) * 100;
			self.postMessage({
				id : msgData.id,
				type : 'progress',
				percentCompleted : percentCompleted
			});
		}
	}
	self.postMessage({
		id : msgData.id,
		percentCompleted : 100,
		primeCount : primeCount,
		type : 'completed'
	});
});