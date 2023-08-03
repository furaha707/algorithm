const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split('\n');

let num = input[0].split(' ');

let first = num[0].split('');
let first_reverse = first.reverse().join('');

let second = num[1].split('');
let second_reverse = second.reverse().join('');

console.log(Math.max(first_reverse,second_reverse));

// 강사님 답

// let a = input[0].split(' ')[0];
// let b = input[0].split(' ')[1];

// let newA = a[2] + a[1] + a[0];
// let newB = b[2] + b[1] + b[0];

// console.log(Math.max(Number(newA), Number(newB)));