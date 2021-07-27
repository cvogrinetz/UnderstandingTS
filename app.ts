const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
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
