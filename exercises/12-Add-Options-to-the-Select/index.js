let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// Your code here

countries.forEach((country) => {
    const parent = document.querySelector("#mySelect");
    const newOption = document.createElement("option");
    newOption.value = country;
    newOption.innerText = country;
    parent.appendChild(newOption);
})

const selElement = document.querySelector("#mySelect");
selElement.addEventListener("change", () => {
    const selCountry = selElement.value;
    alert(selCountry);
})