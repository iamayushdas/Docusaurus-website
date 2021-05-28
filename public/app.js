"use strict";
var _a;
var anchor = (_a = document.querySelector('a')) === null || _a === void 0 ? void 0 : _a.href;
var anchor1 = document.querySelector('a');
var anchor2 = document.querySelector('a');
console.log(anchor);
console.log(anchor1 === null || anchor1 === void 0 ? void 0 : anchor1.href);
console.log(anchor2.href);
var form = document.querySelector('.new-item-form');
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
var Invoice = /** @class */ (function () {
    // readonly client: string;
    // public details: string;
    // private amount: number;
    // constructor(c: string, d: string, a: number){
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owers $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('mario', 'work on mario website', 250);
var invTwo = new Invoice('shivani', 'work on mario website', 150);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// invOne.client = "shivvu";        beacause it is readonly
// invTwo.amount = 500;             because it is private
console.log(invoices);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.details, inv.format());
});
