# 📒 스코프

스코프(Scope)는 변수와 함수가 어디서 접근 가능하고 존재하는지를 정의하는 범위입니다. 스코프는 코드 내에서 변수와 함수의 가시성 및 생명주기를 결정합니다.

<br/>

## 0. 목차

<!-- no toc -->
1. [스코프의 종류](#1-스코프의-종류)
2. [지역 스코프의 유형](#2-지역-스코프의-유형)
3. [스코프 체인](#3-스코프-체인)
4. [정적 스코프와 동적 스코프](#4-정적-스코프와-동적-스코프)
5. [참고 자료](#5-참고-자료)

<br/>

## 1. 스코프의 종류

### (1) 전역 스코프

프로그래밍 환경에서 '전역 범위'는 다른 모든 범위를 포함하고, **모든 범위에 접근 가능한 스코프**입니다. 클라이언트 사이드 JavaScript에서 전역 범위는 일반적으로 모든 코드가 실행되는 웹 페이지입니다. 다만 과도한 사용은 코드의 복잡성을 증가시키고 충돌의 위험을 높일 수 있습니다.

### (2) 지역 스코프

지역 스코프는 **함수 내부 또는 블록 내부**에서 선언된 변수의 범위를 의미합니다. 지역 변수는 선언된 함수나 블록 내에서만 접근할 수 있으며, **외부에서는 접근할 수 없습니다**. 즉, 변수 이름은 전역 범위가 아닌 범위 안에서 해당 값에만 바인딩됩니다.

<br/>

## 2. 지역 스코프의 유형

### (1) 함수 스코프

함수 스코프는 변수가 **함수 내에서만 접근 가능**하고, 함수 밖에서는 접근할 수 없는 범위를 의미합니다.

JavaScript에서 `var` 키워드를 사용해 선언된 변수는 함수 스코프를 따릅니다. 이는 변수가 해당 변수를 포함하는 함수 내에서만 유효하다는 것을 의미하며, 함수 외부에서는 해당 변수에 접근할 수 없습니다.

```javascript
function myFunction() {
  var myVar = "hello";
  console.log(myVar); // hello
}

myFunction();
console.log(myVar); // ReferenceError: myVar is not defined
```

위 예제에서 `myVar`는 `myFunction` 함수 내에서 선언되었으므로, 함수 외부에서 `myVar`에 접근하려고 하면 오류가 발생합니다.

### (2) 블록 스코프

블록 스코프는 변수가 **중괄호(`{}`)로 둘러싸인 블록 내에서만 접근 가능**하고, 블록 밖에서는 접근할 수 없는 범위를 의미합니다.

ES6부터 도입된 `let`과 `const` 키워드를 사용해 선언된 변수는 블록 스코프를 따릅니다. 이는 변수가 선언된 블록(예: `if` 문, `for` 루프, 또는 단순 중괄호 블록 등) 내에서만 유효하다는 것을 의미합니다.

```javascript
if (true) {
  let myBlockVar = "hello";
  console.log(myBlockVar); // hello
}

console.log(myBlockVar); // ReferenceError: myBlockVar is not defined
```

이 예제에서 `myBlockVar`는 `if` 블록 내에서 `let`으로 선언되었으므로, 블록 외부에서 `myBlockVar`에 접근하려고 하면 오류가 발생합니다.

<br/>

## 3. 스코프 체인

스코프 체인은 중첩된 스코프 간의 관계를 의미합니다. JavaScript에서는 내부 함수가 외부 함수의 스코프에 접근할 수 있습니다. 이는 내부 함수에서 외부 함수의 변수를 참조할 수 있음을 의미합니다. 스코프 체인은 변수를 찾기 위해 내부 스코프부터 외부 스코프까지 연쇄적으로 검색하는 메커니즘을 제공합니다.

### (1) 스코프 체인의 역할

이 개념은 함수와 블록의 중첩된 스코프 간에 변수와 함수가 어떻게 접근되고 해석되는지를 설명합니다. 스코프 체인은 변수를 찾거나 함수를 호출할 때 해당 식별자의 위치를 결정하는 데 중요한 역할을 합니다.

### (2) 스코프 체인의 동작

스코프 체인은 내부 스코프에서 외부 스코프로 변수를 검색하는 메커니즘을 제공합니다. 이 과정은 다음과 같이 진행됩니다.

1. **내부 스코프 검색**: 코드 실행 중에 변수나 함수를 참조할 때, JavaScript 엔진은 먼저 현재 스코프에서 해당 식별자(변수나 함수 이름)를 찾습니다.

2. **외부 스코프로 이동**: 현재 스코프에서 식별자를 찾을 수 없는 경우, 엔진은 외부 스코프로 이동하여 검색을 계속합니다. 이 과정은 식별자를 찾거나 전역 스코프에 도달할 때까지 반복됩니다.

3. **전역 스코프 검색**: 만약 전역 스코프까지 이동했음에도 불구하고 식별자를 찾지 못하면, 참조 에러(ReferenceError)가 발생합니다.

### (3) 스코프 체인의 예시

```javascript
let globalLet = "global";

function outerFunction() {
  let outerLet = "outer";

  function innerFunction() {
    let innerLet = "inner";
    console.log(innerLet);   // inner
    console.log(outerLet);   // outer
    console.log(globalLet);  // global
  }

  innerFunction();
}

outerFunction();
```

이 예시에서 `innerFunction`은 자신의 지역 변수 `innerLet`, 외부 함수 `outerFunction`의 변수 `outerLet`, 그리고 전역 변수 `globalLet`에 접근할 수 있습니다. 이는 스코프 체인을 통해 가능한 일입니다.

### (4) 스코프 체인의 중요성

- **변수 접근성**: 스코프 체인은 함수가 어디에서 호출되었는지에 상관없이, 함수가 정의된 환경에 따라 변수에 접근할 수 있게 해줍니다.

- **클로저(Closure)**: 스코프 체인은 클로저의 핵심 개념입니다. 내부 함수가 외부 함수의 스코프에 접근할 수 있기 때문에, 외부 함수가 종료된 후에도 외부 함수의 변수에 접근할 수 있는 클로저가 형성됩니다.

<br/>

## 4. 정적 스코프와 동적 스코프

상위 스코프가 결정되는 시점을 기준으로 스코프는 동적 스코프(Dynamic Scope)와 정적 스코프(Static Scope) 또는 어휘적 스코프(Lexical Scope)로 나뉩니다. 이는 **변수가 어떻게 스코프와 연결되는지를 정의**하는 두 가지 주요한 스코핑 메커니즘입니다. 이는 프로그래밍 언어가 변수의 가시성과 생명주기를 어떻게 처리하는지를 결정합니다.

### (1) 정적 스코프(Static Scope) 또는 어휘적 스코프(Lexical Scope)

정적 스코프는 **변수가 코드를 작성하는 시점에 결정되는 스코프**를 의미합니다. 이는 함수의 스코프가 함수가 호출되는 위치가 아니라 **함수가 정의된 위치에 의해 결정**된다는 것을 의미합니다. JavaScript는 정적 스코프를 사용하는 대표적인 언어입니다.

```javascript
var x = "global";

function outerFunction() {
  console.log(x); // global
}

function innerFunction() {
  var x = "local";
  outerFunction();
}

innerFunction();
```

위 코드에서 `outerFunction`은 전역 변수 `x`를 참조합니다. `outerFunction`이 `innerFunction` 내부에서 호출되더라도, `outerFunction`의 스코프는 그 정의에 따라 전역 변수 `x`를 참조합니다.

### (2) 동적 스코프(Dynamic Scope)

동적 스코프는 **변수의 스코프가 함수가 호출되는 시점에 결정되는 방식**을 의미합니다. 이는 **함수의 실행 컨텍스트에 따라 변수의 스코프가 달라질 수 있음**을 의미합니다. 동적 스코프를 사용하는 언어로는 Bash 스크립트나 일부 Lisp 변형 등이 있습니다.

```bash
x="global"

function outerFunction() {
  echo $x
}

function innerFunction() {
  local x="local"
  outerFunction
}

innerFunction # local
```

위 Bash 스크립트 예제에서 `outerFunction`은 `innerFunction`에서 호출될 때 `innerFunction`의 로컬 변수 `x`를 참조합니다.

### (3) 요약

JavaScript는 정적 또는 렉시컬 스코프를 사용하여, 함수와 변수의 스코프가 코드가 작성되는 시점에 결정되고, **실행 시점의 컨텍스트에 영향을 받지 않습니다.**

다시 말해, JavaScript는 렉시컬 스코프를 따르기 때문에 태어나자마자 상위 스코프가 결정이 되고, 이후 해당 함수에 의해 함수 객체가 생성이 되고 나면, 해당 함수 객체는 본인의 상위 스코프를 항상 알 수 있게 됩니다.

이렇게 상위 스코프를 항상 알 수 있게 되는 이유는 **JavaScript에서의 함수는 태어나면서 자신의 내부 슬롯에 상위 스코프에 대한 참조를 저장하기 때문**입니다.

<br/>

## 5. 참고 자료

- [MDN - 전역 스코프](https://developer.mozilla.org/ko/docs/Glossary/Global_scope)
- [MDN - 지역 범위](https://developer.mozilla.org/ko/docs/Glossary/Local_scope)
- [[10분 테코톡] 🍧 엘라의 Scope & Closure](https://www.youtube.com/watch?v=PVYjfrgZhtU)
