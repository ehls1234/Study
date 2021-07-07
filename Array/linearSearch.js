function linearSearch(array, seekElement) {
    for (let i = 0; i < array.length; i++) {// 0번부터 찾기시작 해서
      if (array[i] === seekElement) { // 맞는 숫자가 나오면 
        return i // 몇번째에 있는지 반환
      }
    }
    return -1 // 없다면 -1을 반환
  }
  
  const nums = [1, 4, 5, 3, 6, 7, 8, 9, 2]
  
  console.log(linearSearch(nums, 3))
  //3

  console.log(linearSearch(nums, 0))
  //-1