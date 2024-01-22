# 📒 Spread Syntax and Rest Parameters

<br/>

## 0. 목차

1. [전개 구문 (Spread Syntax)](#1-전개-구문-spread-syntax)
2. [나머지 매개변수 (Rest Parameters)](#2-나머지-매개변수-rest-parameters)

<br/>

## 1. 전개 구문 (Spread Syntax)

### (1) 설명

ECMAScript 2018 부터 사용된다. 전개 구문을 사용하면 배열이나 문자열과 같이 반복 가능한 문자를 0개 이상의 인수 또는 (배열 리터럴의 경우) 요소로 확장하여, 0개 이상의 키-값의 쌍으로 객체로 확장시킬 수 있다.

### (2) 예시 코드

```javascript
// 아래와 같은 함수가 있다고 할 때
function add(a, b, c) {
  return a + b + c;
}

// 함수에 1, 2, 3 각각의 인자를 하나하나씩 전달해야 하는 상황
const nums = [1, 2, 3]

// 방법 1
add(nums[0], nums[1], nums[2]);

// 방법 2: 배열 안의 아이템들이 하나씩 펼쳐져 자동으로 인자가 전달됨
add(...nums);
```

<br/>

## 2. 나머지 매개변수 (Rest Parameters)

### (1) 설명

함수에서 인자로 받는 갯수가 정해져 있지 않다면 그 외의 것들은 펼쳐서 받아 배열로 리턴할 수 있다.

### (2) 예시 코드

```javascript
function sum(first, second, ...nums) {
  console.log(first); // 1
  console.log(second); // 2
  console.log(nums); // 3, 4, 5
}
sum(1, 2, 3, 4, 5);
```

### (3) Array Concat 적용

```javascript
const red = ['apple', 'strawberry'];
const yellow = ['banana', 'mango'];

// 방법 1: concat 사용
let arr = red.concat(yellow);
console.log(arr); // ['apple', 'strawberry', 'banana', 'mango']

// 방법 2: Rest Parameters 사용
arr = [...red, ...yellow]
console.log(arr); // ['apple', 'strawberry', 'banana', 'mango']

// 용례 1: 새로운 요소도 추가 가능
arr = [...red, 'orange', ...yellow]
console.log(arr); // ['apple', 'strawberry', 'orange', 'banana', 'mango']
```

### (4) Object 적용

```javascript
// 용례 2: Object에도 사용 가능
const ella = {name: 'Ella', age: 20};
const updated = {
  ...ella,
  job: 'FE developer',
  home: {address: 'seoul'}
};
console.log(updated); // {name: 'Ella', age: 20, job: 'FE developer', home: {address: 'seoul'}}
```
