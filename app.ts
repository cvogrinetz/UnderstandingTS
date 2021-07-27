const person: {
  name: string; // string
  age: number; // number
  hobbies: string[]; // an array of strings
  role: [number, string]; // Tuple. (fixed length array)
} = {
  name: "Bitterfunk",
  age: 99,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

// Declare type of array that can only contain strings
let favoriteActivities: string[];
favoriteActivities = ["Sports"];
// To declare an array that can contain all types ====>  let favoriteActivities: any[]

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

// ENUM EXAMPLE

// Instead of declaring multiple variables like so...
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// Enum can be used to create a custom type. enum will assign these varialbes with somewhat of an ID
// enum Role {
//   ADMIN,   ===> 0
//   READ_ONLY, ====> 1
//   AUTHOR,  =====> 2
// }

// YOU CAN ALSO DECLARE THE ID TO WHATEVER YOU NEED
// EXAMPLE
// enum Role {
//   ADMIN = 5,   =====> ANY NUMBER
//   READ_ONLY = 'string', ====> ANY STRING
//   AUTHOR,  =====> 6  IF NOT DECLARED IT WILL ITERATE TO WHATEVER NUMBER THAT IS DEVALRED BEFOREs
// }

// const person = {
//   name: "Bitterfunk",
//   age: 99,
//   hobbies: ["Sports", "Cooking"],
//   role: ,
// };
