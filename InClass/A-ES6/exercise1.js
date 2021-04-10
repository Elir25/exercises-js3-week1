// Turn this function into an arrow function

/*function arrow() {
  return "es6 is awesome!";
}*/
const arrow = () => "es6 is awesome";
console.log(arrow())

//Use the es6 syntax for default parameter
const defaultParameter = (name = "sam") => name;
console.log(defaultParameter())

arr1 = ["hello ", "you"]
arr2 = ["I'm ", "Eli"]

// Use the spread operator to combine arr1 and arr2
const combineArrays = (arr1, arr2) => [...arr1, ...arr2];
  
console.log(combineArrays(arr1, arr2));

//use destructuring to return the object's cyf property
const destructuring = (obj) => {
  //return obj.cyf;
  return {cyf} = Obj;
}

// use template literal to return a string with the sum of a and b
const templateString = (a, b) => {
  //return "The sum is equal to " + (a + b).toString();
  return `The sum is equal to ${(a + b).toString()}`;
}
console.log(templateString(10, 5))