# 📒 Pseudo-classes

의사 클래스(가상 클래스)는 선택자에 추가하는 키워드로, **선택한 요소가 특정한 상태**여야 만족할 수 있습니다. 즉, 요소의 특정 상태를 기반으로 스타일을 정의합니다.

<br/>

## 0. 목차

<!-- no toc -->
1. [pseudo-class란](#1-pseudo-class란)
2. [의사 클래스와 의사 요소의 차이](#2-의사-클래스와-의사-요소의-차이)
3. [참고 자료](#3-참고-자료)

<br/>

## 1. pseudo-class란

CSS에서 의사 클래스(pseudo-class) 선택자는 문서 트리의 정보가 아닌 **상태에 따라 요소를 대상으로** 합니다. 예를 들어, `a:visited` 선택자는 사용자가 이미 방문한 링크에,  `:hover`는 사용자가 마우스를 요소 위에 올렸을 때, `:focus`는 요소가 포커스를 받았을 때, `:active`는 요소가 활성화 되었을 때 적용됩니다.

### (1) 활용

의사 클래스를 사용하면 문서 트리 콘텐츠와 관련된 경우 뿐만 아니라 탐색기 히스토리(`:visited` 등), 콘텐츠의 상태(특정 폼 요소에 적용한 `:checked` 등), 마우스의 위치(커서가 마우스 위인지 아닌지 알 수 있는 `:hover` 등)처럼 외부 인자와 관련된 경우에도 스타일을 적용할 수 있습니다.

### (2) 예시 코드

```css
button:hover {
  color: blue;
}

input:focus {
  border-color: blue;
}
```

<br/>

## 2. 의사 클래스와 의사 요소의 차이

참고로, 의사 요소는 의사 클래스와 달리 요소의 특정 부분에 스타일을 적용할 때 사용합니다. CSS 의사 요소(가상 요소)는 선택자에 추가하는 키워드로, **선택한 요소의 특정 일부분에만** 스타일을 입힐 수 있습니다. 예를 들어 `::first-line`을 사용하면 문단 첫 줄의 글씨체만 바꿀 수 있습니다. 이때, 하나의 선택자에 하나의 의사 요소만 사용할 수 있으며, 반드시 단순 선택자 뒤에 위치해야 합니다.

```css
/* 모든 <p> 요소 첫 번째 줄은 파랑색으로 */
p::first-line {
  color: blue;
}

/* 모든 링크 뒤에 화살표 추가 */
a::after {
  content: "→";
}
```

<br/>

## 3. 참고 자료

- [MDN - 가상 클래스](https://developer.mozilla.org/ko/docs/Glossary/Pseudo-class)
- [MDN - 의사 클래스](https://developer.mozilla.org/ko/docs/Web/CSS/Pseudo-classes)
- [MDN - 의사 요소](https://developer.mozilla.org/ko/docs/Web/CSS/Pseudo-elements)
- [Selectors별 지원 브라우저 알아보는 사이트](https://css4-selectors.com/selectors/)
