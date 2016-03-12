console.log("worker script loaded");
function doWork(){
	for(var i=0; i<10000; i++)
		for(var j=0; j<10000; j++)
			for(var k=0; k<100; k++){
				
			}
}

self.addEventListener("message", function(evtArg){
	var msgData = evtArg.data;
	if (msgData === 'start'){
		doWork();
		self.postMessage('done');
	}
})