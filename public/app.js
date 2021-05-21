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
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
