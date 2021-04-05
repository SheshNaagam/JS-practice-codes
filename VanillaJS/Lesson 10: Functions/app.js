// We Have Used Functions Before. Lets Recap and Dive Deep.

// Simple Function

function simple () {
  console.log("I am a Simple Function");
}
simple();

// Parametered Function

function paramfunc(MyName) {

  console.log(`This is a Function with Parameters Passed. Hello ${MyName}`);
}
let AnyName = "Coder";
paramfunc(AnyName);

// Functions with Default Parameter

function deffun(Name="DefaultName"){
  
  console.log(`This is a Function with Default Parameters. In Case Parameters are Not Passed, Default Parameters Will Be Used By Function. Here is Your Name: "${Name}"`);
}
deffun();



// Function Expressions

const fun = function () {
  console.log("I am a Function Expression.");
};

// Function Expression With Default Parameters

const funn = function (MyParameter = "Random Parameter") {
  console.log(`I am a Function Expression With Default Parameters. My Default Parameter is: ${MyParameter}`);
}
funn();



// Immediately Invokable Functions Expressions
(function DemoIIFE () {
  console.log("I am an IIFE. I Get Executed As Soon As I Am Created.");
})();



// Property Methods: These are Different From Normal Functions. They are Functions Inside an Object.

const MathOBJ =  { 
  add: function (a, b) {
    return a+b;
  },
  subs: function (a, b) {
    return a-b;
  },
  multply: function (a, b) {
    return a*b;
  },
  divide: function (a, b) {
    return a/b;
  }
}

console.log(`Property Method Demo: \n 1. Add(5,6):${MathOBJ.add(5, 6)}\n 2. Subtract(10, 30): ${MathOBJ.subs(10, 30)} \n 3. Multiply(4, 8): ${MathOBJ.multply(4, 8)}\n 4. Divide(10, 2): ${MathOBJ.divide(10, 2)}`);


// Modify Or Create Property Methods Outside Object

MathOBJ.diff = function (a, b) {
  return Math.abs(a-b);
} // This Returns Difference, instead of Subtracting

console.log(`Difference(80, 88): ${MathOBJ.diff(10, 30)}`);