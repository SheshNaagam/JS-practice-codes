// While Loop
let looper = 0;     // Never use const in Loops.
while( looper < 10) {
  console.log("Current Iteration in Loop: ", looper);
  looper++;
}

// Do-While Loop
do {
  console.log(`I Got Executed Anyway. Loop Will Iterate Only If While Condition is True`);
}
while (looper > 10);    // Condition is False.



// For Loop vs For Each Loop vs For In Loop

// For Loop

let CreamFlavours = ['Vanilla', 'Chocolate', 'Black Current', 'Butterscotch', 'Strawberry', 'Blueberry', 'Mango', 'Pineapple'];

for(let i = 0; i < CreamFlavours.length; i++) {

  console.log(`Flavour in Slot ${i}: ${CreamFlavours[i]}`);

  if (CreamFlavours[i] === 'Butterscotch') {
    console.log(`Butterscotch is available. Ordering...`);
  }
}

// For Each Loop

CreamFlavours.forEach (function(IndexValue, index) {

  console.log(`Flavour in Slot ${index}: ${IndexValue}`);

  if (IndexValue === 'Butterscotch') 
    console.log(`Butterscotch is available. Ordering...`);
});

// For In Loop

for (let index in CreamFlavours) {

    console.log(`Flavour in Slot ${index}: ${CreamFlavours[index]}`);   
  
    if (CreamFlavours[index] === 'Butterscotch') 
      console.log(`Butterscotch is available. Ordering...`);
}


// Mapping: Recieves Function As Argument, Passes Every Element in Array One By One. Convert Data into Array Before Mapping. Following Example Uses Array of Objects. No Need Of Conversion

let CreamShapes = [
  {shape: 'Conical'},
  {shape: 'Cup'},        // Array of Objects.
  {shape: 'Bowl'},

];

const mapper = CreamShapes.map(function (element) {
  return element.shape;
});
console.log(`Ice Cream Types Available: ${mapper}`);