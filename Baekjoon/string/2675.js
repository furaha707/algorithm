const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split('\n');

let testCase = Number(input[0]);

// 2번 루프를 돈다
for(let i = 1; i <= testCase; i++){

  // 구조분해할당 구문으로 첫째 숫자는 r 로 둘째 문자는 s 로 할당한다
  let [r, s] = input[i].split(" ");
  let result = "";

  for (let j = 0; j <= s.length; j++){
    result += s.charAt(j).repeat(r);
    console.log(s.charAt(j));
  }
  console.log(result);
}