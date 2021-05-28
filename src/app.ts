const anchor = document.querySelector('a')?.href;
const anchor1 = document.querySelector('a');
const anchor2 = document.querySelector('a')!;

console.log(anchor);
console.log(anchor1?.href);
console.log(anchor2.href)

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs
// const type = document.querySelector('#type') as HTMLSelectElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;

// form.addEventListener('submit', (e: Event) => {
//     e.preventDefault();

//     console.log(
//         type.value,
//         tofrom.value,
//         details.value,
//         amount.valueAsNumber
//     )
// })

// classes
class Invoice {
    // readonly client: string;
    // public details: string;
    // private amount: number;

    // constructor(c: string, d: string, a: number){
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }

    constructor(
        readonly client: string,
        public details: string,
        private amount: number,
    ){}

    format() {
        return `${this.client} owers $${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice('mario', 'work on mario website', 250);
const invTwo = new Invoice('shivani', 'work on mario website', 150);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

// invOne.client = "shivvu";        beacause it is readonly
// invTwo.amount = 500;             because it is private

console.log(invoices);

invoices.forEach(inv => {
    console.log(inv.client, inv.details, inv.format());
})