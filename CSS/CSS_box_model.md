# 📒 CSS Box Model

CSS 박스 모델은 웹 페이지의 요소들을 레이아웃하는 데 필요한 일관된 시스템을 제공하기 위해 사용되는 개념입니다. 이는 문서 트리의 요소에 대해 생성되고 시각적 포매팅 모델에 따라 배치된 사각형 상자를 나타내며, 각 박스에는 content 영역과 padding, border, margin 영역을 선택적으로 사용할 수 있습니다.

<br/>

## 0. 목차

<!-- no toc -->
1. [CSS Box Model의 존재 이유](#1-css-box-model의-존재-이유)
2. [CSS Box Model 구성 요소](#2-css-box-model-구성-요소)
3. [Padding과 Margin의 차이](#3-padding과-margin의-차이)
4. [box-sizing 속성](#4-box-sizing-속성)
5. [참고 자료](#5-참고-자료)

<br/>

## 1. CSS Box Model의 존재 이유

CSS 박스 모델의 존재 이유는 웹 페이지의 요소들을 레이아웃하는 데 필요한 **일관된 시스템을 제공**하기 위해서입니다. 이 모델은 웹 개발의 핵심적인 부분으로, **웹 페이지의 각 요소를 박스로 취급**하고 이들의 레이아웃과 디자인을 관리합니다.

### (1) 일관성 있는 레이아웃 제공

CSS 박스 모델은 웹 페이지 내 모든 요소에 대한 일관된 레이아웃 방식을 제공합니다. 이를 통해 개발자는 예측 가능하고 일관된 방식으로 페이지 레이아웃을 설계할 수 있습니다.

### (2) 디자인과 콘텐츠 분리

박스 모델은 콘텐츠(내용)와 디자인(레이아웃)을 분리함으로써, 웹 페이지의 구조와 스타일을 쉽게 관리할 수 있게 합니다. 이는 유지보수를 용이하게 하고, 디자인 변경 시 HTML 구조를 크게 바꿀 필요가 없게 만듭니다.

### (3) 반응형 디자인 지원

박스 모델은 요소의 크기를 백분율로 지정할 수 있게 함으로써, 다양한 화면 크기와 장치에 맞는 반응형 웹 디자인을 용이하게 합니다.

### (4) 시각적 일관성 유지를 통한 사용자 경험 증대

웹 페이지는 다양한 브라우저와 장치에서 볼 수 있어야 합니다. 박스 모델은 이러한 다양한 환경에서도 요소들이 일관된 방식으로 표시되도록 도와줍니다. 더 나아가, 사용자는 보다 직관적이고 이해하기 쉬운 웹 페이지를 경험할 수 있습니다.

<br/>

## 2. CSS Box Model 구성 요소

<p align="left" width="100%"><img width="600" alt="CSS Box Model" src="https://github.com/ella-yschoi/shu-programming-class/assets/123397411/0594aaca-87ba-44e3-b53b-3819c8fb37a5">

- `Content`: 요소의 텍스트나 이미지 등 HTML 태그 사이에 담긴 내용이 표현되는 영역입니다. width, height 프로퍼티를 가집니다.
- `Padding`: 테두리 안쪽에 위치하는 요소의 '내부 여백' 영역이며, border와 content 사이에 위치합니다.
- `Border`: padding과 margin 사이의 테두리이며, 박스의 경계를 표시하는 역할을 합니다.
- `Margin`: 테두리 바깥에 위치하는 요소의 '외부 여백' 영역입니다. 다른 박스와의 간격을 의미합니다.

<br/>

## 3. Padding과 Margin의 차이

### (1) 차이를 구분하는 것이 중요한 이유

두 속성은 요소의 레이아웃과 공간 분배에 영향을 미치며, 웹 페이지의 레이아웃을 정확하게 제어하고, 요소 간의 **시각적 관계를 명확하게 표현하는 데 필수적**입니다.

### (2) padding

- 요소의 **경계 내부**에 공간을 추가하여, **요소의 내용과 그 경계 사이의 공간**을 늘리는 데 사용됩니다.
- padding은 요소의 **전체 크기**에 영향을 미치며, 배경색이나 이미지는 padding 영역까지 확장됩니다.

### (3) margin

- **요소의 외부**에 공간을 추가하여, **주변 요소와의 거리**를 조절합니다.
- margin은 요소의 전체 크기에 직접적으로 영향을 주지 않으며, 배경색이나 이미지는 Margin 영역에 적용되지 않습니다.

<br/>

## 4. box-sizing 속성

box-sizing 속성을 사용하면, width와 height이 컨텐츠 영역 기준인지, 테두리 영역 기준인지 정할 수 있습니다.

<p align="left" width="100%"><a href="https://www.binvisions.com/articles/box-sizing-property-difference-content-border/"><img width="600" alt="box-sizing" src="https://github.com/ella-yschoi/shu-programming-class/assets/123397411/aaa2b959-264d-42f2-ab03-da2f8b3c7e9c"></a>

- `box-sizing: border-box`: width를 말할 때 border와 padding, content 영역을 포함한 부분을 말합니다.
- `box-sizing: content-box`: width를 말할 때 border와 padding 영역을 포함하지 않은 가장 안쪽의 content 부분만을 말합니다.

<br/>

## 5. 참고 자료

- [Frontend Interview Handbook - 박스 모델](https://www.frontendinterviewhandbook.com/kr/css-questions/#%EB%B0%95%EC%8A%A4-%EB%AA%A8%EB%8D%B8%EC%97%90-%EB%8C%80%ED%95%9C-%EB%8B%B9%EC%8B%A0%EC%9D%98-%EC%9D%B4%ED%95%B4%EC%99%80-css%EC%97%90%EC%84%9C-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%97%90-%EB%8B%A4%EB%A5%B8-%EB%B0%95%EC%8A%A4-%EB%AA%A8%EB%8D%B8%EB%A1%9C-%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83%EC%9D%84-%EB%A0%8C%EB%8D%94%EB%A7%81%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95%EC%9D%84-%EC%84%A4%EB%AA%85%ED%95%98%EC%84%B8%EC%9A%94)
- [CSS box model에 대해서 설명해 주세요.](https://dev-ellachoi.tistory.com/18)
