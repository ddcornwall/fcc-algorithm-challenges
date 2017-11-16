//This version correctly factorializes any number equal to or above zero in node.js. It was not accepted by the Free Code Camp (FCC) Challenge.

var factor=1;

function factorialize(num) {

   if (num==0) {
     console.log(factor);
     return factor;} else {
  factor=factor*num;
  factorialize(num-1);}

}  

factorialize(10);
