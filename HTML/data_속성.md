# 📒 data 속성

> References
> - [W3C - HTML data Attributes](https://www.w3schools.com/tags/att_global_data.asp)
> - [취준생이 반드시 알아야 할 프론트엔드 지식들 - data 속성](https://github.com/baeharam/Must-Know-About-Frontend/blob/main/Notes/html/data.md)
> - [오쌤의 니가스터디 - Chapter34. HTML - data- 사용자 정의속성](https://www.youtube.com/watch?v=xXN2jMb0eCg)

<br/>

## 0. 목차
<!-- no toc -->
1. [한 줄 요약](#1-한-줄-요약)
2. [등장 배경](#2-등장-배경)
3. [정의 및 사용](#3-정의-및-사용)
4. [사용자 정의 속성 문법](#4-사용자-정의-속성-문법)
5. [사용 예시 및 실습](#5-사용-예시-및-실습)

<br/>

## 1. 한 줄 요약

**DOM에 데이터를 저장할 수 있는 사용자 정의 데이터 속성** 으로 `data-` 다음 오는 값이 데이터가 됩니다. 이 속성은 사용하고자 하는 용도에 적합한 속성이나 요소가 없을 때 사용하며 해당 웹페이지가 **독자적으로 사용하는 값** 입니다.

<br/>

## 2. 등장 배경

HTML에서는 원래 지정된 속성만 사용할 수 있었습니다. 예를 들어, `img` 태그에는 `src`와 `alt` 같은 속성이 있었습니다. 개발자들이 이러한 제한에 불편함을 느꼈고, W3C(World Wide Web Consortium)는 사용자가 직접 정의할 수 있는 속성을 만들기로 결정했습니다. 이를 통해 개발자들은 기존 속성과 겹치지 않도록 주의하면서 자신들의 사용자 정의 속성을 만들 수 있게 되었습니다.

<br/>

## 3. 정의 및 사용

데이터 사용자 정의 속성은 html 요소에 추가 정보를 저장할 수 있는 방법을 제공합니다. 다만, 웹페이지와 독립적인 다른 소프트웨어가 이 속성을 사용해서는 안됩니다. 예를 들어, 아래와 같이 음악 사이트에서 앨범 트랙의 음악을 리스트 형식으로 나타내는데, 시간 순으로 정렬하기 위해 `data-` 속성으로 재생시간을 삽입한다고 하겠습니다.

```html
<ol>
  <li data-length=3m20s>노래 제목</li>
  <!-- data 속성으로 'length'를 사용 -->
  ...
</ol>
```

만약 이 음악 사이트와 전혀 상관이 없는 외부에서 음악 시간을 알아내기 위해 사용한다면 목적에 부합하지 않는 것입니다. 따라서, `data-` 속성은 **해당 사이트만의 자체 스크립트를 위한 속성**이라고 할 수 있습니다.

<br/>

## 4. 사용자 정의 속성 문법

1. 알파벳은 소문자만 가능하며, 대문자를 포함해서는 안 됩니다.
2. 한글 등 다른 문자열 값을 허용하나 UTF-8 인코딩 설정과 코드 상의 가독성을 고려해 적어야 합니다.
3. `data-` 접두사 다음에 최소 한 글자 이상을 적어야 합니다.
4. 단어 조합일 때는 단어 사이에 하이픈 `-`을 사용해야 합니다.

```html
<!-- Example.1 -->
<ul>
  <li data-animal-type="bird">Owl</li>
  <li data-animal-type="fish">Salmon</li>
  <li data-animal-type="spider">Tarantula</li>
</ul>
```

```html
<!-- Example.2 -->
<style>
  img { width: 150px; }
  img [ data-animal-type='birds' ]{ border: 5px solid red; }
  img [ data-animal-type='mammal' ]{ border: 5px solid green; }
  img [ data-animal-type='fish' ]{ border: 5px solid yellow; }
</style>
```
