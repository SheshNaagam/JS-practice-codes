// If Else
let namename;
function namer (namename) {
// Used Template Strings
// Used Strict Comparison Operators
// Using Undefined check is more efficient logic

  if (typeof(namename) !== 'undefined')
    console.log(`Coder is ${namename}.`);

  else
    console.log(`Enter Your Name. Set "namename = x". Your Name is Still ${namename}`);

}
namer(namename);

// ElseIf Ladder
let percent;
let attendance;   // Used Later in Switch Statement

function caller (percent) {
  if (percent >= 90) {
    console.log(`Percent Rank: S with Percentage: ${percent}`);
    attendance = 'High';
  }
  else if (percent >= 70) {
    console.log(`Percent Grade: A with Percentage: ${percent}`);
    attendance = 'Good';
  }
  else if (percent >= 50) {
    console.log(`Percent Grade: B with Percentage: ${percent}`);
    attendance = 'Moderate';
  }
  else if (percent >= 30) {
    console.log(`Percent Grade: C with Percentage: ${percent}`);
    attendance = 'Moderate';
  }
  else if (percent < 30) {
    console.log("FAILED!!! Better Luck Never!");
    attendance = 'Low';
  }
  else {
    console.log("You Must Define Your Percentage in Console using percent = x");
    attendance = 'None';
  }
}
caller(percent);


// Switch Case Statement
function attend (attendance) {

  switch (attendance) {
    case 'High':
      console.log("High Attendance");
      break;
    case 'Good':
      console.log("Good Attendance");
      break;
    case 'Moderate':
      console.log("Moderate Attendance")
      break;
    case 'Low':
      console.log("Failed Attendance!") ;
      break;
    case 'None':
      console.log("Run runall() Function After Setting Up namename and percent.");
      break;
  }
}
attend(attendance);

// Ternary Operator
console.log(typeof(attendance) === "undefined" ? "Attendance is undefined. Set Percentage To Autocalculate Attendance." : "You are Welcome To Change Values of namename and percent");

function runall(){
  namer(namename);
  caller(percent);
  attend(attendance);
}