
function largestOfFour(arr) {
  // You can do this!

var greatest=0; //holds highest number in current array
var highest=[];

for (var i=0; i <= 3; i++) {
  greatest=0;
  for (var j=0; j <= 3; j++) {
      if (arr[i][j] > greatest) {greatest = arr[i][j];
     }}
highest[i]=greatest;
}



return highest;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
