# 📒 얕은 복사와 깊은 복사

<br/>

## 0. 목차

1. [얕은 복사](#1-얕은-복사)
2. [깊은 복사](#2-깊은-복사)

<br/>

## 1. 얕은 복사

### (1) 설명

아래 코드에서 `home` 객체는 얕은 복사(shallow copy)가 된다. 여기서 얕은 복사란, 객체의 최상위 수준의 값만 복사하는 것을 의미한다.

```javascript
const ella = {name: 'Ella', age: 20};
const updated = {
  ...ella,
  job: 'FE developer',
  home: {address: 'seoul'}
};

console.log(updated); // {name: 'Ella', age: 20, job: 'FE developer'}
```

얕은 복사와 깊은 복사로 생성된 객체는 원본과 다른 객체다. 즉, 원본과 복사본은 '참조 값이 다른' 별개의 객체다. 하지만 얕은 복사는 객체에 중첩되어 있는 객체의 경우 참조 값을 복사하고, 깊은 복사는 객체에 중첩되어 있는 객체까지 모두 복사해서 원시값처럼 완전한 복사본을 만든다는 차이가 있다.

### (2) 예시 코드

이번에는 모던 자바스크립트 Deep Dive에 있는 예시 코드로 설명을 해보겠다.

```javascript
const o = { x: { y: 1 } };
const c1 = { ...o };

console.log(c1); // x: {y: 1}
console.log(o); // x: {y: 1}
console.log(c1 === o); // false

console.log(c1.x); // {y: 1}
console.log(o.x); // {y: 1}
console.log(c1.x === o.x); // true
```

위의 예시 코드에서 `c1`과 `o`가 동일하지 않은 이유는 JavaScript에서 객체를 비교할 때 객체의 참조(메모리 주소)를 비교하기 때문이다. `{...o}`를 사용하여 `o` 객체를 복사하는 경우, `c1`은 `o`와 같은 속성 값을 가지지만, **두 객체는 서로 다른 메모리 주소에 위치**한다. 즉, `c1`과 `o`는 서로 다른 객체이다.

`console.log(c1)`와 `console.log(o)`가 동일한 값을 출력하는 것은 `c1`과 `o`가 같은 속성과 값을 가지고 있기 때문이다. 하지만, `console.log(c1 === o)`에서 `false`가 출력되는 이유는 두 객체가 같은 데이터를 가지고 있더라도 **서로 다른 메모리 위치에 존재하기 때문이다.**

### (3) JS의 객체

JavaScript에서 객체는 **참조 타입**이다. 이는 변수가 **실제 객체의 값이 아니라 객체를 가리키는 참조(메모리 주소)를 저장한다는 것을 의미**한다. 따라서 두 객체가 서로 다른 메모리 주소를 가리키고 있다면, 두 객체는 JavaScript의 `===` (엄격한 동등 비교 연산자)로 비교했을 때 서로 다르다고 판단된다.

### (4) 부작용

위 코드에서 `updated` 객체는 `ella` 객체의 속성들을 복사받는다. `...ella` 구문은 `ella` 객체의 모든 상위 수준의 속성들을 `updated` 객체로 복사하는데, 이때 `name`과 `age`는 간단한 값이므로 문제가 없지만, `home` 속성은 객체다.

`home` 객체가 얕은 복사되었다는 것은, `updated` 객체의 `home` 속성과 원본 `ella` 객체의 `home` 속성이 동일한 메모리 주소를 참조한다는 의미다. 즉, 아래와 같이 `updated.home` 또는 `ella.home` 중 하나를 변경하면, 두 객체 모두에 영향을 미치게 된다. 이는 얕은 복사의 주요 특징 중 하나이며, 때로는 예기치 않은 부작용을 초래할 수 있다.

```javascript
const ella = {
  name: 'Ella',
  age: 20,
  home: { address: 'Seoul' }
};

// Ella 객체를 사용하여 Updated 객체 생성 (얕은 복사)
const updated = {
  ...ella,
  job: 'FE developer'
};

// 변경 전
console.log(ella.home); // Seoul
console.log(updated.home); // Seoul

// 변경 후: Updated 객체의 home 속성 변경
updated.home.address = 'Busan';

console.log(ella.home); // Busan
console.log(updated.home); // Busan
```

<br/>

## 2. 깊은 복사

### (1) 설명

따라서 객체 내부의 객체와 같은 중첩된 구조를 복사할 때는 깊은 복사(deep copy)를 고려해야 한다. 깊은 복사는 **객체의 모든 수준을 새로운 메모리에 복사**하여, **원본 객체와 완전 독립된 복사본을 생성**한다. 이를 통해 중첩된 객체들이 서로 영향을 주지 않도록 할 수 있다.

### (2) 예시 코드

이번에는 모던 자바스크립트 Deep Dive에 있는 예시 코드로 설명을 해보겠다.

```javascript
const _ = require('lodash'); // lodash를 활용한 깊은 복사
const c2 = _.cloneDeep(o);

console.log(c2 === o); // false
console.log(c2.x === o.x); // false
```

위의 예시 코드에서 `_.cloneDeep(o)`를 사용하여 객체 `o`를 깊은 복사하는 경우, `c2`는 `o`의 깊은 복사본이 되며, 모든 중첩된 객체들도 새롭게 복사된다. 그러나 여기서 중요한 것은 **깊은 복사가 새로운 객체를 생성한다는 점**이다.

즉, 깊은 복사는 원본 객체와 동일한 구조와 값을 갖지만, 메모리 상에서는 **완전히 독립된 새로운 객체**를 만들기 때문에 완전한 복사본이어도 같은 객체가 아닌 것이다. 따라서 `console.log(c2 === o)`의 결과는 `false`다. 왜냐하면 `c2`와 `o`는 서로 다른 메모리 주소에 할당된 별도의 객체이기 때문이다. 이는 얕은 복사와 깊은 복사 모두에 해당하는 일반적인 규칙이다.

또한 `console.log(c2.x === o.x)`의 결과도 `false`인 이유는 `_.cloneDeep`에 의해 `o.x`가 가리키는 중첩된 객체 또한 새로운 복사본으로 생성되었기 때문이다. 즉, `c2.x`와 `o.x`는 동일한 값과 구조를 가지지만 서로 다른 메모리 주소를 가리키는 별도의 객체다.

### (3) 핵심

깊은 복사의 핵심은 원본 객체와 구조적으로 동일하지만 메모리 상에서는 완전히 독립된 복사본을 만드는 것이다. 따라서 이를 통해 원본 객체나 복사된 객체 중 하나를 변경해도 다른 하나에는 영향을 미치지 않는 것이다.

### (4) 깊은 복사 방법

#### a. JSON.stringify

깊은 복사를 하는 방법으로는 JSON.stringify()를 사용해 `ella` 객체를 JSON 문자열로 변환하고, JSON.parse()로 문자열을 다시 새로운 객체로 변환한다. 이렇게 하면 `updated`는 `ella`의 깊은 복사본이 되며, 서로 완전히 독립적인 상태가 된다. 하지만 객체 내 함수나 순환 참조, 특별한 객체 (날짜, 정규 표현식 등)는 올바르게 복사되지 않을 수 있다.

```javascript
const ella = {
  name: 'Ella',
  age: 20,
  home: { address: 'Seoul' }
};

// Ella 객체를 깊은 복사하여 Updated 객체 생성
const updated = JSON.parse(JSON.stringify(ella));
updated.job = 'FE developer';
updated.home.address = 'Busan';

console.log(ella.home.address); // Seoul: 원본 데이터 변하지 않음
console.log(updated.home.address); // Busan
```

#### b. 재귀 함수 사용

재귀 함수를 사용하여 객체의 모든 수준을 탐색하고 새로운 객체에 복사할 수 있으며 객체 내부의 중첩된 객체, 배열 등도 처리할 수 있다.

아래의 `deepCopy` 함수는 중첩된 객체의 각 수준에 대해 자기 자신을 반복적으로 호출하며, 각 수준에서 복사본을 생성한다. 이 과정은 객체의 모든 중첩 수준이 처리될 때까지 계속되며 그 결과, 전체 객체 구조가 완전히 복사된다.

```javascript
const ella = {
  name: 'Ella',
  age: 20,
  home: { address: 'Seoul' }
};

function deepCopy(obj) {
  // 재귀 종료 조건을 꼭 작성해준다
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  let temp = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    temp[key] = deepCopy(obj[key]); // deepCopy가 자기 자신을 호출, 호출은 객체의 중첩된 속성에 대해 수행되며 각 중첩된 객체 또는 배열도 복사
  }

  return temp;
}

const updated = deepCopy(ella);
updated.home.address = 'Busan';

console.log(ella.home.address); // Seoul: 원본 데이터 변하지 않음
console.log(updated.home.address); // Busan
```

#### c. Object.assign() 또는 Spread 연산자를 이용한 중첩된 객체 처리

[`Object.assign()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) 또는 Spread 연산자(`...`)는 얕은 복사를 한다. 하지만 중첩된 객체에 대해서는 원본 객체가 바뀔 수 있기에 추가로 재귀를 이용해 깊은 복사를 구현할 수 있다.

```javascript
// 1. 원본 데이터가 변하는 경우: Object.assign()만 사용
const ella = {
  name: 'Ella',
  age: 20,
  home: { address: 'Seoul' }
};

// Object.assign을 사용하여 얕은 복사
const copied = Object.assign({}, ella);

// 복사된 객체의 중첩된 속성을 변경
copied.home.address = 'Busan';

console.log(ella.home.address); // Busan: 원본 데이터가 변함
console.log(copied.home.address); // Busan

```

```javascript
// 2. 원본 데이터가 변하지 않는 경우: Object.assign() + 재귀 호출
function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  let copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = (typeof obj[key] === 'object' && obj[key] !== null) ? deepCopy(obj[key]) : obj[key]; // deepCopy 재귀 호출
    }
  }

  return copy;
}

