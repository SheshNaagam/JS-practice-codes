// Type Conversion
let variable;

// Number To String // ToString() can also be used.
console.log(">>> NUMBER TO STRING");
variable = 1337;
console.log("Number: ", variable);
var2str = String(variable);
console.log("String: ", var2str)

// Array To String
console.log(">>> ARRAY TO STRING")
console.log("Array: ", [1,2,"string", 4]);
console.log("String: ", String([1,2,"string", 4]));

// Boolean To String
console.log(">>> BOOLEAN TO STRING");
console.log("Boolean: ", true);
console.log("String: ", String(true));

// Date To String
console.log(">>> DATE TO STRING")
console.log(new Date());
console.log("String:", String(new Date()));

// String To Number
console.log(">>> STRING TO NUMBER")
console.log("String: ", var2str);
console.log("Number: ", Number(var2str));

// Array To Number // Returns NaN>Not a Number
console.log(">>> ARRAY TO NUMBER")
console.log("Array: ", [1,2,"string",4]);
console.log("Number: ", Number([1,2,"10",4]));

// Boolean To Number
console.log(">>> BOOLEAN TO NUMBER")
console.log("Boolean: ", true, false, null);
console.log("Number: ", Number(true), Number(false), Number(null));

// Date To Number // Useless
console.log(">>> DATE TO NUMBER");
console.log("Date: ", new Date('December 13, 1999'));
console.log("Number: ", Number(new Date('December 13, 1999')));

// String To Array // Does Not Separate Chars
console.log(">>> STRING TO ARRAY")
console.log("String: ", var2str);
console.log("Array: ", Array(var2str));

// String To Boolean
console.log(">>> STRING TO BOOLEAN")
console.log("String: ", String(null));
console.log("Boolean: ", Boolean(String(null)));