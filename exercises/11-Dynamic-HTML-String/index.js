let myString = "<p>Hello!</p> <strong>My friend</strong>, ";
document.write(myString);
const fecha = new Date();
const anio = fecha.getFullYear();
const newH1 = document.createElement("h1");
newH1.innerText = anio;
document.body.appendChild(newH1);