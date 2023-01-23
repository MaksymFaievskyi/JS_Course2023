//1 task 
let x = 1;
let y = 2;

let res1 = String(x) + y;
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = String(Boolean(x)) + y; // Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = Boolean(x) || y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = Math.sqrt(x - y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // "number"

//2 task 
let number = +prompt("Enter a number:","14");
if(Number.isFinite(number)){
    number > 0 && number % 2 ===0 ? console.log("Number " + number + " is even and positive!") : console.log("Number " + number + " is not even or positive!");
    number % 7 ===0 ? console.log("Number " + number + " is a multiple of 7") : console.log("Number " + number + " is not a multiple of 7");
}else{
    console.log("You have not entered a number");
}

//3 task
const myArr = [];
myArr.push(18);
myArr.push("SoftServe");
myArr.push(true);
myArr.push(null);
alert("The number of elements is " + myArr.length);
let value = prompt("Enter a value:","false");
//convert value to correct type
if(Number.isFinite(Number(value))) {
    myArr.push(Number(value));
} else if(value === "true" || value === "false") {
    myArr.push(value === "true");
} else if(value === "undefined"){
    myArr.push(undefined);
} else if(value === "null"){
    myArr.push(null);
} else{
    myArr.push(value);
}
alert("The fifth element is " + myArr[4]);
myArr.shift();
let resultString = "";
myArr.forEach((item, index) => {
    resultString +=`${item} has index ${index} \n`;
});
alert(resultString);

//4 task
let citiesString = "";
let cities = ["Rome", "Lviv", "Warsaw"]; 
console.log(cities);
cities.forEach((item, index) => {
if(index != cities.length - 1)
    citiesString += item + "*";
else
    citiesString += item;
});
alert(citiesString);

//5 task
const isAdult = +prompt("How old are you?");
if(Number.isInteger(isAdult))
    isAdult >= 18 ? alert("You are of legal age") : alert("You are still too young");
else    
    alert("You have not entered a integer number");

//6 task
let firstSide = +prompt("Enter the first side of the triangle:");
while(1){
    if(Number.isFinite(firstSide))
        break;
    else
        firstSide = +prompt("Incorrect data.Enter the first side of the triangle:");
}
let secondSide = Number(prompt("Enter the second side of the triangle:"));
while(1){
    if(Number.isFinite(secondSide))
        break;
    else
        secondSide = +prompt("Incorrect data.Enter the second side of the triangle:");
}
let thirdSide = +prompt("Enter the third side of the triangle:");
while(1){
    if(Number.isFinite(thirdSide))
        break;
    else
    thirdSide = +prompt("Incorrect data.Enter the third side of the triangle:");
}
const halfPerimetr = (firstSide + secondSide + thirdSide) / 2;
const areaTriangle = Math.sqrt(halfPerimetr * (halfPerimetr - firstSide) * (halfPerimetr - secondSide) * (halfPerimetr - thirdSide));
if(!isNaN(areaTriangle))
    console.log("Area of the triangle: " + areaTriangle.toFixed(3));
else
    console.log("You entered the wrong sides of the triangle");
const maxSide = Math.max(firstSide,secondSide,thirdSide);
if (maxSide === firstSide)
    firstSide**2 === secondSide ** 2 + thirdSide ** 2 ? console.log("The triangle is right-angled") : console.log("The triangle is not right-angled"); 
else if (maxSide === secondSide) 
    secondSide**2 === firstSide ** 2 + thirdSide ** 2 ? console.log("The triangle is right-angled") : console.log("The triangle is not right-angled");
else
    thirdSide**2 === firstSide ** 2 + secondSide ** 2 ? console.log("The triangle is right-angled") : console.log("The triangle is not right-angled");

//7 task
//the first way to get the time from the system
let firstData = Number(new Date().toLocaleTimeString().slice(0,2)); 

// first conditional construction
if(firstData >= 23 || firstData < 5)
    alert("Good night!");
else if(firstData >= 5 && firstData < 11)
    alert("Good morning!");
else if(firstData >= 11 && firstData < 17)
    alert("Good day!");
else 
    alert("Good evening!"); 

//the second way to get the time from the system
const secondData = new Date();
const hour = secondData.getHours();
// second conditional construction
switch (hour) {
  case 23:
  case 0: 
  case 1: 
  case 2: 
  case 3:
  case 4:
    alert("Good night!");
    break;
  case 5:
  case 6: 
  case 7: 
  case 8: 
  case 9:
  case 10:
    alert("Good morning!");
    break;
  case 11:
  case 12: 
  case 13: 
  case 14: 
  case 15:
  case 16:
    alert("Good day!");
    break;
  default:
    alert("Good evening!"); 
}

