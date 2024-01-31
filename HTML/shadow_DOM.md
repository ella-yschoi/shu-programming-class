# 📒 ShadowDOM

<br/>

## 0. 목차

<br/>

## 1. ShadowDOM 이란?

Shadow DOM은 웹 컴포넌트의 핵심 기술 중 하나로, 주요 DOM에서 분리된, 독립적인 DOM 트리를 만드는 기술입니다. 이 독립적인 DOM 트리는 'Shadow Tree'라고 불리며, 이를 통해 HTML, CSS, JavaScript를 포함하는 웹 컴포넌트의 내부 구현을 캡슐화합니다. Shadow DOM을 사용하면 컴포넌트의 내부와 외부가 명확히 구분되어, 내부 스타일과 스크립트가 외부와 충돌하지 않습니다.

<br/>

## 2. ShadowDOM이 사용되는 이유

- **스타일 캡슐화**: Shadow DOM은 컴포넌트의 스타일을 외부 DOM으로부터 격리합니다. 이는 컴포넌트 내부의 CSS가 페이지의 다른 부분에 영향을 미치지 않게 하며, 동시에 외부 스타일의 영향을 받지 않도록 보호합니다.

- **스크립트 격리**: 컴포넌트의 JavaScript 코드도 Shadow DOM 내부에 캡슐화되어, 전역 스코프의 오염을 방지하고 다른 스크립트와의 충돌을 예방합니다.

- **재사용성과 유지보수성 향상**: 컴포넌트 기반 개발을 촉진하며, 재사용 가능하고 유지보수하기 쉬운 코드를 작성할 수 있도록 돕습니다. 각 컴포넌트는 독립적으로 동작하므로, 하나의 컴포넌트를 수정하더라도 다른 컴포넌트에 영향을 미치지 않습니다.

- **DOM 구조의 단순화**: 메인 DOM 트리가 복잡해질 수 있는 많은 요소들을 Shadow DOM 내부에 숨겨, 전체 DOM 구조를 더 단순하고 관리하기 쉽게 만듭니다.

<br/>

## 3. ShadowDOM의 사용 방법

Shadow DOM을 사용하는 기본적인 절차는 다음과 같습니다.

1. **Shadow DOM 첨부**: JavaScript를 사용하여 HTML 요소에 Shadow DOM을 첨부합니다. `Element.attachShadow()` 메서드를 사용하여 새로운 shadow root를 생성합니다.

   ```javascript
   const hostElement = document.querySelector('#host');
   const shadowRoot = hostElement.attachShadow({ mode: 'open' });
   ```

2. **Shadow Tree 구성**: 생성된 shadow root 내에 HTML과 CSS를 추가하여 Shadow Tree를 구성합니다. 이 트리는 외부 DOM과 격리되어 있습니다.

   ```javascript
   shadowRoot.innerHTML = `<style>/* 스타일 정의 */</style><div>Shadow DOM 컨텐츠</div>`;
   ```

3. **인터랙션과 접근성**: Shadow DOM은 외부 DOM과 독립적이지만, JavaScript를 통해 상호 작용할 수 있습니다. `mode: 'open'`을 설정하면 외부에서 shadow DOM에 접근할 수 있으나, `mode: 'closed'`를 설정하면 외부에서 접근할 수 없습니다.

Shadow DOM은 웹 컴포넌트의 캡슐화와 재사용성을 강화하는 데 중요한 역할을 합니다. 그러나 사용하기 전에 브라우저 호환성과 성능 영향을 고려해야 합니다.
