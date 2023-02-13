//1 task
let handleWindow = window.open("", "", "width=300, height=300");

setTimeout(function() { 
    handleWindow.resizeTo(500,500);
}, 2000);

setTimeout(function() { 
    handleWindow.moveTo(200, 200);
}, 4000);

setTimeout(function() { 
    handleWindow.close();
}, 6000);

//2 task
function changeCSS(){
    let pElem = document.getElementById("text");
    pElem.style.color = "orange";
    pElem.style.fontSize = "20px";
    pElem.style.fontFamily = "Comic Sans MS";  
}
let btn = document.getElementById("elem");
btn.addEventListener("click", changeCSS);

//3 task 
function clickElem(){
    document.body.style.background = "blue";
}
function dlclickElem(){
    document.body.style.background = "pink";
}
function mousedownElem(){
    document.body.style.background = "brown";
}
function mouseupElem(){
    document.body.style.background = "white";
}
function mouseoverElem(){
    document.body.style.background = "yellow";
}
function mouseoutElem(){
    document.body.style.background = "white";
}

//4 task 
function deleteElem(){
    const peopleName = document.getElementById("peopleName");
    peopleName.options[peopleName.selectedIndex].remove();
}

//5 task 
let liveButton = document.getElementById("liveButton");
liveButton.addEventListener("mouseover", mouseOver);
liveButton.addEventListener("mouseout", mouseOut);
liveButton.addEventListener("click", buttonClick);

function mouseOver(){
    div.insertAdjacentHTML("beforeend", "<p>Mouse on me!</p>");
}

function mouseOut(){
    div.insertAdjacentHTML("beforeend", "<p>Mouse is not on me!</p>");
}

function buttonClick(){
    div.insertAdjacentHTML("beforeend", "<p>I was pressed!</p>");
}

//6 task 
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");
heightOutput.innerText = window.innerHeight;
widthOutput.innerText = window.innerWidth;
window.addEventListener("resize", reportWindowSize);

function reportWindowSize() {
  heightOutput.innerText = window.innerHeight;
  widthOutput.innerText = window.innerWidth;
}

//7 task 
const arrCities = [];
let country = document.getElementById("country");
let cities = document.getElementById("cities");
country.addEventListener("change", changeCountry)
cities.addEventListener("change", changeCities)

function removeOptions(selectElement) {
    let i, lengthSelect = selectElement.options.length - 1;
    for(i = lengthSelect; i >= 0; i--) {
       selectElement.remove(i);
    }
}

function changeCountry(){
    removeOptions(cities);
    for (let i = 0; i < arrCities[country.selectedIndex].length; i++) {
        cities.insertAdjacentHTML("beforeend", `<option>${arrCities[country.selectedIndex][i]}</option>`); 
    }
    changeCities();
}

function changeCities(){
    document.getElementsByTagName("p")[0].innerText = "";
    const text = document.createTextNode(`${country.options[country.selectedIndex].innerHTML}, ${cities.options[cities.selectedIndex].innerHTML}`);
    document.getElementsByTagName("p")[0].appendChild(text);
}

function addCity(country, city){
    document.querySelectorAll("#country > option").forEach((element, index) => {
        if(element.innerHTML === country){
            arrCities.push([]);
            arrCities[index].push(city)
        }
    });
}
addCity("Germany", "Berlin");
addCity("Germany", "Hamburg");
addCity("Germany", "Munich");
addCity("USA", "New York");
addCity("Germany", "Frankfurt");
addCity("Germany", "Stuttgard");
addCity("USA", "Los Angeles");
addCity("Ukraine", "Kyiv");
addCity("USA", "Chicago");
addCity("USA", "Houstan");
addCity("Ukraine", "Lviv");
addCity("Ukraine", "Odesa");

changeCountry();