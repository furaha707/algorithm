const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split('\n');


let length = input[0];
let num = input[1];

let array = num.split('').map(Number);

let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); 


// 정답은?
// let n = Number(input[0]);
// let string = input[1];

// let answer = 0;
// for (let x of string){
//   answer += Number(x);
// }

// console.log(answer);