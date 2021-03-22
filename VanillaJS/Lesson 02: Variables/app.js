// 3 Types: var, let, const
console.log(">>>TYPES OF VARIABLES")

var anyName = 'Variable var';      // var init and declaration. Use $anyname when working with JQuery
console.log(anyName);

let anyLetName = 'Variable let';   // let init and declaration
console.log(anyLetName);

const constName = 'Variable const';  // const init and declaration. Cannot Reassign value to const.

// Primitive Data Types
console.log(">>>PRIMITIVE DATA TYPES")

const named = 'String';  //String
const born = 1337;         //Number, Decimal
const truee = false;       //Boolean
const empty = null;        //Null {Returns Object>Bug}
let undef;                 //Undefined
const sym = Symbol();      //ES6 Primitive>Symbol

console.log(named);
console.log(born);
console.log(truee);
console.log(empty);
console.log(undef);
console.log(sym);

// Reference Data Types {ALWAYS RETURN OBJECT}
console.log(">>>REFERENCE DATA TYPES");

const barray = ['index1.value', 'index2.value', 'index3.value'];              //Array
console.log(barray);

const objectOne = {           //Object
  ID: 'ObjMember',
  Quantity: 30,
}
console.log(typeof objectOne);       
console.log(objectOne.ID, objectOne.Quantity);

const dateyear = new Date();  //Date
console.log(dateyear);