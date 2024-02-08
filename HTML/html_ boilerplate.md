# 📒 HTML Boilerplate

HTML 문서에서 느낌표(`!`)를 입력하여 생성되는 기본 문서 구조 입니다. "Boilerplate"라는 용어는 코드나 텍스트가 여러 곳에서 거의 변경 없이 재사용될 때 사용되는데, HTML에서는 이것이 **표준 문서의 기본 구조**를 의미합니다.

<br/>

## 0. 목차

<!-- no toc -->
1. [HTML Boilerplate의 전체 코드](#1-html-boilerplate의-전체-코드)
2. [표준을 따르고 있음](#2-표준을-따르고-있음)
3. [기본 언어 지정](#3-기본-언어-지정)
4. [문자 인코딩](#4-문자-인코딩)
5. [다양한 화면 크기 제어](#5-다양한-화면-크기-제어)
6. [참고 자료](#6-참고-자료)

<br/>

## 1. HTML Boilerplate의 전체 코드

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

<br/>

## 2. 표준을 따르고 있음

```html
<!DOCTYPE html>
```

`<!DOCTYPE html>`은 HTML 문서의 첫 번째 줄에 위치하는 선언문으로, 웹 브라우저에게 해당 문서가 HTML5 **표준을 따르고 있음**을 알려주는 역할을 합니다. 이 선언문은 웹 페이지의 나머지 내용과는 다르게 태그 형식을 따르지 않으며, 문서의 **최상단**에 위치해야 합니다.

`<!DOCTYPE>`: 이 부분은 'document type declaration'의 약자로, 웹 브라우저에게 이 문서의 '문서 유형'을 알려주는 선언문입니다. `html`: 이 부분은 문서 유형이 HTML임을 명시하며 특히 HTML5 버전을 지칭합니다.

HTML5 이전의 버전에서는 `DOCTYPE` 선언이 더 복잡했습니다. 예를 들어 HTML 4.01에서는 `DOCTYPE` 선언이 DTD (Document Type Definition)에 대한 링크를 포함했으며, 이는 문서의 정확한 HTML 버전과 규칙을 명시했습니다. 그러나 HTML5에서는 `<!DOCTYPE html>`로 단순화되어 웹 개발자들이 더 쉽게 사용할 수 있게 되었습니다.

이 선언문은 웹 브라우저가 문서를 '표준 모드(standards mode)'에서 렌더링하도록 지시합니다. 표준 모드에서는 브라우저가 최신 웹 표준을 기반으로 페이지를 해석하고 표시합니다. `DOCTYPE` 선언이 없거나 잘못된 경우, 브라우저는 '호환 모드(quirks mode)'로 전환되어 오래된 규칙과 레거시 스타일로 페이지를 렌더링하여 예상치 못한 레이아웃과 기능적 문제를 야기할 수 있습니다.

<br/>

## 3. 기본 언어 지정

```html
<html lang="en"></html>
```

`<html lang="en">` 태그는 HTML 문서에서 사용되는 **기본 언어**를 지정하는 코드입니다. 이 코드는 웹 페이지가 작성된 주 언어를 나타내며, **웹 접근성과 검색 엔진 최적화** 에 중요한 역할을 합니다.

`html`: 이 태그는 HTML 문서의 루트(root) 요소입니다. 전체 HTML 문서의 범위를 정의하며, 다른 모든 HTML 요소는 이 `html` 태그 내부에 위치해야 합니다. `lang`: 이 속성은 문서의 기본 언어를 지정합니다. `"en"`: 이 값은 영어(English)를 나타내는 언어 코드입니다.

`<html lang="en">` 태그를 사용함으로써, 세 가지 이점을 얻을 수 있습니다. 스크린 리더와 같은 보조 기술이 문서의 언어를 인식하고, 해당 언어에 맞게 콘텐츠를 사용자에게 전달할 수 있습니다. 두 번째로, 검색 엔진은 `lang` 속성을 사용하여 콘텐츠의 언어를 파악하고, 특정 언어를 사용하는 대상 그룹에게 페이지를 더 효과적으로 제공할 수 있습니다. 세 번째로, 다국어 웹사이트의 경우 각 페이지의 `lang` 속성을 해당 언어에 맞게 설정함으로써, 사용자에게 더 맞춤화된 경험을 제공할 수 있습니다.

<br/>

## 4. 문자 인코딩

```html
<meta charset="UTF-8" />
```

`meta charset="UTF-8"`는 HTML 문서의 문자 인코딩을 설정하는 역할을 합니다.

`meta`: 이 태그는 HTML 문서의 메타데이터를 정의합니다. 메타데이터는 문서 자체에 대한 정보를 담고 있지만, 문서의 내용을 직접적으로 나타내지는 않습니다. `charset`: 이 속성은 문서에서 사용되는 문자 인코딩 방식을 지정합니다. `charset`은 "Character Set"의 약자로, 문자 집합을 의미합니다.

`"UTF-8"`: 이 값은 UTF-8 인코딩을 사용하겠다는 것을 나타냅니다. UTF-8은 전 세계 대부분의 문자를 포함하는 유니코드를 위한 가변 길이 문자 인코딩 방식입니다. 이 인코딩을 사용하면 영어 알파벳 뿐만 아니라 한글, 일본어, 중국어 등 다양한 언어의 문자를 올바르게 표시할 수 있습니다.

간단히 말해, `meta charset="UTF-8"` 코드는 웹 브라우저에게 해당 HTML 문서가 UTF-8 인코딩을 사용하여 작성되었음을 알려주어, **다양한 언어의 문자가 제대로 표시**될 수 있도록 합니다. 이 코드 없이는 문자가 깨져 보일 수도 있기에 특히 다국어를 다루는 글로벌 웹사이트에서 매우 중요한 설정입니다. (참고로, EUC-KR은 문자표에 존재하지 않는 문자라면 폰트가 깨지게 되고, UTF-8은 조합할 수 있는 모든 문자를 나타낼 수 있습니다.)

> *"UTF-8과 같은 유니코드 기반 인코딩은 다양한 언어를 지원할 수 있으며 언어가 혼합된 페이지와 서식을 처리할 수 있습니다. 또한 각 페이지 또는 수신되는 서식 제출에 대한 문자 인코딩을 개별적으로 결정하기 위해 서버 로직(server-side logic)을 사용할 필요가 없습니다."* - W3C(World Wide Web Consortium)

<br/>

## 5. 다양한 화면 크기 제어

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`는 웹페이지가 모바일 장치나 **다양한 화면 크기에 어떻게 보여질지를 제어**하는 데 사용됩니다. 각 부분에 대해 설명하겠습니다:

`meta`: 이것은 메타 태그로, HTML 문서에 대한 정보를 제공하지만, 페이지의 내용을 직접적으로 표시하지는 않습니다. `name="viewport"`: 여기서 `viewport`는 사용자의 화면, 즉 **브라우저의 가시 영역**을 의미합니다. `name="viewport"` 설정은 브라우저에게 페이지의 뷰포트 설정 방법을 알려줍니다.

`content="width=device-width"`: 이 설정은 뷰포트의 너비를 장치의 화면 너비에 맞추도록 지정합니다. 즉, **페이지의 너비가 사용자의 장치 화면 너비와 일치**하게 됩니다. 이는 반응형 웹 디자인에서 매우 중요한 부분으로, 다양한 크기의 화면에서 웹페이지가 잘 보이도록 합니다.

`initial-scale=1.0`: 이 부분은 페이지가 처음 로드될 때의 초기 확대/축소 레벨을 설정합니다. `1.0`은 100% 확대율을 의미하며, 페이지가 사용자의 장치 화면에 **정확한 1:1 비율**로 표시되도록 합니다.

<br/>

## 6. 참고 자료

- [보일러플레이트 코드란 무엇인가요?](https://aws.amazon.com/ko/what-is/boilerplate-code/)
- [Basic HTML5 Template: Use This HTML Boilerplate as a Starter for Any Web Dev Project](https://www.freecodecamp.org/news/basic-html5-template-boilerplate-code-example/)
- [[개발상식] 문자열 인코딩에 대해 살펴보자!](https://velog.io/@kysung95/%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D-%EB%AC%B8%EC%9E%90%EC%97%B4-%EC%9D%B8%EC%BD%94%EB%94%A9%EC%97%90-%EB%8C%80%ED%95%B4-%EC%82%B4%ED%8E%B4%EB%B3%B4%EC%9E%90)
