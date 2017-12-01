
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.

  function compareNumbers(a, b) {
  return a - b;
}

  var sorted = arr.sort(compareNumbers);

  for (var i = 0; i < sorted.length; i++) {
    if (num <= sorted[i]) {return i;}
  }
  //If num makes it through the loop, return sorted.length to put it at end
  return sorted.length;


}

getIndexToIns([2, 5, 10], 15);
