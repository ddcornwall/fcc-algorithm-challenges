var num;
var factor=1;
console.log(num);
function factorialize(num) {

   if (num==0) return num;
  factor=factor*num;
  console.log(num +" Factor: " + factor);
  factorialize(num-1);

}  

factorialize(5);