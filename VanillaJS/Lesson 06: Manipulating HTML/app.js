// Manipulating HTML Dynamically
var1 = "Beginner ";
var2 = 2;
var3 = " Advanced Soon!";
//ES5 Style Implementation
const insertHTML = "<ul type='square' style ='color:red'>" +
"<li>1. This is called an InnerHTML.</li>" +
"<li>2. You can Insert HTML into HTML Document Using InnerHTML.</li>" +
"<li>3. Here It Is Implemented in ES5 Standards.</li>" +
"<li>4. ES5 Makes It Difficult To Insert HTML With JS.</li>" +
"<li>5. Random Variables Below</li><br>" + var1 + var2 + var3 +
"<br><br>" +
"</ul>";

document.getElementById('ES5').innerHTML += insertHTML;

//ES6 Style Implementation WITH TEMPLATE LITERALS
const innertHTML = `
  <ul type="disc" style = "color:red"><strong><h3>
    <li>1. This is another InnerHTML.</li>
    <li>2. Here It Is Implemented in ES6 Standards.</li>
    <li>3. ES6 Makes It Very Easy To Manipulate HTML Through JS.</li>
    <li>4. Random Variables Below</li><br>${var1} ${var2} ${var3}</strong></h3>
  </ul>
`;

document.body.innerHTML += innertHTML;