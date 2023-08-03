const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(' ');

let Hours = Number(input[0]);
let Minutes = Number(input[1]);

(function clock(){
  if(Minutes < 45){
    Hours -= 1;
    Minutes += 15;
    if(Hours < 0){
      Hours = 23;
    }
  } else {
    Minutes -= 45;
  }
})();

console.log(Hours, Minutes);