let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
let newDiv = document.createElement("div");
const text = document.createTextNode("Hello World");
newDiv.style.background = "yellow";

document.body.appendChild(newDiv); 
newDiv.appendChild(text);
});
