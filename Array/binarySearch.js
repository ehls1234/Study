function binarySearch(sortedArray, seekElement) {
    let startIndex = 0
    let endIndex = sortedArray.length - 1 // lenght는 1부터 시작하기 때문에 '-1'
  
    while (startIndex <= endIndex) { // 배열의 길이가 0보다 크거나 같으면 반복 시작
      const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2) // '0 + ( [인덱스의 길이] - 0 ) /2' 의 정수를 반환
      if (sortedArray[middleIndex] === seekElement) { // 만약 찾는 배열길이의 중간 값이 찾으려는 값과 같을때
        return middleIndex // 중간 값을 반환한다.
      }
      if (sortedArray[middleIndex] < seekElement) { // 만약 배열길이의 중간 값이 찾으려는 값보다 작으면
        startIndex = middleIndex + 1 // [배열 시작길이]를 [중간 값+1] 시키고 다시 반복한다.
      } else { // 배열길이의 중간 값이 찾으려는 값보다 같거나 크다면(>=) 
        endIndex = middleIndex - 1 // [배열의 마지막 길이]를 [중간 값-1] 으로 변경한다. 
      }
    }
    return -1 // 값이 없다면 -1을 반환
  }
  
  const nums = [1, 4, 5, 3, 6, 7, 8, 9, 2]
  const sortedNums = nums.sort() // 위 배열을  sort로 정렬시킨다.
//[1, 2, 3, 4, 5, 6, 7, 8, 9]

  console.log(binarySearch(sortedNums, 3))
//2
  console.log(binarySearch(sortedNums, 30))
//-1
  console.log(binarySearch(sortedNums, 100))
//-1
