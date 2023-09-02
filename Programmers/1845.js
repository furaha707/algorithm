function solution(nums) {
  var answer = 0;
  
  const uniqueNumbers = new Set(nums);
  const uniqueCount = uniqueNumbers.size;
  const halfLength = nums.length / 2;

  if (uniqueCount <= halfLength) {
    return uniqueCount;
  } else {
    return halfLength;
  }
  
}

solution([3,3,3,2,2,4])