# 📒 JavaScript 내장 함수의 세계

자바스크립트 내장함수를 더 잘 사용하기 위해 깊게 파보겠습니다.

<br/>

## 0. 목차

1. [apply()](#1-apply)
2. [filter()](#2-filter)

<br/>

## 1. [apply()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

### (1) 궁금증을 가진 계기

```javascript
function solution(s) {
  const numbers = s.split(' ').map(Number);
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  return `${min} ${max}`;
}
```

위의 최솟값과 최댓값을 구하는 문제에서 spread syntax를 사용하지 않고 `Math.min`과 `Math.max`를 적용하는 다른 방법이 있을지 찾아보다가 `apply` 메서드를 사용할 수 있다는 것을 발견.

### (2) apply 메서드란?

`apply()`는 호출할 함수의 인수를 배열 형태로 묶어 전달한다. 따라서 아래와 같이 코드에 주어진 `this` 값과 배열 형태의 인자를 함수에 적용할 수 있게 해준다.

```javascript
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);
console.log(max); // 7

const min = Math.min.apply(null, numbers);
console.log(min); // 2
```

### (3) apply를 사용한 이유

JavaScript에서 `Math.max()`와 `Math.min()` 함수는 여러 개의 인수를 받아 그 중 최대값과 최소값을 반환하는데, 배열을 직접적으로 인수로 받지 않기 때문에, 배열에 있는 여러 요소들을 개별 인수로 전달해야 한다. 이를 위해 `apply()` 메소드가 사용된다.

함수가 어떤 객체의 메소드로 호출될 때, this는 그 객체를 참조한다. 하지만 일반 함수로 호출되거나 `apply`, `call` 같은 메서드를 사용할 때는 this의 값이 명시적으로 정해질 수 있다. `apply` 메서드의 첫 번째 인자로 전달되는 `thisArg`는 함수 내부에서 사용될 this의 값이다. 보통의 경우, `Math.max()`와 `Math.min()` 메서드는 `this`가 중요하지 않기에 `null`이나 `undefined`로 설정한다.

간단히 말해, `apply` 메서드는 배열의 요소를 별도의 인자로 분리하여 함수에 전달하는 유용한 방법이다. 이는 특히 배열을 다룰 때 함수의 인자로 전달해야 할 때 매우 유용하다.

### (4) apply 사용의 이점

단적인 예로, 아래와 같이 배열 `numbers`에 `apply()` 없이 `Math.max()`와 `Math.min()`를 사용하면 `NaN`이 출력된다.

```javascript
const numbers = [5, 6, 2, 3, 7];

const max = Math.max(numbers);
console.log(max); // NaN

const min = Math.min(numbers);
console.log(min); // NaN
```

정리하자면 `apply()`를 사용하는 이유는 아래와 같다.

#### a. 배열 요소를 개별 인수로 변환

`apply()` 메소드는 첫 번째 인자로 `this` 값(여기서는 `null` 또는 `undefined`)을 받고, 두 번째 인자로 인수 목록을 배열 형태로 받는다. `apply()`는 이 배열의 요소들을 개별 인수로 함수에 전달한다. 이는 `Math.max()`나 `Math.min()`과 같이 여러 인수를 받는 함수에 배열의 요소들을 개별 인수로 전달하기 위해 필요하다.

#### b. 간결하고 효율적인 코드 작성

배열에 저장된 여러 값을 `Math.max()`나 `Math.min()`에 전달하려면 일반적으로 반복문을 사용하거나 배열을 해체하여야 한다. 하지만 `apply()`를 사용하면 이 과정을 간단하게 줄일 수 있어, 코드를 더 간결하고 읽기 쉽게 만든다.

### (5) apply 없이 사용하는 방법

그리하여.. ES6 이후에는 `apply()`를 사용하지 않고도 전개 구문(spread syntax) 문법(`...`)을 사용하여 배열 요소를 개별 인수로 함수에 전달할 수 있는 것이다. spread syntax를 사용하면 `apply()`와 유사한 결과를 제공하지만 더 깔끔하고 현대적인 문법을 사용한다.

```javascript
const numbers = [5, 6, 2, 3, 7];

const max = Math.max(...numbers); // 7
const min = Math.min(...numbers); // 2
```

### (6) call과의 차이

`call()` 또한 호출할 함수의 인수를 **쉼표로 구분한 리스트 형식**으로 전달한다. 이처럼 `apply()`와 `call()`는 호출할 함수에 인자를 전달하는 방식만 다를 뿐, `this`로 사용할 객체를 전달하면서 함수를 호출하는 것은 동일하다.

```javascript
function getThisBinding() {
  console.log(arguments);
  return this;
}

// this로 사용할 객체
const thisArg = { a: 1 };

console.log(getThisBinding.apply(thisArg, [1, 2, 3]));
// Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// {a: 1}

console.log(getThisBinding.call(thisArg, 1, 2, 3));
// Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// {a: 1}
```

### (7) splice에 사용하기

```javascript
const arr1 = [1, 4];
const arr2 = [2, 3];

arr1.splice(1, 0, arr2);
```

위 예제에 따르면 3번째 인수 arr2를 해체해 전달해야 한다. 그렇지 않으면 arr1에 arr2 배열이 추가된다. 이러한 경우 `apply()`를 이용해 `splice()`를 호출해야 한다. `apply()`의 두 번째 인수(배열)는 `apply()`가 호출하는 함수에 해체되어 전달된다.

```javascript
const arr1 = [1, 4];
const arr2 = [2, 3];

Array.prototype.splice.apply(arr1, [1, 0].concat(arr2));
console.log(arr1) // [1, 2, 3, 4]
```

단, 아래와 같이 스프레드 문법을 사용하면 더욱 간결하고 가독성 좋게 표현할 수 있다.

```javascript
const arr1 = [1, 4];
const arr2 = [2, 3];

arr1.splice(1, 0, ...arr2);
console.log(arr1) // [1, 2, 3, 4]
```

### (7) 결론

결론적으로, `apply()`를 사용하는 것은 주로 구형 자바스크립트 환경에서 필요하며, 현대의 자바스크립트에서는 spread 문법이 더욱 간결하고 선호되는 방식이다.

<br/>

## 2. [filter()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

### (1) 