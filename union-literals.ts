// Literal and Union Types

// Instead of writing number | string you can can declare a Union Type variable like so
type Combinable = number | string;
type ConversionDesciptor = "as-number" | "as-text";

const combine = (
  // then you can use the custom union type like this...
  input1: Combinable,
  input2: Combinable,
  // to decalre a literal you can do it like so...
  resultConversion: "as-number" | "as-text"
  // or with the Custom Union type like this...
  // resultConversion: ConversionDescriptor
) => {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    // Putting the + infront of input forces the conversion of input into a number
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedAges);

const combinedNames = combine("Bitter", "Funk", "as-text");
console.log(combinedNames);
