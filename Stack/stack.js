/*
스택(stack) 다음과 같은 성질을 갖는 자료형입니다.

데이터를 집어넣을 수 있는 선형(linear) 자료형입니다.
나중에 집어넣은 데이터가 먼저 나옵니다. 

이 특징을 줄여서 LIFO(Last In First Out)라고 부릅니다.

데이터를 집어넣는 push, 데이터를 추출하는 pop, 
맨 나중에 집어넣은 데이터를 확인하는 peek 등의 작업을 할 수 있습니다.
*/

class Stack {
  constructor() {
    this._arr = [];
  }
  push(item) {
    this._arr.push(item);
  }
  pop() {
    return this._arr.pop();
  }
  peek() {
    return this._arr[this._arr.length - 1];
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop(); // 3

//스택은 서로 관계가 있는 여러 작업을 연달아 수행하면서
//이전의 작업 내용을 저장해 둘 필요가 있을 때 널리 사용됩니다.