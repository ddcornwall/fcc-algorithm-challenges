function chunkArrayInGroups(arr, size) {
  // Break it up.
var chunky = [];
var j=size;

for (var i = 0; i < arr.length; i += size) {
  chunky.push(arr.slice(i,j));
  j = j+size;
}

return chunky;

}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
