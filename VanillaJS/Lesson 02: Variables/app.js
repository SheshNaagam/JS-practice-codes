// 3 Types: var, let, const
console.log(">>>TYPES OF VARIABLES")

var anyName = 'Variable var';      // var init and declaration. Use $anyname when working with JQuery
console.log(anyName);

let anyLetName = 'Variable let';   // let init and declaration
console.log(anyLetName);

const constName = 'Variable const';  // const init and declaration. Cannot Reassign value to const.
console.log(constName);

// Primitive Data Types
console.log(">>>PRIMITIVE DATA TYPES")

const named = 'Random Text';  //String
const born = 1337;         //Number, Decimal
const truee = false;       //Boolean
const empty = null;        //Null {Returns Object>Bug}
let undef;                 //Undefined
const sym = Symbol();      //ES6 Primitive>Symbol

console.log("String: ", named);
console.log("Number: ", born);
console.log("Boolean: ", truee);
console.log("Null: ", empty);
console.log("Undefined: ", undef);
console.log("Symbol: ", sym);

// Reference Data Types {ALWAYS RETURN OBJECT}
console.log(">>>REFERENCE DATA TYPES");

const barray = ['index1.value', 'index2.value', 'index3.value'];              //Array
console.log("Array: ", barray);

const objectOne = {           //Object
  ID: 'ObjMember',
  Quantity: 30,
}
console.log("Return Type for Object: ", typeof objectOne);       
console.log("Object Members: ", objectOne.ID, objectOne.Quantity);

const dateyear = new Date();  //Date
console.log("Date: ", dateyear);