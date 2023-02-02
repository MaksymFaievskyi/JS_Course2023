//1 task
const mentor = {
    course: 'JS fundamental',
    duration: 3,
    direction: 'web-development',
};

function propsCount(currentObject){
    return Object.keys(currentObject).length;
}
console.log(propsCount(mentor));

 //2 task
const course = {
    course: 'JS fundamental',
    duration: 3,
    direction: 'web-development',
    start: false,
    members: 8,
};

function showProps(obj)
{
    for(let i = 0; i < Object.keys(obj).length; i++) {
        console.log(i + 1  + " key: " + Object.keys(obj)[i]); //massive keys
    }
    for(let i = 0; i < Object.keys(obj).length; i++) {
        console.log(Object.keys(obj)[i] + " : " + obj[Object.keys(obj)[i]]); //massive values
    }
}
showProps(course);

//3 task 
class Person{
    constructor(name, surname) {
        if (name.trim() === "" || surname.trim() === "")
            throw new Error("You have entered empty string!");
        this.name = name;
        this.surname = surname;
    }
    showFullName(){
            return `${this.surname} ${this.name}`;
    }
}

class Student extends Person {
    constructor(name, surname, year){
        super(name, surname);
        if(!Number.isInteger(+year))
            throw new Error("You have not entered a number!");
        else if(year > new Date().getFullYear())
            throw new Error("You have entered wrong year!");
        else if(new Date().getFullYear() - year > 6)
            throw new Error("You have already graduated from university!");
        this.year = year;
    }
    showFullName(midleName){
        return `${this.surname} ${this.name} ${midleName}`;
    }
    showCourse()
    {
        const currentCourse = new Date().getFullYear() - this.year;
        if(currentCourse === 0)
            return 1;
        return currentCourse;
    }
}

const stud1 = new Student("Petro", "Petrenko", 2017);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 6

//4 task 
class Worker{
    #experience = 1.2;
    constructor(fullName, dayRate, workingDays ) {
        if(fullName.trim() === "" || !Number.isFinite(dayRate) || !Number.isInteger(workingDays))
            throw new Error("Incorrect data!");
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    set setExp(value) {
        this.#experience = value;
    }

    get showExp() { 
        return this.#experience;
    }

    get getFullName()
    {
        return this.fullName;
    }

    showSalary() {
        console.log(`${this.fullName} salary: ${this.dayRate * this.workingDays}`)
    }

    showSalaryWithExperience(){
        console.log(`${this.fullName} salary with experience: ${this.dayRate * this.workingDays * this.#experience}`)
    }

    countSalaryWithExp(newExp)
    {
        return this.dayRate * this.workingDays * newExp;
    }
}

function sortWorkers(){
    let mostExp = arguments[0].showExp;
    for (const obj of arguments) {
        if(obj.showExp > mostExp)
            mostExp = obj.showExp;
    }
    const array = [];
    for (const obj of arguments) {
        array.push(obj.countSalaryWithExp(mostExp));
    }
    array.sort((a, b) => a - b);
    console.log("Sorted salary:");
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < arguments.length; j++) {
            if(array[i] === arguments[j].countSalaryWithExp(mostExp)){
                console.log(`${arguments[j].getFullName} : ${arguments[j].countSalaryWithExp(mostExp)}`)
                break;
            }
        }
    }
}
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);                 
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.1;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);                 
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.4;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();

let worker4 = new Worker("Albert Kruk", 5, 12);
sortWorkers(worker3, worker2, worker1, worker4);

//5 task
class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(firstSide, secondSide, thirdSide){
        super();
        if(!Number.isFinite(firstSide) || !Number.isFinite(secondSide)|| !Number.isFinite(thirdSide) 
        || +firstSide <= 0 || +secondSide <= 0 || +thirdSide <= 0)
            throw new Error("Incorrect data")
        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;
    }
    getArea() {
        const halfPer = (this.firstSide + this.secondSide + this.thirdSide) / 2;
        const areaTriangle = Math.sqrt(halfPer * (halfPer - this.firstSide) * (halfPer - this.secondSide) * (halfPer - this.thirdSide));
        if(!isNaN(areaTriangle))
            return areaTriangle;
        else
            console.log("You entered the wrong sides of the triangle");
    }
}

class Square extends GeometricFigure {
    constructor(side){
        super();
        if(!Number.isFinite(side) || +side <= 0)
            throw new Error("Incorrect data");
        this.side = side;
    }
    getArea() {
        return this.side * this.side;
    }
}

class Circle extends GeometricFigure {
    constructor(radius){
        super();
        if(!Number.isFinite(radius) || +radius <= 0)
        throw new Error("Incorrect data");
        this.radius = radius;
    }
    getArea() {
        return Math.PI * (this.radius ** 2);
    }
}

function handleFigures(figures){
    for (let i = 0; i < figures.length; i++) {
        if (figures[i] instanceof GeometricFigure){
            console.log(`Geometric figure: ${figures[i].toString()} - area: ${figures[i].getArea()}`);
        } else {
            console.log(`${figures[i].constructor.name} is not child of class GeometricFigure`);
            figures.splice(i,1);
            i--;
        }
    }
    let sumArea = figures.reduce((total, amount) => {
        return total + amount.getArea();
    },0);
    return sumArea;
}
class AnotherClass{};

let triangle = new Triangle(3, 4, 5);
let square = new Square(3);
let circle = new Circle(4);

const figures = [new AnotherClass(), new Square(7), new Triangle(3, 4, 5),new Circle(5)];
console.log(handleFigures(figures));
