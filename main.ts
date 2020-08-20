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
(myVariable as string).toUpperCase();
