// Array
const Arr = [1, "String", {a:1, b:2}, true, null, new Date()];    // Array is Data Structure Comprising Multiple Data Types.
console.log("Mixed Array: ", Arr, "Array Length: ", Arr.length);    // Length Property of Array
const Arr2 = new Array();
console.log("New Array Initialisation: ", Arr2);    // Another Way to Initialise Array in JS.
console.log("Array Value From 3rd Index: ", Arr[2]);    // Array Stores Values in Indexes Starting with 0

// Array Functions

console.log("Array Index From Value: ", Arr.indexOf('String'));   // Returns -1 If Wrong Value.
console.log("Array Object Property To Check Array Type: ", Array.isArray(Arr));   // For Checking Argument is Array.
Arr.push("NEW VALUE");    // Append New Value in Array.
console.log("Array with Appended Value: ", Arr);
