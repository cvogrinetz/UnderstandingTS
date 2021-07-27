// Unions
// You can declare multiple types but using the pipe | to be more flexible
var combine = function (input1, input2) {
    // Because TS doesnt know if the input will be a string or number, it doesnt like using the + so you must do this...
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
var combinedAges = combine(30, 26);
console.log(combinedAges);
var combinedNames = combine("Bitter", "Funk");
console.log(combinedNames);
