//1 task
function calcRectangleArea(width = 1, height = 1) {
    try {
       if (!Number.isFinite(width) || !Number.isFinite(height))
            throw new Error("You have not entered a number");
       else
            return width * height;
    } 
    catch (exception) {
        console.log(exception.message);
        return NaN;
    }
 }
 console.log(calcRectangleArea(null,undefined)); 

//2 task
function checkAge()
{
    let age = prompt("Enter your age");
    try {
        if(age === "")
            throw new Error("The field is empty! Please enter your age");
        age = +age;
        if (!Number.isFinite(age))
            throw new Error("You have not entered a number");
        else if  (age < 14)
            throw new Error("You are younger than 14 years old");
        else
            alert("You can watch a movie!");
    } 
    catch (exception) {
        alert(exception.name + " : " + exception.message);
    }
}
checkAge(); 

//3 task
class MonthException{
    constructor(message){
        this._name = "MonthException";
        this._message = message;
    }
    get name(){
        return this._name;
    }
    get message(){
        return this._message;
    }
}

function showMonthName(monthNum) {
    try {
        if(!Number.isInteger(+monthNum) || typeof monthNum == "boolean" || typeof monthNum == "object") {
            throw new MonthException("Incorrect month number. You entered not a integer number");
        }
        if(monthNum > 12) {
            throw new MonthException("Incorrect month number. You entered number that more than 12");
        }
        if(monthNum <= 0) {
            throw new MonthException("Incorrect month number. You entered number that less than 1");
        }
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        return monthNames[monthNum - 1];
    }
    catch(MonthException){
        return MonthException.name + "\n" + MonthException.message;
    }
}
console.log(showMonthName(-8)); 
console.log(showMonthName(5)); 
console.log(showMonthName(13));
console.log(showMonthName(11.1)); 
console.log(showMonthName(true)); 

//4 task
function showUser(id) {
    try {
        if (!Number.isInteger(+id) || typeof id == "boolean" || typeof id == "object")
            throw new Error("You did not enter an integer number: " + id);
        if (+id < 0)
            throw new Error("ID must not be negative: " + id);
        return {id: id}
        
    } catch (Error) {
        console.log(Error.name + " : " + Error.message);
    }
}

function showUsers(ids) 
{
    const correctIDs = [];
    for (id of ids)
    {
        if (showUser(id) !== undefined)
        correctIDs.push(showUser(id))
    }
    return correctIDs;
}
console.table(showUsers([null, 7, -12, 44, undefined, 22, "some string", 0,-115, true]));
