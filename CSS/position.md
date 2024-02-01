# 📒 Position의 종류와 특징

각 position 속성은 특정 레이아웃 요구 사항을 충족하기 위해 사용되며, 이를 통해 레이아웃을 더 유연하게 제어할 수 있습니다.

<br/>

## 0. 목차

<!-- no toc -->
1. [static](#1-static)
2. [relative](#2-relative)
3. [absolute](#3-absolute)
4. [fixed](#4-fixed)
5. [참고 및 실습](#5-참고-및-실습)

<br/>

## 1. static

기본값이므로 모든 태그들은 일단 `position: static` 상태 입니다. 차례대로 왼쪽 → 오른쪽, 위 → 아래로 쌓입니다. 더불어, 다른 위치 지정 속성(top, right, bottom, left, z-index)에 영향을 받지 않습니다.

```css
span, div {
  background: yellow;
  border: 1px solid red;
}
```

<br/>

## 2. relative

여기서 태그의 위치를 살짝 변경하고 싶을 때 `position: relative`를 사용합니다. 요소를 일반 문서 흐름에 따라 배치하고, top/right/bottom/left 속성을 사용하여 원래 위치를 기준으로 조정할 수 있습니다. 핵심은 `relative`는 각각의 방향을 기준으로 태그 안쪽 방향으로 이동한다는 것입니다.

```css
span, div {
  background: yellow;
  border: 1px solid red;
}

.top {
  position: relative;
  top: 5px;
  z-index: 1;
}
```

<br/>

## 3. absolute

`relative`가 `static`인 상태를 기준으로 주어진 픽셀만큼 움직였다면, `absolute`는 `position: static` 속성을 가지고 있지 않은 조상을 기준으로 움직입니다. 만약 조상 중에 포지션이 `relative`, `absolute`, `fixed`인 태그가 없다면 가장 위의 태그(body)가 기준이 됩니다.

```css
#absolute {
  background: yellow;
  position: absolute;
  right: 0;
}

#parent {
  position: relative;
  width: 100px;
  height: 100px;
  background: skyblue;
}

#child {
  position: absolute;
  right: 0;
}
```

위의 예시를 보면, `#absolute`는 조상 태그 중 `postion: relative`인 것이 없기 때문에 body를 기준으로 가장 오른쪽으로 달라붙습니다. 반면 `#child`는 조상 태그인 `#parent`가 `position: relative`이기 때문에 그것을 기준으로 가장 오른쪽으로 달라붙습니다. 참고로 `absolute`가 되면 `div`여도 더는 `width: 100%`가 아닙니다.

<br/>

## 4. fixed

뷰포트에 대해 고정되어, 스크롤 시에도 같은 위치에 남아있습니다.

```css
#fixed {
  background: yellow;
  position: fixed;
  right: 0;
}
```

<br/>

## 5. 참고 및 실습

[제로초 - CSS 포지션(position)](https://www.zerocho.com/category/CSS/post/5864f3b59f1dc000182d3ea1)
