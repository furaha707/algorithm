const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split('\n');

// 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다. 
// 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다. 
// 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.  

console.log(input);

let a = Number(input[0].split(' ')[0]);
let b = Number(input[0].split(' ')[1]);
let c = Number(input[0].split(' ')[2]);

if(a == b && b == c){
  console.log(10000+a *1000);
} else if (a == b){
  console.log(1000 + a * 100);
} else if (b == c){  // 이 부분 오답냈음
  console.log(1000 + a * 100);
} else if (a == c){
  console.log(1000 + a * 100);
} else {
  console.log(Math.max(a,b,c)*100);
}

//  a b 비교 a c 비교가 먼저