const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split('\n');

// let currentTime = input[0];
let a = Number(input[0].split(' ')[0]);
let b = Number(input[0].split(' ')[1]);

let duration = Number(input[1]);
let totalMinute = a * 60 + b + duration;

let Hour = parseInt(totalMinute / 60) % 24;
let Minute = totalMinute % 60;

// if (Hour >= 23){
//   Hour = 0;
// }
// 이 부분이 틀렸음

// if (Hour >= 24) { 
//   Hour -= 24; 
// }
// 이렇게 하던가

console.log(Hour + " " + Minute);

// 분의 형태로 바꿔주고 hour 는 60을 나눈 몫, minute 은 60 으로 나눈 나머지




