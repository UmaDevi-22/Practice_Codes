//Exercise1

let numbers: number[] = [1, 2, 3];
let strings: string[] = ["apple", "banana", "cherry"];
let booleans: boolean[] = [true, false, true];
let mixed: (number | string)[] = [1, "two", 3];



//Exercise2

let fruits: string[] = ["apple", "banana", "mango"];
fruits.push("grapes");
fruits.shift();
fruits.splice(2, 0, "pineapple");
fruits.reverse();
console.log(fruits);


//Exeercise3

let numbers: number[] = [10, 20, 30, 40, 50, 60];
let doubled = numbers.map(num => num * 2);
let filtered = doubled.filter(num => num <= 100);
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Doubled numbers:", doubled);
console.log("Filtered numbers:", filtered);
console.log("Sum:", sum);


//Exercise4


let values: number[] = [10, 20, 30, 40, 50];
let result = values.find(num => num > 25);
let index = values.findIndex(num => num === 40);
console.log("First number > 25:", result);
console.log("Index of 40:", index);


//Exercise5
Sorting an Array
let scores: number[] = [55, 23, 87, 12, 99, 38];
let ascending = scores.slice().sort((a, b) => a - b);
let descending = scores.slice().sort((a, b) => b - a);
console.log("Ascending order:", ascending);
console.log("Descending order:", descending);


//Exercise6
let student: [string, number, boolean] = ["John", 21, true];
student[1] = 22; // Update age
console.log(student);


//exercise7

let roles: string[] = ["User", "Editor", "Admin", "Moderator"];
let hasAdmin = roles.includes("Admin");
let hasSuper = roles.some(role => role.startsWith("Super"));
console.log("Contains Admin:", hasAdmin);
console.log("Has Super role:", hasSuper);


//Exercise8

let nestedArray: (number | number[])[] = [1, [2, 3], [4, [5, 6]]];
let flattenedArray = nestedArray.flat(Infinity);
console.log(flattenedArray);

//Exercise9

let arr1: number[] = [1, 2, 3, 4];
let arr2: number[] = [3, 4, 5, 6];
let uniqueArray = [...new Set([...arr1, ...arr2])];
console.log(uniqueArray);

//Exercise10

interface Employee {
    name: string;
    age: number;
    position: string;
  }
  
  let employees: Employee[] = [
    { name: "John Doe", age: 30, position: "Developer" },
    { name: "Jane Doe", age: 25, position: "Designer" },
    { name: "Bob Smith", age: 40, position: "Manager" },
  ];
  
  let filteredEmployees = employees.filter(employee => employee.age > 30);
  console.log(filteredEmployees);