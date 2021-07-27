const add = (n1: number, n2: number) => {
  return n1 + n2; // TS infers that the return type is a number
};

// this declares the type of the return to void so there doesnt need a return basically ignoring the need for a return
const printResult = (num: number): void => {
  console.log("Result " + num); // Because there is no return TS infers the type void
};

// You can also declare Function types

// To decalre CallBacks you can do it like so...
const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
};

// decalre the wanted parameter types and return types
let combineValues: (a: number, b: number) => number;

combineValues = add; // TS accepts add because it has the required types
// combineValues = printResult; // TS does not accept this because the types do not match what is decalred before

// then just like regular JS you can call combineValues just like a function

console.log(combineValues(2, 3));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
