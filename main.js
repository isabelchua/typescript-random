"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Welcome Back';
console.log(message);
var isBeginner = true;
var total = 0;
var name = 'Isabel';
//name = true;
var sentence = "My name is " + name + "\nHello! Nice to meet you";
console.log(sentence);
//total.
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Chris', 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = 'Isabel';
//let myVariable: any = 10;
var myVariable = 10;
//check if name property exists in obj or not
function hasName(obj) {
    return !!obj && typeof obj === 'object' && 'name' in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
//console.log(myVariable.name);
//myVariable();
//(myVariable as string).toUpperCase();
var a;
a = 10;
a = true;
var b = 20;
//b = true;
//intellisense support
//b.
var multiType;
multiType = 20;
multiType = true;
//intellisense support with union type
var anyType;
anyType = 20;
//using types with functions
function add(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(add(5, 10));
// ? is optional undefined
function add1(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(add1(5, 10));
// add(5, '10')
// add()
function add2(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(add2(5, 10));
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayve'
};
fullName(p);
function fullName2(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p2 = {
    firstName: 'Bruce'
    //	lastName: 'Wayve'
};
//fullName(p2);
//public free accessibility
//private accessibility within the class
//protected within the class and classes derived from it
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Isabel');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating task");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
