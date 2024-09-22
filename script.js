let output;

output = document.all;
output = document.all[9];
output = document.all.length;

output = document.documentElement;
output = document.head;
output = document.body;

output = document.head.children;
output = document.body.children;

output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;

// document.forms[0].id = "new-id";

// output = document.links;
// output = document.links[0];
// output = document.links[0].href;
// output = document.links[0].href = "https://facebook.com";
// output = document.links[0].id = "google-link";
// output = document.links[0].className = "google-class";
// output = document.links[0].classList;

// output = document.images;
// output = document.images[0];
// output = document.images[0].src;

// const forms = Array.from(document.forms);
// forms.forEach((form) => console.log(form));

// console.log(output);

//document.getElementBy()

console.log(document.getElementById("app-title"));
console.log(document.getElementById("app-title").id);
console.log(document.getElementById("app-title").className);
console.log(document.getElementById("app-title").getAttribute("id"));

// Set Attributes

document.getElementById("app-title").title = "Shopping List";
document.getElementById("app-title").setAttribute("class", "title");

const title = document.getElementById("app-title");

// Get/change Content

console.log(title.textContent);
title.textContent = "Hello World";
title.innerText = "Hello Again";
title.innerHTML = "<strong>Shopping List</strong>";

// Change Styles
title.style.color = "Red";
title.style.backgroundColor = "black";
title.style.padding = "10px";
title.style.borderRadius = "10px";

// document.querySelector()

console.log(document.querySelector("h1"));
console.log(document.querySelector("#app-title"));
console.log(document.querySelector(".container"));
console.log(document.querySelector("input[type='text']"));
console.log(document.querySelector("li:nth-child(2)").innerText);

// const secondItem = document.querySelector("li:nth-child(2)");
// secondItem.innerText = "Apple Juice";
// secondItem.style.color = "Red";

const secondItem = document.querySelector("li:nth-child(3)");
secondItem.innerText = "Orange Juice";
secondItem.style.color = "green";

// Use these methods on other elements

const list = document.querySelector("ul");
console.log(list);

const firstItem = document.querySelector("li");
firstItem.style.color = "blue";
