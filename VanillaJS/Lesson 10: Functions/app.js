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