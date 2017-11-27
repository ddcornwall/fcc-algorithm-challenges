
function truncateString(str, num) {
  // Clear out that junk in your trunk
  var res="";
  if (num <= 3) {
    res=str.slice(0, num) +"...";
  } else if (num >= str.length) {res=str;}  else {
  res = str.slice(0, num-3) + "...";
}



  return res;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
