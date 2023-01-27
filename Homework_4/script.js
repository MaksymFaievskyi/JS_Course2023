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
        this.name = "MonthException"
        this.message = message;
    }
    name(){
        return this.name;
    }
    message(){
        return this.message;
    }
}

function showMonthName(month) {
    try {
        if(!Number.isInteger(+month) || typeof month == "boolean" || typeof month == "object") {
            throw new MonthException("Incorrect month number. You entered not a integer number");
        }
        if(month > 12) {
            throw new MonthException("Incorrect month number. You entered number that more than 12");
        }
        if(month <= 0) {
            throw new MonthException("Incorrect month number. You entered number that less than 0");
        }
        switch (month) {
            case 1:
                return "January";
                break;
            case 2:
                return "February";
                break;
            case 3:
                return "March";
                break;
            case 4:
                return "April";
                break;
            case 5:
                return "May";
                break;
            case 6:
                return "June";
                break;  
            case 7:
                return "July";
                break;
            case 8:
                return "August";
                break;
            case 9:
                return "September";
                break;
            case 10:
                return "October";
                break;
            case 11:
                return "November";
                break;
            case 12:
                return "December";
                break;        
            default:
                throw new MonthException("Oops. Something went wrong");
        }
    }
    catch(MonthException){
        return MonthException.name + "\n" + MonthException.message;
    }
}
console.log(showMonthName(5)); 
console.log(showMonthName(14)); 

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