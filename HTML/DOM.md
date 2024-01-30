# 📒 DOM

> Reference: [취준생이 반드시 알아야 할 프론트엔드 지식들 - BOM과 DOM](https://github.com/baeharam/Must-Know-About-Frontend/blob/main/Notes/frontend/bom-dom.md)

<br/>

## 0. 목차

<!-- no toc -->
1. [DOM](#1-dom)
2. [DOM0과 DOM2의 이벤트 처리 방식의 차이](#2-dom0과-dom2의-이벤트-처리-방식의-차이)
3. [DOM0과 DOM2의 이벤트 처리 방식의 장단점](#3-dom0과-dom2의-이벤트-처리-방식의-장단점)
4. [DOM2 방식의 이벤트 캡처링과 버블링](#4-dom2-방식의-이벤트-캡처링과-버블링)

<br/>

## 1. DOM

DOM이란, **웹 페이지를 프로그래밍적으로 제어할 수 있게 해주는 객체모델** 입니다. 최상위 인터페이스로 Node가 있으며 이는 아래와 같은 구조로 나타납니다.

<p align="left" width="60%"><img width="500" alt="DOM" src="https://github.com/ella-yschoi/shu-programming-class/assets/123397411/411e76d5-cca8-4937-b29b-d00327c79185">

위의 트리구조를 보면 엘리먼트 뿐만 아니라 텍스트와 주석도 있는 것을 알 수 있는데, 이런 것들까지도 DOM 트리에 포함됩니다. 실제적인 DOM 트리는 아래와 같이 생성됩니다.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>제목</title>
  </head>
  <body>
  <div class="클래스"></div>
  <!-- 주석 -->
  <a href="https://naver.com">네이버</a>
  </body>
</html>
```

<p align="left" width="60%"><img width="300" alt="Live DOM Viewer" src="https://github.com/ella-yschoi/shu-programming-class/assets/123397411/c2a4b503-2fd3-4d3e-8227-e9846bd79d51">

[Live DOM Viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/)를 사용해서 DOM 트리를 구성해 본 것으로 엘리먼트 뿐만 아니라 텍스트 노드와 주석 노드까지 포함하고 있습니다. 이제 이런 DOM을 다루기 위해선 `getElementsById` , `querySelector` , `firstElementChild` 등과 같은 브라우저가 제공하는 DOM API를 사용하면 됩니다.

<br/>

## 2. DOM0과 DOM2의 이벤트 처리 방식의 차이

### (1) DOM0 이벤트 처리 방식

DOM0 이벤트 처리 방식은 **HTML 요소의 속성을 이용하여 HTML 요소에 이벤트 핸들러를 직접 지정하는 방식**입니다. 예를 들어, `<button onclick="함수()">Click me</button>`와 같이 사용합니다.

```html
<!-- HTML -->
<button onclick="handleClickDOM0()">Click me</button>
```

```javascript
// JavaScript
function handleClickDOM0() {
  alert('DOM0 방식으로 처리된 클릭 이벤트');
}
```

### (2) DOM2 이벤트 처리 방식

DOM2에서는 `addEventListener` **메서드를 사용하여 이벤트 리스너를 추가하는 방식**을 사용합니다. 이 방식은 여러 이벤트 핸들러를 동일한 요소에 추가할 수 있게 해줍니다.

```html
<!-- HTML -->
<button id="multiEventHandlerButton">Click me</button>
```

```javascript
const button = document.getElementById('multiEventHandlerButton');

// 첫 번째 핸들러
button.addEventListener('click', function() {
  alert('첫 번째 클릭 이벤트 핸들러');
});

// 두 번째 핸들러
button.addEventListener('click', function() {
  alert('두 번째 클릭 이벤트 핸들러');
});

// 위 코드는 동일한 버튼에 두 개의 클릭 이벤트 핸들러를 추가해 버튼을 클릭하면 두 개의 알림이 차례대로 표시됩니다.
```

<br/>

## 3. DOM0과 DOM2의 이벤트 처리 방식의 장단점

- DOM0 방식은 간단하고 직관적이지만, **한 요소에 하나의 이벤트 핸들러만 할당**할 수 있다는 단점이 있습니다.
- DOM2 방식은 **여러 핸들러를 추가**할 수 있고, 이벤트 캡처링 및 버블링 제어가 가능하다는 장점이 있습니다. 하지만, 코드가 더 복잡해질 수 있고, 브라우저 호환성을 고려해야 합니다.

<br/>

## 4. DOM2 방식의 이벤트 캡처링과 버블링

### (1) 이벤트 캡처링(Event Capturing)

이벤트가 **상위 요소에서 하위 요소**로 전파되는 과정입니다. 이벤트 캡처링은 문서의 외부에서 시작되어 이벤트 타겟으로 내려갑니다.

**특정 요소에서 발생하는 이벤트가 부모 요소로 전달되는 것을 방지하고 싶을 때** 이벤트 캡처링을 사용할 수 있습니다. 예를 들어, 웹 페이지에 모달이나 팝업이 있을 때, 모달 밖의 클릭을 감지하여 모달을 닫고 싶지만 모달 내부의 클릭은 모달을 닫지 않게 하고 싶은 경우에 유용합니다. 혹은 페이지 내에서 특정 이벤트의 초기 단계에서 무언가를 처리하고 싶을 때 캡처링 단계를 활용할 수 있습니다. 예를 들어, 특정 요소에 대한 클릭 이벤트가 발생하기 전에 먼저 다른 작업을 수행하고 싶은 경우에 적용할 수 있습니다.

### (2) 이벤트 버블링(Event Bubbling)

이벤트가 **하위 요소에서 상위 요소**로 전파되는 과정입니다. 이벤트 버블링은 이벤트 타겟에서 시작하여 DOM 트리를 거슬러 올라갑니다.

웹 페이지에 동적으로 요소가 추가되거나 변경될 때, 각각의 요소에 개별적으로 이벤트 리스너를 추가하는 대신 **부모 요소에 하나의 이벤트 리스너를 추가하여 자식 요소들의 이벤트를 관리**할 수 있습니다. 예를 들어, 할 일 목록에서 각 항목에 대한 클릭 이벤트를 처리하기 위해 전체 목록에 이벤트 리스너를 추가할 수 있습니다. 혹은 드롭다운 메뉴나 탭 메뉴에서 여러 메뉴 항목 중 하나를 클릭할 때 해당 항목에 대한 정보를 부모 요소의 이벤트 리스너를 통해 처리할 수 있습니다. 이는 코드의 재사용성과 관리의 용이성을 향상시킵니다.

### (3) 이벤트 캡처링과 버블링을 제어하기

`addEventListener` 메서드의 세 번째 매개변수를 사용하여 이벤트 캡처링과 버블링을 제어할 수 있습니다. 이 매개변수는 불리언 값이며, 기본값은 `false`입니다. 이벤트 캡처링을 사용하려면 false 대신 true를 세 번째 매개변수로 전달하면 됩니다.

- `false`: 이벤트 버블링 단계에서만 핸들러가 동작합니다.
- `true`: 이벤트 캡처링 단계에서 핸들러가 동작합니다.
