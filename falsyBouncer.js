function bouncer(arr) {
  // Don't show a false ID to this bouncer.
var truArray=[];
var j=0;

for (var i=0; i < arr.length; i++)
if (Boolean(arr[i])) {
  truArray[j]=arr[i];
  j++;
}

return truArray;

}

bouncer([7, "ate", "", false, 9]);
