//Q1
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newarr=(arr1.concat(arr2));
console.log(newarr);

// Q2
let names1 = ["Alice", "Bob"];
let names2 = ["Charlie", "David"];
let names3 = ["Eve", "Frank"];

let newnames=(names1.concat(names2,names3));
console.log(newnames);

// Q3
let arr1 = [true, false];
let arr2 = ["Yes", "No"];
let arr3 = arr1.concat(arr2, [1, 2, 3]);
console.log(arr3);

//Output
//Error


// Q4

let numbers = [10, 20, 30, 40, 50];
let newnum=numbers.copyWithin(0,3);
console.log(newnum);


//Q5

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
fruits.copyWithin(1, 3, 5);
console.log(fruits);

 //Output of the above code
// [ 'apple', 'date', 'elderberry', 'date', 'elderberry' ]

//Q6

let arr = [1, 2, 3, 4, 5, 6];
arr.copyWithin(0, 2,6);
console.log(arr);

//Q7

let numbers = [2, 4, 6, 8, 10];
let alleven =numbers.every(num=>num%2==0);
console.log(alleven);


//Q8

let words = ["apple", "banana", "avocado"];
let result = words.every(word => word.startsWith("a"));
console.log(result);

//Output for above code
//false

//Q9

function areAllNumbersPositive(arr: number[]): boolean {
    return arr.every(num => num > 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(areAllNumbersPositive(numbers)); 
// Output: true

let mixedNumbers = [1, -2, 3, 4, 5];
console.log(areAllNumbersPositive(mixedNumbers));
 // Output: false




//Q10

let arr = [1, 2, 3, 4, 5];
arr.fill(0);
console.log(arr); 

// Output: [0, 0, 0, 0, 0]

//Q11

let arr = ["A", "B", "C", "D", "E"];
arr.fill("X", 1, 4);
console.log(arr);

//Output for the above
//[ 'A', 'X', 'X', 'X', 'E' ]


//Q12

let statu = ["pending", "pending", "pending", "pending", "pending"];
statu.fill("Done",2,5);
console.log(statu);