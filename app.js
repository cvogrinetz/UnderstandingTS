var add = function (n1, n2) {
    return n1 + n2; // TS infers that the return type is a number
};
// this declares the type of the return to void so there doesnt need a return
var printResult = function (num) {
    console.log("Result " + num); // Because there is no return TS infers the type void
};
// You can also declare Function types
// To decalre CallBacks you can do it like so...
var addAndHandle = function (n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
};
// decalre the wanted parameter types and return types
var combineValues;
combineValues = add; // TS accepts add because it has the required types
// combineValues = printResult; // TS does not accept this because the types do not match what is decalred before
// then just like regular JS you can call combineValues just like a function
console.log(combineValues(2, 3));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
