import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// const anchor = document.querySelector('a')?.href;
// const anchor1 = document.querySelector('a');
// const anchor2 = document.querySelector('a')!;

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list templat instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let doc: HasFormatter;
    if(type.value === "invoice") {
        doc= new Invoice(tofrom.value, details.value, amount.valueAsNumber);
        console.log(doc);
    } else {
        doc= new Payment(tofrom.value, details.value, amount.valueAsNumber);
        console.log(doc);
    }

    list.render(doc, type.value, 'end');
})

// // classes
// class Invoice {
//     // readonly client: string;
//     // public details: string;
//     // private amount: number;

//     // constructor(c: string, d: string, a: number){
//     //     this.client = c;
//     //     this.details = d;
//     //     this.amount = a;
//     // }

//     constructor(
//         readonly client: string,
//         public details: string,
//         private amount: number,
//     ){}

//     format() {
//         return `${this.client} owers $${this.amount} for ${this.details}`
//     }
// }
// import { Invoice } from "./classes/invoice.js";
// import { Payment } from "./classes/Payment.js";
// import { HasFormatter } from "./interfaces/HasFormatter.js";

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('bubu', 'webwork', 250);
// docTwo = new Payment('shivvu', 'design', 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs)


// const invOne = new Invoice('mario', 'work on mario website', 250);
// const invTwo = new Invoice('shivani', 'work on mario website', 150);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// // invOne.client = "shivvu";        beacause it is readonly
// // invTwo.amount = 500;             because it is private

// console.log(invoices);

// invoices.forEach(inv => {
//     console.log(inv.client, inv.details, inv.format());
// })

//                                         //  interfaces

// interface InPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }

// const myLife: InPerson = {
//     name: 'shivani',
//     age: 22,
//     speak(text: string): void {
//         console.log(text)
//     },
//     spend(amount: number): number {
//         console.log(`i spent ${amount}`);
//         return amount;
//     }
// }

// const greetPerson = (person: InPerson) => {
//     console.log('hello ', person.name)
// }

// greetPerson(myLife)

// console.log(myLife)