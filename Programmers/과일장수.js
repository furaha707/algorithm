function solution(k, m, score) {
  var answer = 0;
  let box = [];    
  let result = 0;

  const array = score.sort((a,b) => b - a)

  for(i = 0; i < array.length; i += m){
    box.push(array.slice(i, i + m));
  }
 
  for(const subArray of box){
      if (subArray.length == m){
      const minValue = Math.min(...subArray);
      result += minValue * m
    }
  }
 
  answer = result
  return answer;
}

solution(3,4,[4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])


