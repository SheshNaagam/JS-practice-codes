// If Else
namename = "Becoming Pro."
if (typeof(namename) !== 'undefined') {
  console.log(`Coder is ${namename}.`);
}
else{
  console.log(`Try Harder. You are still Not ${namename}`);
}
// Used Template Strings
// Used Strict Comparison Operators
// Using Undefined check is more efficient logic

// ElseIf Ladder
let percent;

function caller (percent) {
  if (percent >= 90) {
    console.log(`Percent Rank: S with Percentage: ${percent}`);
  }
  else if (percent >= 70) {
    console.log(`Percent Grade: A with Percentage: ${percent}`);
  }
  else if (percent >= 50) {
    console.log(`Percent Grade: B with Percentage: ${percent}`);
  }
  else if (percent >= 30) {
    console.log(`Percent Grade: C with Percentage: ${percent}`)
  }
  else {
    console.log("FAILED!!! Better Luck Never!");
  }}

  // Ternary Operator
  console.log(typeof(percent) != 'undefined' ? 'Run caller(percent)' : 'Please enter percent = x');