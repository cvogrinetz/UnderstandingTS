// Unions

// You can declare multiple types but using the pipe | to be more flexible

const combine = (input1: number | string, input2: number | string) => {
  // Because TS doesnt know if the input will be a string or number, it doesnt like using the + so you must do this...
  let result;
  // We make sure inputs are numbers
  if (typeof input1 === "number" && typeof input2 === "number") {
    // When inputs are number we then can do whatever we like here
    result = input1 + input2;
  } else {
    // If they are not numbers we then do anything here
    // since it can only be strings we hard change the inputs to strings to make sure then change the result
    result = input1.toString() + input2.toString();
  }
  return result;
};

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("Bitter", "Funk");
console.log(combinedNames);
