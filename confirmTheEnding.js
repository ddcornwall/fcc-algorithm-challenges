function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

if (target == str.substr(-target.length)) {
  return true;
} else {return false;}


}

confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");

confirmEnding("Open sesame", "same");
