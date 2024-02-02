# 📒 CSS Box Model

CSS 박스 모델은 문서 트리의 요소에 대해 생성되고 시각적 포매팅 모델에 따라 배치된 사각형 상자를 나타냅니다. 각 박스에는 content 영역(예: 텍스트, 이미지 등)과 padding, border, margin 영역을 선택적으로 사용할 수 있습니다.

<br/>

## 0. 목차

<!-- no toc -->
1. [CSS Box Model의 개념과 특성](#1-css-box-model의-개념과-특성)
2. [box-sizing](#2-box-sizing)
3. [참고 자료](#3-참고-자료)

<br/>

## 1. CSS Box Model의 개념과 특성

<p align="left" width="100%"><img width="600" alt="CSS Box Model" src="https://github.com/ella-yschoi/shu-programming-class/assets/123397411/0594aaca-87ba-44e3-b53b-3819c8fb37a5">

- `Content`: 요소의 텍스트나 이미지 등 HTML 태그 사이에 담긴 내용이 표현되는 영역입니다. width, height 프로퍼티를 가집니다.
- `Padding`: 테두리 안쪽에 위치하는 요소의 '내부 여백' 영역이며, border와 content 사이에 위치합니다.
- `Border`: padding과 margin 사이의 테두리이며, 박스의 경계를 표시하는 역할을 합니다.
- `Margin`: 테두리 바깥에 위치하는 요소의 '외부 여백' 영역입니다. 다른 박스와의 간격을 의미합니다.

<br/>

## 2. box-sizing

box-sizing 속성을 사용하면, width와 height이 컨텐츠 영역 기준인지, 테두리 영역 기준인지 정할 수 있습니다.

<p align="left" width="100%"><a href="https://www.binvisions.com/articles/box-sizing-property-difference-content-border/"><img width="600" alt="box-sizing" src="https://github.com/ella-yschoi/shu-programming-class/assets/123397411/aaa2b959-264d-42f2-ab03-da2f8b3c7e9c"></a>

- `box-sizing: border-box`: width를 말할 때 border와 padding, content 영역을 포함한 부분을 말합니다.
- `box-sizing: content-box`: width를 말할 때 border와 padding 영역을 포함하지 않은 가장 안쪽의 content 부분만을 말합니다.

<br/>

## 3. 참고 자료

- [Frontend Interview Handbook - 박스 모델](https://www.frontendinterviewhandbook.com/kr/css-questions/#%EB%B0%95%EC%8A%A4-%EB%AA%A8%EB%8D%B8%EC%97%90-%EB%8C%80%ED%95%9C-%EB%8B%B9%EC%8B%A0%EC%9D%98-%EC%9D%B4%ED%95%B4%EC%99%80-css%EC%97%90%EC%84%9C-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%97%90-%EB%8B%A4%EB%A5%B8-%EB%B0%95%EC%8A%A4-%EB%AA%A8%EB%8D%B8%EB%A1%9C-%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83%EC%9D%84-%EB%A0%8C%EB%8D%94%EB%A7%81%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95%EC%9D%84-%EC%84%A4%EB%AA%85%ED%95%98%EC%84%B8%EC%9A%94)
- [CSS box model에 대해서 설명해 주세요.](https://dev-ellachoi.tistory.com/18)
