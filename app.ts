
// Exercise
type BankAccount = { money: number, deposit: (val: number) => void };

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

let myself: { name: string, bankAccount: BankAccount, hobbies: string[] } = {
    name: "Ethan",
    bankAccount: bankAccount,
    hobbies: ["Sports", 'Cooking']
};

myself.bankAccount.deposit(3000);
console.log(myself); 

// --------------------------------------------------------------------------------------
// types

//console.log("hello world");
let myName: string = 'Ethan';
//maName = 28;

// number
let myAge: number = 22;
//myAge = 'Max';

// boolean
let hasHobbies: boolean = false;
//hasHobbies = 1;

// assign types
let myRage: number; // it assigned a type any as default (not number or string directly)
myRage = 27;
//myRage = '27';

let hobbies: any[] =  ["cooking", "sports"];
//console.log(typeof hobbies);
//hobbies = 100;

// tuples
let address: [string, number] = ["superstreet", 99];

// enum
enum Color {
    Gray, // 0
    Green = 100, // 1
    Blue // 2
}
let myColor: Color = Color.Blue;
//console.log(myColor);

// any
let car: any = "BMW";
console.log(car);
car = {
    brand: "BMW",
    series: 3
}
console.log(car);

function Rmyname(): string { // the type after : only serves return value (myName here)
    return myName;
}
console.log(Rmyname());

// void
function sayHello(): void { // it means nothing to return (void)
    console.log("Hello!");
}

// argument types
function multiply(val1: number, val2: number): number {
    return val1*val2;
}
console.log(multiply(1,2));

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;    cause sayHello is a string type function and return string
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2)); // myMultiply is a num num => num type function

// objects
let userData: { name: string, age: number } = { // object types
    name: "Ethan",
    age: 22
};

//userData = {
//    a: "hello",
//    b: 27
//};


// complex object

// type alias
type Copx = {data: number[], output: (all: boolean) => number[]};

let complex: Copx = {
    data: [100, 3.99, 10],

    output: function(all: boolean): number[] {
        return this.data;
    }
};

let complex2: Copx = {
    data: [100, 3.99, 10],

    output: function(all: boolean): number[] {
        return this.data;
    }
};

// union types
let myRealRealAge: number | string = 27; // if using union types here |, the boolean cannot be used
myRealRealAge = "27";
//myRealRealAge = true;


// -----------------------------------------------------------------------------
// ES6 and TS


// let & const
let variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);

//maxLevels = 99;  const cannot be changed after declared

// Block scope
function reset(){
    //console.log(variable);    undefined here
    let variable = null;
    console.log(variable); // null here
}
reset();
console.log(variable);  // "Another variable" here

// Arrow Functions
console.log("ARROW FUNCTIONS");

// Normal way
const addNumbers = function(number1: number, number2: number): number {
    return number1 + number2;
}
console.log(addNumbers(10, 3)); // 13 here

// Arrow way
const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(addNumbers(10, 3)); // 13 here

const greet = () => {
    console.log("Hellow");
};
greet();

// the most simplified version
const greetFriend = friend => console.log(friend);
greetFriend("yusong");

// Default Parameters
console.log("DEFAULT PARAMETERS");
const countdown = (start: number = 10): void => { // set number to 10 as default
    while (start > 0){
        start--;
    }
    console.log("Done!", start);
};
countdown(); // then it's fine here it's count from 10 as default

// Rest & Spread
console.log("REST & SPREAD");

const numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
// console.log(Math.max(numbers)); passing numbers instead of array is not working
console.log(Math.max(...numbers)); // add ... Spread here working


function makeArray(...eles: number[]){  // ... Rest make an array of 1, 2, 6 elements
    return eles;    
}
console.log(makeArray(1, 2, 6)); 

// Destructuring Arrays
console.log("DESTRUCTURING");

// Normal way
const myHobbies = ["Music", "Sports"]
//const hobby1 = myHobbies[0];
//const hobby2 = myHobbies[1];
//console.log(hobby1, hobby2);

// destructuring way
const [hobby1, hobby2] = myHobbies; // fetching automatically 
console.log(hobby1, hobby2);

// Destructuring Objects
const lolData = {
    userName: "Ethan", 
    age: 22
};

// Normal way
//const namelol = lolData.userName;
//const agelol = lolData.age;

const {userName: myname, age: myage} = lolData; // similar with arrays, for objects
console.log(myname, myage); 

// Template Literals
const userName = "Ethan";
let greeting = "Hello, I'm " + userName;
console.log(greeting);

greeting = `Hello, I'm ${userName}`;
console.log(greeting);


// Exercise
//---------------------------------------------------------------------------------

// 1. Arrow function
const double = (value: number) => value*2;
console.log(double(10));

// 2. If only we could provide some default values ...
const greet1 = (name: string = "ethan"): void => {
    console.log("Hello, " + name);
};
greet1();
greet1("Anna");

// 3. Isn't there a shorter way to get all these Values?
const numbers1 = [-3, 33, 38, 5];
console.log(Math.min(...numbers1));

// 4. I have to think about Exs3, spread again
const newArray = [55, 20];
newArray.push(...numbers1);
console.log(newArray);

// 5. That's a well -constructed array.
const testResults = [3.89, 2.99, 1.38];
//var result1 = testResults[0];
//var result2 = testResults[1];
//var result3 = testResults[2];
const [res1, res2, res3] = testResults;
console.log(res1, res2, res3);

// 6. And a well-constructed object!
const scientist = {firstName: "Will", experience: 12};
//var firstName = scientist.firstName;
//var experience = scientist.experience;
const {firstName, experience} = scientist;
console.log(firstName, experience);