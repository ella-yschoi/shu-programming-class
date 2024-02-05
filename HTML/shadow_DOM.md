# 📒 ShadowDOM

Shadow DOM은 웹 컴포넌트의 스타일과 기능을 **캡슐화**하고, **메인 DOM과 분리**하여 **재사용** 가능하고 유지보수가 용이한 웹 요소를 만드는 기술입니다.

<br/>

## 0. 목차

<!-- no toc -->
1. [ShadowDOM 이란?](#1-shadowdom-이란)
2. [ShadowDOM이 사용되는 이유](#2-shadowdom이-사용되는-이유)
3. [ShadowDOM 사용 방법](#3-shadowdom-사용-방법)
4. [ShadowDOM 사용 예시](#4-shadowdom-사용-예시)
5. [ShadowDOM 사용 시 주의사항](#5-shadowdom-사용-시-주의사항)
6. [참고 자료](#6-참고-자료)

<br/>

## 1. ShadowDOM 이란?

### (1) 캡슐화

웹 컴포넌트의 중요한 측면은 캡슐화입니다. 캡슐화를 통해 마크업 구조, 스타일, 동작을 숨기고 페이지의 다른 코드로부터의 분리하여 각기 다른 부분들이 충돌하지 않게 하고, 코드가 깔끔하게 유지될 수 있게 합니다.

### (2) Shadow Tree

Shadow DOM은 웹 컴포넌트의 핵심 기술 중 하나로, 주요 DOM에서 분리된, 독립적인 DOM 트리를 만드는 기술입니다. 이 독립적인 DOM 트리는 'Shadow Tree'라고 불리며, 이를 통해 HTML, CSS, JavaScript를 포함하는 웹 컴포넌트의 내부 구현을 캡슐화합니다. Shadow DOM을 사용하면 컴포넌트의 내부와 외부가 명확히 구분되어, 내부 스타일과 스크립트가 외부와 충돌하지 않습니다.

Shadow DOM은 숨겨진 DOM 트리가 통상적인 DOM 트리에 속한 요소에 부착될 수 있게 합니다. 이 shadow DOM 트리는 shadow root로부터 시작되어 원하는 모든 요소의 안에 부착될 수 있으며, 그 방법은 일반 DOM과 같습니다. (아래 사진에서 Flattened Tree (for rendering)는 (렌더링을 위해) 평평해진 트리)

<p align="left" width="100%"><a href="https://developer.mozilla.org/ko/docs/Web/API/Web_components/Using_shadow_DOM"><img width="1000" alt="ShadowDOM" src="https://github.com/ella-yschoi/shu-programming-class/assets/123397411/8bd79683-5af6-4c92-9c38-a7b446ed97c3"></a>

<br/>

## 2. ShadowDOM이 사용되는 이유

### (1) 스타일 캡슐화

Shadow DOM은 컴포넌트의 스타일을 외부 DOM으로부터 격리합니다. 이는 컴포넌트 내부의 CSS가 페이지의 다른 부분에 영향을 미치지 않게 하며, 동시에 외부 스타일의 영향을 받지 않도록 보호합니다.

### (2) 스크립트 격리

컴포넌트의 JavaScript 코드도 Shadow DOM 내부에 캡슐화되어, 전역 스코프의 오염을 방지하고 다른 스크립트와의 충돌을 예방합니다.

### (3) 재사용성과 유지보수성 향상

컴포넌트 기반 개발을 촉진하며, 재사용 가능하고 유지보수하기 쉬운 코드를 작성할 수 있도록 돕습니다. 각 컴포넌트는 독립적으로 동작하므로, 하나의 컴포넌트를 수정하더라도 다른 컴포넌트에 영향을 미치지 않습니다.

### (4) DOM 구조의 단순화

메인 DOM 트리가 복잡해질 수 있는 많은 요소들을 Shadow DOM 내부에 숨겨, 전체 DOM 구조를 더 단순하고 관리하기 쉽게 만듭니다.

<br/>

## 3. ShadowDOM 사용 방법

### (1) Shadow DOM 첨부

JavaScript를 사용하여 HTML 요소에 Shadow DOM을 첨부합니다. `Element.attachShadow()` 메서드를 사용하여 새로운 shadow root를 생성합니다.

```javascript
const hostElement = document.querySelector('#host');
const shadowRoot = hostElement.attachShadow({ mode: 'open' });
```

### (2) Shadow Tree 구성

생성된 shadow root 내에 HTML과 CSS를 추가하여 Shadow Tree를 구성합니다. 이 트리는 외부 DOM과 격리되어 있습니다.

```javascript
shadowRoot.innerHTML = `<style>/* 스타일 정의 */</style><div>Shadow DOM 컨텐츠</div>`;
```

### (3) 인터랙션과 접근성

Shadow DOM은 외부 DOM과 독립적이지만, JavaScript를 통해 상호 작용할 수 있습니다. `mode: 'open'`을 설정하면 외부에서 shadow DOM에 접근할 수 있으나, `mode: 'closed'`를 설정하면 외부에서 접근할 수 없습니다. Shadow DOM은 웹 컴포넌트의 캡슐화와 재사용성을 강화하는 데 중요한 역할을 하지만, 사용하기 전에 브라우저 호환성과 성능 영향을 고려해야 합니다.

```javascript
// Polyfill function to support both old 'createShadowRoot' and new 'attachShadow()' methods.
let attachShadow = function(element) {
  return element.attachShadow ? element.attachShadow() : element.createShadowRoot()
}
```

위의 코드는 Shadow DOM을 지원하는 브라우저에서 호환성을 유지하기 위한 폴리필(polyfill) 함수이자, 웹 개발에서 브라우저 간 호환성을 고려한 좋은 예시입니다. 이 함수는 `element.attachShadow` 메서드가 존재하는 경우 이를 사용하고, 그렇지 않은 경우 구식 메서드인 `element.createShadowRoot`를 사용합니다.

즉, `attachShadow` 함수는 주어진 엘리먼트에 Shadow DOM을 첨부하기 위해 현대적 방식(`attachShadow`)과 오래된 방식(`createShadowRoot`)을 모두 지원합니다. 이렇게 하면, 구형 브라우저에서도 Shadow DOM 관련 기능을 사용할 수 있도록 하는 것이 목적입니다.

<br/>

## 4. ShadowDOM 사용 예시

### (1) video 요소

브라우저들은 이것을 긴 시간동안 사용해오며 요소의 내부 구조를 캡슐화했습니다. 예를 들어 기본 브라우저 컨트롤이 노출된 `<video>` 요소가 있습니다. DOM에서 보이는 모든 것은 `<video>` 요소지만, 이것은 일련의 버튼들과 다른 컨트롤들을 이것의 shadow DOM 내부에 포함하고 있습니다. shadow DOM 명세서는 잘 만들어져 와서 여러분은 실제로 사용자 정의 요소의 shadow DOM을 조작할 수 있습니다. (실제로 chrome 개발자도구 설정 시 'show user agent shadow DOM'을 활성화하면 캡슐화된 코드를 볼 수 있습니다.)

### (2) 그 외

이밖에도 재사용 가능한 컴포넌트를 shadow DOM을 활용해 캡슐화하여 다른 페이지에서 독립적으로 재사용하거나, 웹 애플리케이션 안에서 특정 부분으로서 격리시킬 수 있습니다. 혹은 서드파티 라이브러리와의 스타일 충돌 방지를 위해 shadow DOM을 활용할 수도 있습니다.

<br/>

## 5. ShadowDOM 사용 시 주의사항

### (1) 메모리 사용량 증가

각 Shadow DOM 인스턴스는 별도의 메모리 공간을 차지합니다. 많은 수의 Shadow DOM 인스턴스가 있을 경우, 이는 전체 메모리 사용량을 증가시킬 수 있습니다.

### (2) 렌더링 성능 저하

Shadow DOM은 메인 DOM과 별도의 트리를 생성하기에 브라우저의 렌더링 엔진에 추가적인 부하를 줄 수 있습니다. 이에 더해 복잡한 Shadow DOM 구조는 브라우저의 렌더링 성능에 영향을 줄 수도 있습니다. 특히 많은 수의 스타일 규칙이 적용되거나 다수의 Shadow DOM 노드가 있을 경우, 렌더링 과정이 느려질 수 있습니다.

<br/>

## 6. 참고 자료

- [MDN - shadow DOM 사용하기](https://developer.mozilla.org/ko/docs/Web/API/Web_components/Using_shadow_DOM)
- [Polyfill function - github.com/JoshTheDerf/Muon](https://github.com/JoshTheDerf/Muon/blob/0f145ea981fcc0e19545e135cca2eb48e4e2958d/src/muon.es6#L37)
- [CSS in Angular](https://github.com/softcontext/tutorial-angular/blob/master/part3/css-in-angular.md)
