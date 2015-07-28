// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var elements = document.body;
    var stack = [];

    function traverse(node) {
    	//get all classes and compare with classname,
    	// if present push to stack
    	if(node.classList.contains(className)) {
    		stack.push(node);
    	}
    	//recursion to walk through all nodes
    	for(var i=0; i<node.children.length; i++) {
    		var childNode = node.children[i];
    		traverse(childNode);    //recursion
    	}
    }

   traverse(elements); 
   return stack;	
};
