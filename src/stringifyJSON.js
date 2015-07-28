// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof(obj) === "Function") {
    return null
  }
  if (obj === undefined) {
     return '' + obj;
  }
  if (obj === null) {
    return '' + obj
  }
  if (typeof obj === "number") {
    return '' + obj;
  }
  if (typeof obj === "string") {
    return  "\"" + obj.toString() + "\""
  }
  if (typeof obj === "boolean") {
    return  '' + obj 
  }
  if (Array.isArray(obj)) {
    return '[' +
      obj.map(function(value) {
        return stringifyJSON(value)    //recursion
      }).join(",")
      + ']'
  }
  if (typeof obj === "object") {
    var stack = []
    for (var key in obj) {
    	 if ( obj[key] === undefined || obj[key] === 'function') {
    	 	return '{}';
    	 }
    	 // if( Object.getOwnPropertyNames(obj[key]).length === 0) {
    	 // 	return {};
    	 // }
       stack.push( stringifyJSON(key) + ":" + stringifyJSON(obj[key]) );    //recursion
      }
    return "{" + stack + "}"
    }   
   
};
