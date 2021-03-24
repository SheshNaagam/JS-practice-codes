// Array
const Arr = [1, "String", {a:1, b:2}, true, null, new Date()];    // Array is Data Structure Comprising Multiple Data Types.
console.log("Mixed Array: ", Arr, "Array Length: ", Arr.length);    // Length Property of Array
const Arr2 = new Array(2,3,4,5,6,7,8,9,10);
console.log("New Array Initialisation: ", Arr2);    // Another Way to Initialise Array in JS.
console.log("Array Value From 3rd Index: ", Arr2[2]);    // Array Stores Values in Indexes Starting with 0

// Array Functions

console.log("Array Index From Value: ", Arr2.indexOf('String'));   // Returns -1 If Wrong Value.
console.log("Array Object Property To Check Array Type: ", Array.isArray(Arr2));   // For Checking Argument is Array.
console.log("Array 1 and Array 2 Concatenated: ", Arr.concat(Arr2));    // Append Entire Array To The End
Arr2.push("NEW VALUE");    // Append New Value in Array.
console.log("Array with Appended Value: ", Arr2);
Arr2.pop();    // Delete Last Value From Array.
console.log("Array with Deleted Last Value: ", Arr2);
Arr2.unshift("NEW VALUE");   // Appending Value To Start of Array.
console.log("Value Appended To Start: ", Arr2);
Arr2.shift();
console.log("Value Deleted From Start: ", Arr2);
Arr2.splice(4, 7);   // Same As Slicing String, Last Argument is Exclusive meaning 'Till index 7 Will be Sliced NOT index 7'
console.log("Splicing of Array: ", Arr2);
console.log("Reversed Array: ", Arr2.reverse());   // Reversing Array
console.log("Array Sorted Asc-Dsc", Arr2.sort());  // Works only for Sorting Strings.
console.log("Sorting Number Array: ", Arr2.sort(function (x, y) { return x - y }));   // This is Logic Needed To Sort Numberical Arrays. Function Compares 2 Values and Sorts them Accordingly. Use y - x for Reverse Sorting from Dsc-Asc.

// Find Function Requires Function Declared Beforehand
const condition = num => num % 2 === 0 /* Always use Strict === To Avoid Errors.*/   // This Logic Will Return First Even Number in Array. // Also The Way This Function is Declared is Called Arrow Function.
console.log("Find Function For Even Number: ", Arr2.find(condition));   // Make Your Own Conditions using <>!== fibonacci etc.
