//1 task
const myArr = [2,3,4,5];
let resultFor  = 1;
let resultWhile  = 1;
let i = 0;

for(i = 0; i < myArr.length;i++)
{
    resultFor *= myArr[i];
}
i = 0;
while (i < myArr.length)
{
    resultWhile *= myArr[i];
    i++;
}
console.log(resultFor,resultWhile);

//2 task
for(let i = 0; i <= 15; i++) {
    i % 2 === 0 ? console.log(i +" is even") : console.log(i +" is odd");
}

//3 task
function randArray(k = 1)
{
    if(k < 1){
        alert("You entered a number less than one!");
        return undefined;
    }
    const myArray = [];
    for(let i = 0; i < k; i++)
        myArray.push(Math.floor(Math.random() * (500 - 1) + 1));
    return myArray;
}
console.log(randArray(10));

//4 task
function raiseToDegree(a = 1,b = 1)
{
    if(Number.isInteger(a) && Number.isInteger(b))
        return Math.pow(a,b);
    else
    {
        alert("You did not enter an integer number");
        return NaN;
    }
}
const firstNum = +prompt("Enter the first number","5");
const secondNum = +prompt("Enter the second number","3");
alert("Result: " + raiseToDegree(firstNum, secondNum));

//5 task
function findMin() {
    if(arguments.length === 0){
        console.log("You have not entered any numbers");
        return NaN;
    }
    let minNumber = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (!Number.isFinite(+arguments[i]) || typeof arguments[i] == "boolean" || typeof arguments[i] == "object") {
            console.log(arguments[i] + " is not a number");
            continue;
        }
        if(arguments[i] < minNumber) 
            minNumber = arguments[i];
    }
    return minNumber;
 }
 console.log(findMin(12, null, 14, 4, true, -4, 0.2, undefined));

//6 task
function findUnique(arr) {
    let valuesAlreadySeen = [];
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i]
        if (valuesAlreadySeen.indexOf(value) === -1) 
        {
            valuesAlreadySeen.push(value);
        }
        else
        {
            return false
        }
    }
    return true;
}
console.log(findUnique([1, 2, 3, 5, 11]));

//7 task
function lastElem(array = [NaN],count = 1)
{
    if(count === 1)
        return array[array.length - 1];
    const outputArray= [];
    for(let i = array.length - 1;i >= 0; i--)
    {
        if(count > 0)
        {
            outputArray.unshift(array[i]);
            count--;
        }
        else 
            break;
    }
    return outputArray;
}   
console.log(lastElem([3, 4, 10, -5, 17, 28, -7],4))

//8 task 
function changeStringToUpper(pattern){
    let outputStr = "";
    let prevLetter;
    for (let i = 0; i < pattern.length; i++)
    {
        if (prevLetter === " " || i === 0)
        {
            outputStr += pattern[i].toUpperCase();
            prevLetter = pattern[i];
        }
        else
        {
            outputStr += pattern[i];
            prevLetter = pattern[i];
            
        }
    }
    return outputStr;
}
console.log(changeStringToUpper("canada to buy nasams system for ukraine!"));
