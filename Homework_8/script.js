//1 task
function upperCase(pattern){
    if (/^[A-Z]/.test(pattern)) {
        return console.log("String's starts with uppercase character");
    } else if(/^[a-z]/.test(pattern)){
        return console.log("String's not starts with uppercase character");
    } else {
        return console.log("Incorrect data");
    }
}
upperCase('regexp');
upperCase('RegExp');
upperCase('%RegExp');

//2 task
function checkEmail(email){
    return console.log(/@/.test(email) && /\./.test(email)) 
}
checkEmail("Qmail2@gmail.com");

//3 task
const str = "cdfDbbBBbdsbz";
const arrResult = [];
let epxDbd = str.match(/db+d/i);
if(epxDbd){
    arrResult.push(epxDbd[0])
    arrResult.push((epxDbd[0].match(/b+/i))[0]);
    arrResult.push((epxDbd[0].match(/d$/i))[0]);
}
console.log(arrResult);

//4 task
const strJS = "Java Script";
const regexp = /[A-Za-z]+/ig;
const resultFirst = strJS.replace(/(\w+) (\w+)/i,'$2, $1');     //1 method
const resultSecond = strJS.match(regexp).reverse().join(", ");  //2 method
console.log(resultFirst);
console.log(resultSecond);

//5 task
function checkBankNumber(bankNum){
    let regExp =/^\d{4}-\d{4}-\d{4}-\d{4}$/;
    return regExp.test(bankNum);
}
let bankNumber = "9999-9999-9999-9999";
checkBankNumber(bankNumber) ? console.log("Valide") : console.log("Invalide");

//6 task
function checkEmail(email){     
    let regExp =/^[A-Za-z0-9][A-Za-z_0-9]*[-]?[A-Za-z_0-9]*@gmail.com$/;
    if(regExp.test(email))
        console.log("Email is correct!")
    else
        console.log("Email is not correct!")
}
checkEmail('my_mail@gmail.com');
checkEmail('#my_mail@gmail.com');
checkEmail('my_ma--il@gmail.com');

//7 task
function checkLogin(login) {
    let regExp =/^[A-Za-z][A-Za-z0-9\.]{1,9}$/;
    console.log(regExp.test(login));
    const arrRes = login.match(/(\d+\.\d+)|(\d+)/g);
    if (arrRes !== null) {
        arrRes.forEach(element => {
            console.log(element);
        }); 
    }
} 
checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');