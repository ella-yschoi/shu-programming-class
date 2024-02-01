# 📒 !important

`!important` 규칙은 특정 스타일이 다른 모든 선언보다 우선하도록 설정하는 데 사용됩니다.

<br/>

## 0. 목차

<!-- no toc -->
1. [!important 사용 시기](#1-important-사용-시기)
2. [!important 사용 예시](#2-important-사용-예시)
3. [참고 자료](#3-참고-자료)

<br/>

## 1. !important 사용 시기

이 규칙은 일반적으로 CSS의 캐스케이딩 규칙을 무시하고자 할 때 사용됩니다. CSS는 같은 속성을 여러 번 정의했을 때, 나중에 설정한 값이 적용되므로, 만약 나중에 설정한 값이 적용되지 않게 하려면 속성값 뒤에 `!important`를 붙입니다.

하지만 `!important`는 코드의 유지 보수를 어렵게 하고, 예상치 못한 문제를 일으킬 수 있으므로 주의해서 사용해야 합니다. 가장 좋은 사용 시기는 제3자의 CSS (e.g. 라이브러리 또는 프레임워크)를 오버라이드할 필요가 있을 때(외부 라이브러리나 프레임워크가 제공하는 기본 스타일이 프로젝트의 디자인 요구사항과 충돌할 때) 또는 특정 스타일을 절대적으로 적용해야 할 때입니다.

<br/>

## 2. !important 사용 예시

```css
selector {
  property: value;
  property: value !important;
}
```

<br/>

## 3. 참고 자료

- [MDN: !iimportant](https://developer.mozilla.org/en-US/docs/Web/CSS/important)