// Manipulating HTML Dynamically

//ES5 Style Implementation
const insertHTML = "<ul type='square' style ='color:gold'>" +
"<li>1. This is called an InnerHTML.</li>" +
"<li>2. You can Insert HTML into HTML Document Using InnerHTML.</li>" +
"<li>3. Here It Is Implemented in ES5 Standards.</li>" +
"<li>4. ES5 Makes It Difficult To Insert HTML With JS.</li>" +
"<br><br>" +
"</ul>";

document.getElementById('ES5').innerHTML += insertHTML;

//ES6 Style Implementation WITH TEMPLATE LITERALS
const innertHTML = `
  <ul type="star"><strong><h3>
    <li>1. This is another InnerHTML.</li>
    <li>2. Here It Is Implemented in ES6 Standards.</li>
    <li>3. ES6 Makes It Very Easy To Manipulate HTML Through JS.</li></strong></h3>
  </ul>
`;

document.body.innerHTML += innertHTML;