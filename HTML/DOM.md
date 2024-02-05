# 📒 DOM

DOM은 HTML 코드를 해석해서 요소들을 트리 형태로 구조화해 표현하는 형식이며, 스크립트 및 프로그래밍 언어와 페이지를 연결합니다. 주로 JavaScript를 사용해 웹 화면의 콘텐츠를 추가, 수정, 삭제하거나 이벤트를 처리할 수 있도록 프로그래밍 인터페이스를 제공합니다.

<br/>

## 0. 목차

<!-- no toc -->
1. [DOM 이란?](#1-dom-이란)
2. [DOM의 역할](#2-dom의-역할)
3. [HTML DOM과 JavaScript의 관계](#3-html-dom과-javascript의-관계)
4. [일부 DOM 인터페이스가 사용되지 않는 이유](#4-일부-dom-인터페이스가-사용되지-않는-이유)
5. [참고 자료](#5-참고-자료)

<br/>

## 1. DOM 이란?

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

## 2. DOM의 역할

### (1) 렌더링

웹브라우저는 로딩을 마친 html 문서를 해석하여 화면을 통해 계속된 결과를 보여 주는 역할을 하며, 이 과정을 렌더링이라고 합니다.

<p align="left" width="60%"><img width="600" alt="Rendering" src="https://github.com/ella-yschoi/shu-programming-class/assets/123397411/7574636f-eafb-4239-8bbb-a60847a8c952">

이러한 렌더링은 브라우저가 스스로 해석한 html 코드를 화면을 통해 보여주는 과정으로, 해석된 결과를 어떻게 화면에 보여 줄 것인지 판단한 후 브라우저 화면에 그 결과가 나타나는 기본적인 흐름이며, 이 안에는 세부적인 절차들이 있습니다.

### (2) 렌더링 과정

<p align="left" width="60%"><img width="600" alt="Rendering Process" src="https://github.com/ella-yschoi/shu-programming-class/assets/123397411/2623fbce-8213-48eb-9995-6e438425bfea">

렌더링 과정은 웹 콘텐츠가 화면에 렌더링되기에 앞서 브라우저가 html 코드를 해석하여 요소들을 트리 형태로 구조화한 DOM(Document Object Model)을 생성하고, 이 DOM을 토대로 웹 콘텐츠를 렌더링하게 됩니다. 일반적으로 html 코드는 요소가 다른 요소 안에 포함되는 형태를 띄고, 이로 인해 DOM은 트리 형태의 계층 구조를 형성하여 웹 요소를 표현합니다.

### (3) DOM의 목적

<p align="left" width="60%"><img width="600" alt="DOM" src="https://github.com/ella-yschoi/shu-programming-class/assets/123397411/8d9c70e5-a8cf-4a0c-a836-ecf5d6256aad">

DOM은 HTML이 해석되어서 렌더링 결과물이 나타나기 전에 생성되는 문서이자 데이터 입니다. HTML 코드에 써있는대로 결과를 출력하는게 브라우저의 역할인데, 왜 중간에 DOM 이라는 데이터를 생성할까요? 그것은 바로 JavaScript를 사용해 이 문서에 대한 스크립트를 작성할 수 있게 해주는데에 목적이 있기 때문입니다.

<p align="left" width="60%"><img width="600" alt="DOM and JavaScript" src="https://github.com/ella-yschoi/shu-programming-class/assets/123397411/447a4b0a-9b94-4a42-b594-36751a1e3ff3">

DOM은 JavaScript를 사용하여 웹 콘텐츠를 추가, 수정, 삭제하거나 이벤트를 처리할 수 있도록 프로그래밍 인터페이스를 제공하며, JavaScript가 웹 문서에 대한 동작을 구현하고 나면 DOM에 그 결과가 반영되어 웹 브라우저 화면이 다시 렌더링 됩니다.

즉, HTML 코드는 정적인 텍스트이므로 웹 화면이 사용자와 동적인 상호작용을 하기 위해서는 DOM이 그 역할을 해줄 수 있는 것입니다. 따라서 DOM의 존재는 웹 화면의 동적 상호작용에 있어 중요한 역할을 합니다.

<br/>

## 3. HTML DOM과 JavaScript의 관계

HTML DOM은 웹 페이지의 구조적 표현이며, JavaScript는 이러한 구조에 접근하고 조작하는 수단입니다. 하나가 다른 하나보다 상위에 있다기보다는, 둘은 서로 상호작용하며 웹 페이지의 동적인 동작을 가능하게 하는 역할을 합니다.

정리하자면 둘은 "따로" 있는 것이 아니라, "같이" 있는 것으로 볼 수 있습니다. HTML DOM은 기본적인 웹 페이지의 '골격'을 제공하고, JavaScript를 통한 DOM 조작은 이 '골격'에 '생명'을 불어넣어 사용자와의 상호작용을 가능하게 한다고 볼 수 있습니다.

<br/>

## 4. 일부 DOM 인터페이스가 사용되지 않는 이유

문서객체모델 (DOM)의 발전과정에서 `DOMConfiguration`, `DOMErrorHandler`, `DOMImplementationList`와 같은 인터페이스가 더 이상 사용되지 않게 된 것은 기술의 진화, 웹 표준의 조정, 그리고 개발자들의 요구에 따른 것입니다.

브라우저의 변화 방향성은 웹 표준의 조정, 개발자 커뮤니티의 피드백, 보안과 성능 등을 반영합니다. 이를 위해 오래된 기능들은 보다 새롭고 효율적인 기능들로 대체되고 있으며, 웹 표준도 이러한 변화를 반영하여 지속적으로 갱신되고 있습니다.

웹 표준이 바뀌는 이유는 다양하며 이러한 변화는 주로 웹의 진화, 기술의 발전, 사용자와 개발자의 필요에 따라 이루어집니다. 특히 사용자의 인터넷 사용 방식과 트렌드, 웹 디자인을 반영하거나 새로운 보안 위협에 대응하고 성능을 향상시키기 위한 목적으로도 웹 표준이 발전합니다.

웹 표준을 조정하고 발전시키는 과정은 W3C (World Wide Web Consortium)와 WHATWG (Web Hypertext Application Technology Working Group)와 같은 조직에서 주도하며, 이를 통해 웹은 보다 접근성이 높고, 사용하기 쉽고, 강력하며, 보안이 강화된 플랫폼으로 발전하고 있습니다.

<br/>

## 5. 참고 자료

- [MDN: 문서 객체 모델(DOM)](https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model)
- [MDN: DOM 소개](https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/Introduction#dom_%EA%B3%BC_javascript)
- [유노코딩: DOM이란 뭘까요? 초 짧은 설명..!](https://www.youtube.com/watch?v=zyz1eJJjsNE)
