function rot13(str) { // LBH QVQ VG!

//variable declarations
var  chArray =[];
var  decodeArray = [];
var  decoded = "";

//load character values into array
  for (var i=0; i < str.length; i++) {
    chArray[i]=str.charCodeAt(i);
  }

 //Perform rotation on letters in chArray
 for (i=0; i < chArray.length; i++)  {
   if (chArray[i] >= 65 && chArray[i] <= 77) {
     chArray[i]=chArray[i]+13;
   } else if (chArray[i] >= 78 && chArray[i] <= 90) {
     chArray[i]=chArray[i]-13;
   }
 }
   //load decoded characters into an array
   for (i=0; i < chArray.length; i++) {
     decodeArray[i]=String.fromCharCode(chArray[i]);
   }

   //Convert array into string
   decoded = decodeArray.join("");

    return decoded;
 }


// Change the inputs below to test
rot13("SERR PBQR PNZC");
