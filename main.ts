export {};
let message = 'Welcome Back';
console.log(message);

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Isabel';
//name = true;

let sentence: string = `My name is ${name}
Hello! Nice to meet you`;

console.log(sentence);

//total.

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ['Chris', 22];

enum Color {
	Red = 5,
	Green,
	Blue
}

let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'Isabel';

//let myVariable: any = 10;
let myVariable: unknown = 10;

//check if name property exists in obj or not
function hasName(obj: any): obj is { name: string } {
	return !!obj && typeof obj === 'object' && 'name' in obj;
}

if (hasName(myVariable)) {
	console.log(myVariable.name);
}

//console.log(myVariable.name);
//myVariable();
//(myVariable as string).toUpperCase();

let a;
a = 10;
a = true;

let b = 20;
//b = true;
//intellisense support
//b.

let multiType: number | boolean;
multiType = 20;
multiType = true;

//intellisense support with union type

let anyType: any;
anyType = 20;

//using types with functions
function add(num1: number, num2: number): number {
	if (num2) return num1 + num2;
	else return num1;
}
console.log(add(5, 10));

// ? is optional undefined
function add1(num1: number, num2?: number): number {
	if (num2) return num1 + num2;
	else return num1;
}
console.log(add1(5, 10));
// add(5, '10')
// add()

function add2(num1: number, num2: number = 10): number {
	if (num2) return num1 + num2;
	else return num1;
}
console.log(add2(5, 10));

function fullName(person: { firstName: string; lastName: string }) {
	console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
	firstName: 'Bruce',
	lastName: 'Wayve'
};

fullName(p);

//easier to see more nice to see

//adding ? makes it an optional type

// but throws and error? not sure why ):

interface Person2 {
	firstName: string;
	lastName?: string;
}

function fullName2(person: Person2) {
	console.log(`${person.firstName} ${person.lastName}`);
}

let p2 = {
	firstName: 'Bruce'
	//	lastName: 'Wayve'
};

//fullName(p2);

//public free accessibility
//private accessibility within the class
//protected within the class and classes derived from it
class Employee {
	//private employeeName: string;
	//public employeeName: string;
	//protected employeeName: string;

	employeeName: string;

	constructor(name: string) {
		this.employeeName = name;
	}

	greet() {
		console.log(`Good Morning ${this.employeeName}`);
	}
}

let emp1 = new Employee('Isabel');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
	constructor(managerName: string) {
		super(managerName);
	}
	delegateWork() {
		console.log(`Manager delegating task`);
	}
}

let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
