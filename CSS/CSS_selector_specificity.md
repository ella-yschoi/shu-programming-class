# 📒 CSS Selector Specificity

보통 하나의 요소(element)에는 여러 스타일 속성이 설정되어 있는 경우가 많습니다. 브라우저는 그렇게 설정된 속성들 중 어떤 속성을 우선적으로 적용할지를 아래의 우선순위에 따라 계산합니다.

<br/>

## 1. CSS Selector Specificity에 따른 우선 순위

1. `!important`
2. 인라인 스타일: HTML에서 직접 스타일을 준 경우 `style=""`
3. ID 선택자 `#example`
4. 클래스 선택자 `.example`, 속성 선택자 `type="radio"`, 의사 클래스 선택자 `:hover`
5. 유형 선택자 `h1`, 의사 요소 `:before`
6. 부모 요소에 의해 상속된 속성

<br/>

## 2. 참고 자료

[[CSS] 선택자(selector) 우선순위, 명시도(specificity), !important](https://leettle.tistory.com/13)
