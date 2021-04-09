// Turn this function into an arrow function

/*function arrow() {
  return "es6 is awesome!";
}*/
const arrow = () => "es6 is awesome";
console.log(arrow())

//Use the es6 syntax for default parameter
function defaultParameter(name = "sam") {
  //var name = name || "sam";
  return name;
}
console.log(defaultParameter())

arr1 = ["hello ", "you"]
arr2 = ["I'm ", "Eli"]
// Use the spread operator to combine arr1 and arr2
function combineArrays(arr1, arr2) {
  //return arr1.concat(arr2);
  const combineArr1And2 = [...arr1, ...arr2];
  return combineArr1And2;
}
console.log(combineArrays(arr1, arr2))

//use destructuring to return the object's cyf property
function destructuring(obj) {
  return obj.cyf;
}

// use template literal to return a string with the sum of a and b
function templateString(a, b) {
  return "The sum is equal to " + (a + b).toString();
}