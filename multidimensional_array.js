// 2차원 배열
// 2차원 배열은 변수를 가로세로 빈틈없이 직사각형 모양으로 나열한 배열 
let study = [
    ["C", 1],
    ["C#", 2],
    ["C++", 3],
    ["Python", 4],
    ["Javascript", 5],
    ["JAVA", 6]
]

console.table(study)

//위의 이차원 배열에 접근하기 위해서는 study[][]의 방식을 이용하면 된다.
//console.log(study[0][0]) //C
//console.log(study[1][0]) //C#
//console.log(study[4][1]) //5

// 2차원 배열 추가
// 배열 추가는 array 메소드인 push(), splice()등을 사용해서 가능하다.

study.push(["Ruby",7])  //study[6]
study.splice(7,0,["Go", 8]) //study[7]

// 배열의 제거는 pop() 메소드를 사용하면 된다.

// 배열에서 [컴퓨터 언어, 일련번호]로 이루어진 내부 배열을 [컴퓨터 언어, 일련번호, 일련번호+1]의 형태로 만드려면
// 배열 반복 메소드인 forEach()를 사용하면 간단하다.
study.forEach(element => 
    element[2] = element[1] + 1
)

console.table(study)