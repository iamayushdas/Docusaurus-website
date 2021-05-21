// const character = "Shivani";

// console.log(character);

// const inputs = document.querySelectorAll('input');

// console.log(inputs)

// inputs.forEach(input => {
//     console.log(input)
// })

// let character = "mario";

// const circumference = (diameter) => {
//     return diameter*Math.PI;
// }


// const circumference1 = (diameter:number) => {
//     return diameter*Math.PI;
// }

// console.log(circumference(20));
// console.log(circumference1("hello"));

// Arrays
// let names = ['shivani', 'shivvu', 'bubu'];

// names.push('bacchu')

// console.log(names[3])

// names.push(3); not work because of diff datatype
// let numbers = [10, 20,30, 40];

// numbers.push(25);

// let mixed = ['ken', 4, 'chun-li', 'shivani', 21];
// mixed.push('shivvu');
// mixed.push(45);
// mixed[0] = 3

// objects

// let ninja = {
//     name: 'shivani',
//     belt: 'black',
//     age: 30
// }

// ninja.age = 40;
// ninja.name = 'ryu';
// ninja.age = '30'

// ninja.skills = ['fighting', 'boxing']

// ninja = {
//     name : 'shivvu',
//     belt: 'orange',
//     age: 21 
// }

// console.log(ninja);

// let age : any = 25;

// age = true;
// console.log(age);
// age = 'hello';
// console.log(age);
// age = 21;
// console.log(age);

// let mixed: any[] = [];

// mixed.push(5);
// mixed.push('shivani')
// mixed.push(true);

// console.log(mixed)

//                                   Function basics
// let greet = () => {
//     console.log('hello world')
// }

// let greet:Function;

// greet = () => {
//     console.log('hello again')
// }

// greet()

// const add = (a: number, b: number, c? : number | string) => {
//     console.log(a + b);
//     console.log(c)
// }

// add(5, 6, 'shivani');

// const minus = (a: number, b: number) => {
//     return a + b;
// }

// let result = minus(10,7);

// result = "something"  can't change dt

//                                                 TYpe aliases

type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: objWithName) => {
    console.log(`${user.name} has id equals to ${user.uid}`)
}

