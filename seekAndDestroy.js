//Code works but needs to modified to accept any number of arguments.

function destroyer(arr) {
  // Remove all the values

  //turn arguments into an array
var args = [].slice.call(arguments);

var desiredArray = arr.filter(function(element) {return element !==args[1] && element !==args[2] && element !==args[3];});

return desiredArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
