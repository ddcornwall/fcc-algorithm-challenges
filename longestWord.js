function findLongestWord(str) {


var greatest=0; //holds longest string length

var strArray = str.split(" ");

for (var i=0; i <= (strArray.length-1); i++) {
    if (strArray[i].length > greatest) {greatest = strArray[i].length ;
  }

}
  return greatest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
