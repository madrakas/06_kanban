import { minus, multi, sum } from './sum.js';

console.clear();
console.log('Labas');

const n1 = 7;
const n2 = 5;

const n12 = sum(n1, n2);
const n12minus = minus(n1, n2);
const n12multi = multi(n1, n2);

console.log(n12);
console.log(n12minus);
console.log(n12multi);
