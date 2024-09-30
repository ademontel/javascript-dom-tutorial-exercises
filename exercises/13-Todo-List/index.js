// Your code here
//
let spans = document.querySelectorAll("span");
spans.forEach((span) => {
    span.addEventListener("click", function(evento){
        evento.target.parentElement.remove();
    })
})
const toDoList = document.querySelector("#toDoList");
const addtoDo = document.querySelector("#addToDo");
addtoDo.addEventListener("keypress", (e) =>{
    console.log(e.key);
    if (e.key === 'Enter') {
        const newElement = document.createElement("li");
        const newSpan = document.createElement("span");
        const newI = document.createElement("i");
        newI.classList.add("fa","fa-trash");
        newSpan.appendChild(newI);
        newElement.appendChild(newSpan);
        const textNode = document.createTextNode(addtoDo.value);
        newElement.appendChild(textNode);
        toDoList.appendChild(newElement);
        addtoDo.value = "";
        newSpan.addEventListener("click", function(evento){
            evento.target.parentElement.remove();
        });     
      }
})


