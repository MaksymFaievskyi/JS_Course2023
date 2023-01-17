//2 task
console.log("Faievskyi");

//3 task
let myBrother; 
let myAge;
myBrother = "Danylo";
myAge = 18;
console.log(myBrother,myAge);
myBrother = myAge;
console.log(myBrother,myAge);

//4 task
const object = {
  String : "string",
  Number : 15,
  Boolean : true,
  Undefined : undefined,
  Null : null
};
console.log(object);

//5 task
let isAdult = confirm("You reach the age of majority?");
console.log(isAdult);

//6 task
let myName, mySurname, myGroup, myBirthYear;
myName = "Faievskyi";           //String
mySurname = "Maksym";           //String
myGroup = 736;                  //Number
myBirthYear = 2004;             //Number
const myMaritalStatus = false;  //Boolean
console.log(typeof(myName),typeof(mySurname),typeof(myGroup),typeof(myBirthYear),typeof(myMaritalStatus));
console.log("Number\n group:" + myGroup + ", birth year:"+ myBirthYear);           //Output numbers
console.log("Boolean\n marital status:" + myMaritalStatus);                        //Output boolean
console.log("String\n name:" + myName +", surname:" + mySurname);                  //Output strings
let myNull = null;              //Null
let myUndefined = undefined;    //Undefined
console.log("Null has type: " + typeof(myNull) + " , Undefined has type: " + typeof(myUndefined));

//7 task
const login = prompt("Enter your login:", "User");
const email = prompt("Enter your email:", "usermale@gmail.com");
const password = prompt("Enter your password:", "qwerty");
alert("Dear "+ login + ", your email is " + email + ", your password is " + password + ".");

//8 task
const secPerHour = 60 * 60;
const secPerDay = secPerHour * 24;
const secPerMonth = secPerDay * 31; //31 days in a month
alert("Seconds per hour: "+ secPerHour + "\nSeconds per day: " + secPerDay + "\nSeconds per month: " + secPerMonth);


















