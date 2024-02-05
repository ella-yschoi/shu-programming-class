# 📒 Display 속성의 사용과 동작 원리

<br/>

## 0. 목차

<!-- no toc -->
1. [각 속성별 특징](#1-각-속성별-특징)
2. [예시 코드](#2-예시-코드)

<br/>

## 1. 각 속성별 특징

- `block`: 요소를 블록 레벨로 만들어 줄 전체를 차지합니다. e.g `<div>`, `<p>`
- `inline`: 요소를 인라인 레벨로 만들어, 내용만큼의 공간을 차지합니다. e.g. `<span>`, `<a>`
- `inline-block`: 인라인 레벨이면서 블록 속성을 갖습니다. 즉, 행의 흐름을 따르면서도 높이와 너비를 지정할 수 있습니다.
- `flex`: 유연한 박스 모델을 제공하여, 자식 요소들의 배치, 정렬, 크기 조정이 용이합니다.
- `grid`: 2차원 레이아웃 시스템을 제공하여 복잡한 레이아웃을 쉽게 구성할 수 있습니다.

<br/>

## 2. 예시 코드

<p align="left" width="100%"><img width="600" alt="CSS display" src="https://github.com/ella-yschoi/shu-programming-class/assets/123397411/3a96c871-8e48-4b56-9284-33a1ddc0ab27">

```css
div {
  width: 30%;
}

.container1 {
  display: block; /* 요소를 블록 레벨로 만들어 줄 전체를 차지 */
  border: solid 1px red;
  background-color: lightcoral;
  margin-bottom: 10px;
  padding: 10px;
}

.container2 {
  display: inline; /* 요소를 인라인 레벨로 만들어, 내용만큼의 공간을 차지 */
  border: solid 1px green;
  background-color: lightgreen;
  margin-bottom: 10px;
  padding: 10px;
}

.container3 {
  display: inline-block; /* 인라인 레벨이면서 블록 속성을 가짐 */
  border: solid 1px blue;
  width: 30px; /* 행의 흐름을 따르면서도 너비 지정 가능 */
  height: 40px; /* 행의 흐름을 따르면서도 높이 지정 가능 */
  background-color: lightblue;
  margin-left: 10px;
  margin-bottom: 10px;
  padding: 10px;
}

.container4 {
  display: flex;
  justify-content: space-around; /* flex 아이템을 공간을 균등하게 나눠서 배치 */
  align-items: center; /* flex 아이템을 세로 방향으로 가운데 정렬 */
  flex-direction: row; /* flex 아이템을 가로 방향으로 배치 */
  border: solid 1px purple;
  background-color: lavender;
  margin-bottom: 10px;
  padding: 10px;
}

.container5 {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 세 개의 컬럼으로 구성된 grid */
  grid-gap: 10px; /* grid 아이템 간의 간격 */
  border: solid 1px brown;
  background-color: lightyellow;
  margin-bottom: 10px;
  padding: 10px;
}
```
