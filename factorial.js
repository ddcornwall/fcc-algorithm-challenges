function factorialize(num) {
var factor=num;

  if (num==0) {
  return 1;
} else {
  while (num > 1) {
    factor=factor*(num-1);
    num--;
  }
    return(factor);
}

}

factorialize(5);




//This version correctly factorializes any number equal to or above zero in node.js. It was not accepted by the Free Code Camp (FCC) Challenge.
//Just a momment to check moving from desktop to github.

//var factor=1;

//function factorialize(num) {

  // if (num==0) {
    // console.log(factor);
     //return factor;} else {
  //factor=factor*num;
  //factorialize(num-1);}

//}

//factorialize(10);
