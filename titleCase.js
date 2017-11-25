function titleCase(str) {
  var tArray = [""];
  var strArray = str.split(" ");

for (var i=0; i <= (strArray.length-1); i++) {
  strArray[i]=strArray[i].toLowerCase();
  tArray[i]=strArray[i].replace(/[a-z]/, function myFunction(x){return x.toUpperCase();});
}
  str = tArray.join(" ");

  return str;
}

titleCase("I'm a little tea pot");
