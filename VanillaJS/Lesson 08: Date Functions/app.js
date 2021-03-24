// Date
let now = new Date();                  //Declaration
console.log(now);
now = new Date(1988,3,4,5,6,0);        //Method 1
console.log(now);
now = new Date('1/4/2004');            //Method 2
console.log(now);
now = new Date('September 5 1988');    //Method 3
console.log(now);

// Date Functions // Index 0 = January = Sunday

console.log("Year(Get): ", now.getFullYear());
now.setFullYear(2021);
console.log("Year(SET): ", now.getFullYear());     // FullYear

console.log("Month(Get): ", now.getMonth());
now.setMonth(1);
console.log("Month(Set): ", now.getMonth());       // Month

console.log("Day(Get): ", now.getDay());           // No Set Function

console.log("Date(Get): ", now.getDate());
now.setDate(30);
console.log("Date(Set): ", now.getDate());         // Date

console.log("Hour(Get): ", now.getHours());
now.setHours(23);
console.log("Hour(Set): ", now.getHours());        // Hours

console.log("Minutes(Get): ", now.getMinutes());
now.setMinutes(59);
console.log("Minutes(Set): ", now.getMinutes());   // Minutes

console.log("Seconds(Get): ", now.getSeconds());
now.setSeconds(49);
console.log("Seconds(Set): ", now.getSeconds());   // Seconds

console.log("Milliseconds(Get): ", now.getMilliseconds()); 
now.setMilliseconds(22);
console.log("Milliseconds(Set): ", now.getMilliseconds());  // Milliseconds

console.log("Timestamp: ", now.getTime());   // Shows Timestamp For Time passed Since Date