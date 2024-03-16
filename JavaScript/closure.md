# 📒 Closure

클로저(Closure)는 함수가 자신이 선언될 때의 환경(lexical environment)을 '기억'하고, 이 환경 밖에서 호출되더라도 해당 환경에 접근할 수 있는 특성을 의미합니다. 클로저는 주로 데이터를 은닉하고, 상태를 유지하기 위해 사용됩니다.

<br/>

## 0. 목차

<!-- no toc -->
1. [클로저 생성 조건](#1-클로저-생성-조건)
2. [클로저의 사용 사례](#2-클로저의-사용-사례)
3. [참고 자료](#3-참고-자료)

<br/>

## 1. 클로저 생성 조건

1. **중첩 함수**: 한 함수 내부에 다른 함수가 정의되어 있습니다.
2. **내부 함수가 외부 함수의 스코프에 접근**: 내부 함수는 외부 함수의 변수에 접근할 수 있습니다.
3. **외부 함수의 실행이 끝난 후에도 내부 함수가 실행**: 내부 함수는 외부 함수가 실행을 마친 후에도 외부 함수의 변수에 접근할 수 있습니다.

```javascript
function outerFunction() {
  let outerVariable = 100;

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

let myClosure = outerFunction(); // outerFunction 호출, 내부 함수 반환
myClosure(); // 100: outerVariable에 여전히 접근 가능
```

이 예시에서 `outerFunction`은 `innerFunction`을 반환합니다. `innerFunction`은 `outerFunction`의 로컬 변수 `outerVariable`에 접근하는 클로저입니다. `outerFunction`의 실행이 끝나고 나서도 `myClosure`를 통해 `innerFunction`을 호출하면, `outerVariable`에 접근하여 그 값을 출력할 수 있습니다.

<br/>

## 2. 클로저의 사용 사례

- **데이터 은닉**: 클로저를 사용하면 특정 데이터를 외부로부터 숨기고, 오직 특정 함수를 통해서만 접근할 수 있게 할 수 있습니다.
- **상태 유지**: 클로저는 함수가 호출될 때마다 상태를 유지할 수 있게 해주어, 상태가 필요한 다양한 프로그래밍 패턴에 활용됩니다.

<br/>

## 3. 참고 자료

- [MDN - 클로저](https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures)
- [[10분 테코톡] 🍧 엘라의 Scope & Closure](https://www.youtube.com/watch?v=PVYjfrgZhtU)
- [[생활코딩] JavaScript - closure](https://www.youtube.com/watch?v=bwwaSwf7vkE)
- [[NHN Cloud] - 자바스크립트의 스코프와 클로저](https://meetup.nhncloud.com/posts/86)
