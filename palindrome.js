//JavaScript program
//Use bits from reverse a string.


function palindrome(str) {
  // Good luck!
  //An = alphanumeric

var AnArray =[""];
var revAn ="";

var AnOnly = str.replace(/[^a-zA-Z0-9]+/g, '');
 AnOnly = AnOnly.toLowerCase();


for (var i=0; i < AnOnly.length; i++) {
  AnArray[i] = AnOnly[i];
}

var answer = AnArray.reverse();

revAn = answer.join(""); //returns array without inserting separators.
console.log(AnOnly + " " + revAn);

if (AnOnly == revAn) {
    return true;} else {
      return false;
    }

}



palindrome("1 eye for of 1 eye.");
