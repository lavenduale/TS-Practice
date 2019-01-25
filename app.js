"use strict";
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Ethan",
    bankAccount: bankAccount,
    hobbies: ["Sports", 'Cooking']
};
myself.bankAccount.deposit(3000);
console.log(myself);
// --------------------------------------------------------------------------------------
// types
//console.log("hello world");
var myName = 'Ethan';
//maName = 28;
// number
var myAge = 22;
//myAge = 'Max';
// boolean
var hasHobbies = false;
//hasHobbies = 1;
// assign types
var myRage; // it assigned a type any as default (not number or string directly)
myRage = 27;
//myRage = '27';
var hobbies = ["cooking", "sports"];
//console.log(typeof hobbies);
//hobbies = 100;
// tuples
var address = ["superstreet", 99];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // 2
})(Color || (Color = {}));
var myColor = Color.Blue;
//console.log(myColor);
// any
var car = "BMW";
console.log(car);
car = {
    brand: "BMW",
    series: 3
};
console.log(car);
function Rmyname() {
    return myName;
}
console.log(Rmyname());
// void
function sayHello() {
    console.log("Hello!");
}
// argument types
function multiply(val1, val2) {
    return val1 * val2;
}
console.log(multiply(1, 2));
// function types
var myMultiply;
// myMultiply = sayHello;    cause sayHello is a string type function and return string
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2)); // myMultiply is a num num => num type function
// objects
var userData = {
    name: "Ethan",
    age: 22
};
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 27; // if using union types here |, the boolean cannot be used
myRealRealAge = "27";
//myRealRealAge = true;
// -----------------------------------------------------------------------------
// ES6 and TS
// let & const
var variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
//maxLevels = 99;  const cannot be changed after declared
// Block scope
function reset() {
    //console.log(variable);    undefined here
    var variable = null;
    console.log(variable); // null here
}
reset();
console.log(variable); // "Another variable" here
// Arrow Functions
console.log("ARROW FUNCTIONS");
// Normal way
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3)); // 13 here
// Arrow way
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(addNumbers(10, 3)); // 13 here
var greet = function () {
    console.log("Hellow");
};
greet();
// the most simplified version
var greetFriend = function (friend) { return console.log(friend); };
greetFriend("yusong");
// Default Parameters
console.log("DEFAULT PARAMETERS");
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown(); // then it's fine here it's count from 10 as default
// Rest & Spread
console.log("REST & SPREAD");
var numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
// console.log(Math.max(numbers)); passing numbers instead of array is not working
console.log(Math.max.apply(Math, numbers)); // add ... Spread here working
function makeArray() {
    var eles = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        eles[_i] = arguments[_i];
    }
    return eles;
}
console.log(makeArray(1, 2, 6));
// Destructuring Arrays
console.log("DESTRUCTURING");
// Normal way
var myHobbies = ["Music", "Sports"];
//const hobby1 = myHobbies[0];
//const hobby2 = myHobbies[1];
//console.log(hobby1, hobby2);
// destructuring way
var hobby1 = myHobbies[0], hobby2 = myHobbies[1]; // fetching automatically 
console.log(hobby1, hobby2);
// Destructuring Objects
var lolData = {
    userName: "Ethan",
    age: 22
};
// Normal way
//const namelol = lolData.userName;
//const agelol = lolData.age;
var myname = lolData.userName, myage = lolData.age; // similar with arrays, for objects
console.log(myname, myage);
// Template Literals
var userName = "Ethan";
var greeting = "Hello, I'm " + userName;
console.log(greeting);
greeting = "Hello, I'm " + userName;
console.log(greeting);
// Exercise
//---------------------------------------------------------------------------------
// 1. Arrow function
var double = function (value) { return value * 2; };
console.log(double(10));
// 2. If only we could provide some default values ...
var greet1 = function (name) {
    if (name === void 0) { name = "ethan"; }
    console.log("Hello, " + name);
};
greet1();
greet1("Anna");
// 3. Isn't there a shorter way to get all these Values?
var numbers1 = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers1));
// 4. I have to think about Exs3, spread again
var newArray = [55, 20];
newArray.push.apply(newArray, numbers1);
console.log(newArray);
// 5. That's a well -constructed array.
var testResults = [3.89, 2.99, 1.38];
//var result1 = testResults[0];
//var result2 = testResults[1];
//var result3 = testResults[2];
var res1 = testResults[0], res2 = testResults[1], res3 = testResults[2];
console.log(res1, res2, res3);
// 6. And a well-constructed object!
var scientist = { firstName: "Will", experience: 12 };
//var firstName = scientist.firstName;
//var experience = scientist.experience;
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
