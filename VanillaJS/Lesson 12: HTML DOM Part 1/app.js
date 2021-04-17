// Objects in HTML have Properties That Can Be Accessed and Modified.
let strings = "This was previously used in Manipulating HTML";
document.getElementById("DOM").innerHTML = strings;



// The Window Object Represents An Open Window In A Browser. New Window Object is Created For Each iframe Tag.

// Window InnerHeight and InnerWidth Property
console.log(`PROPERTIES OF WINDOW OBJECT >>>\n  Inner Height: ${window.innerHeight}\n  Inner Width: ${window.innerWidth}`);


// Location Object of Window
console.log(`LOCATION OBJECT>>>\n Hostname: ${window.location.hostname},\n Port: ${window.location.port}, \n Get Query String: ${window.location.search} `); // Any Search Parameter in URL Will Be Printed with Search. Ex: In URL if There is Search Parameter: ?variable=12, Then It Will Be Fetched By Search Property of Location.

// location.href Redirects URL in Same Window.
function moreprop () {
  if (window.confirm("Do You Want To Visit W3Schools?")) {
    window.location.href = "https://www.w3schools.com/jsref/obj_window.asp";
  }
}
function moremeth () {
  if (window.confirm("Do You Want To Visit W3Schools?")) {
    window.location.href = "https://www.w3schools.com/jsref/obj_window.asp";
  }
}



// History Object of Window // History is Actually BOM and Not DOM, i.e Browser Object Model.

function beck () {
  window.history.back(); // Visit Some Site And Come To Localhost To Make It Work.
  // Alternatively You Can Use window.history.go(-n) To Go Back n Number of Times
}

function frent () {
  window.history.forward(); // Visit Some Site and Press Back Button on Browser, Then Use The Forward Button To Make It Work.
  // Alternatively You Can Use window.history.go(n) To Go Forward n Number of Times
}




// Methods Of Window Object (Not Complete List. Google For More Methods.)
console.log("Window OBJECT METHODS >>>");

// Alert and Prompt // REFRESH TO SEE AGAIN.
window.alert(strings);
let input = window.prompt(`Enter Your Name:`);
console.log(`Your Name is ${input}`);

// Confirm // window.open() Opens New Tab With Given URL
function confirmnext() {
  if(window.confirm("Do You Want To Go To Index?")) {
    window.open("http://127.0.0.1:5500/VanillaJS/");
  }
}   // Most Advertising Websites Use window.open() To Create Popups and window.setTimeout() For Wait Time in URL Shorteners.

// Base64 Encoding and Decoding is Commonly Used To Hide Critical Data in a URL requested Using Get Method.
let data = input;
let encodedData = window.btoa(data);
console.log(`Encoded Data: ${encodedData} Decoded Data: ${window.atob(encodedData)}`);



//