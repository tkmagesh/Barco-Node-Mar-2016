/*create an 'accumulator' object that has the following methods
	- add(x)
	- subtract(x),
	- multiply(x),
	- divide(x)
	- getResult()

add(100)
subtract(50)
mutiply(10)
divide(2)
getResult()*/

module.exports = function(){
	var result = 0;
	return {
		add : function(x){
			result += x;
		},
		subtract : function(x){
			result -= x;
		},
		multiply : function(x){
			result *= x;
		},
		divide : function(x){
			result /= x;
		},
		getResult : function(){
			return result;
		}
	}
};