const ella = {
  name: 'Ella',
  age: 20,
  home: { address: 'Seoul' }
};

const updated = deepCopy(ella);
updated.home.address = 'Busan';

console.log(ella.home.address); // Seoul: 원본 객체가 바뀌지 않음
console.log(updated.home.address); // Busan
```

#### d. 서드 파티 라이브러리 사용

[Lodash](https://despiteallthat.tistory.com/167)라는 라이브러리의 `_.cloneDeep()` 같은 함수를 사용할 수도 있다. JavaScript에서 배열 안의 객체들의 값을 핸들링 할 때 유용하다.

```javascript
import _ from 'lodash';

const ella = {
  name: 'Ella',
  age: 20,
  home: { address: 'Seoul' }
};

const updated = _.cloneDeep(ella);
updated.home.address = 'Busan';

console.log(ella.home.address); // Seoul
console.log(updated.home.address); // Busan
```

<br/>

## 3. 결론

객체를 프로퍼티 값으로 갖는 객체의 경우, 얕은 복사는 한 단계까지만 복사하는 것을 말하고, 깊은 복사는 객체에 중첩되어 있는 객체까지 모두 복사하는 것을 말한다.

<br/>

## 4. 참고

참고로, 아래와 같은 경우도 얕은 복사와 깊은 복사라고 말한다.

### (1) 얕은 복사

**객체**를 할당한 변수를 다른 변수에 할당하는 것

```javascript
const o = { x: 1 };
const c2 = o;

console.log(c2 === o); // true
```

### (2) 깊은 복사

**원시 값**을 할당한 변수를 다른 변수에 할당하는 것

```javascript
const v = 1;
const c1 = v;

console.log(c1 === v); // true
// c1과 v는 동일한 값을 갖지만, 원시값이므로 각각 별도의 메모리 위치에 이 값들이 저장됨
// 그러나 원시값의 비교는 값 자체를 기준으로 하므로, c1 === v는 true를 반환
```
