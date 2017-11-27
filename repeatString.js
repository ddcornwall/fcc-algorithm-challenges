
function repeatStringNumTimes(str, num) {
  // repeat after me
var i=1;
stringSum=str;
  if (num < 1) {return "";} else {
    while (i < num ){
      stringSum=stringSum+str;
      i++
    }

  }

  return stringSum;
}

repeatStringNumTimes("abc", 4);
