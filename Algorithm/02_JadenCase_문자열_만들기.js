// 02. JadenCase 문자열 만들기
// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12951

// 나의 풀이: map() & charAt() & slice() 사용
// 함수형 프로그래밍의 원칙을 따르고 가독성 간결성 확보
function solution(s) {
  return s
    .toLowerCase() // 모든 문자열을 소문자로 변환
    .split(' ') // 공백을 기준으로 단어들을 분리하여 배열 생성
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // 각 단어를 JadenCase로 변환
    .join(' '); // 단어들을 다시 공백으로 연결하여 문자열 생성
}

// 다른 풀이 1: 내장함수들 붙이지 않고 words 선언
// for 루프로 직접적으로 배열의 각 요소를 변경하여 효율적
function solution(s) {
  // 문자열 s
  // 모두 소문자로 바꿔주고 공백 포함 쪼갠걸 words로 선언
  const words = s.toLowerCase().split(' ')
  // for문 순회해서 각 글자 탐색하고
  for (let i = 0; i < words.length; i++) {
    // 만약 문자열 길이가 0보다 크면
    if (words[i].length > 0) {
      // 첫 번째 글자를 대문자로, 나머지 글자는 그대로 리턴
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
  }    
  // JadenCase로 바꾼 answer 리턴
  const answer = words.join(' ');
  return answer;
}

// 다른 풀이 2: for loop 사용 & index 기준
// 문자열을 한번만 순회해 메모리 사용 측면에서 효율적이나 가독성 떨어짐
// 문자열 길이가 매우 길수록 문자열 처리 함수 호출이 적어지므로 효율적
function solution(s) {
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    // 현재 문자가 첫 번째 문자이거나 이전 문자가 공백인 경우
    if (i === 0 || s[i-1] === " ") {
      answer += s[i].toUpperCase(); // 현재 문자를 대문자로 변환하여 answer에 추가
    } else {
      // 이전 문자가 공백이 아닌 경우
      answer += s[i].toLowerCase(); // 현재 문자를 소문자로 변환하여 answer에 추가
    }
  }
  return answer; // 변환된 문자열 반환
}

// 다른 풀이 3: for loop 사용 & substring 기준
// 단어를 개별적으로 처리하기보다 전체 문자열을 순회해 비효율적
function solution(s) {
  // 공백을 기준으로 문자열을 분리하여 배열 생성하여 변수 answer에 저장
  let answer = s.split(" ");

  for (let i = 0; i < answer.length; i++) {
    // 각 요소의 첫 글자를 대문자로 변환하고 나머지 글자를 소문자로 변환하여 요소에 저장
    answer[i] = answer[i].substring(0, 1).toUpperCase() + answer[i].substring(1).toLowerCase();
  }

  // 변환된 요소들을 공백으로 연결하여 문자열로 반환
  return answer.join(" ");
}

// TIL
// 문자열의 첫 번째 문자를 가져오는 4가지 방법

  // (1) charAt()로 index의 문자를 가져오기
    var str = 'Hello, World, JavaScript';
    var first = str.charAt(0);
    console.log(first); // H

  // (2) [Index]로 특정 Index의 문자를 가져오기
    var str = 'Hello, World, JavaScript';
    var first = str[0];
    console.log(first); // H

  // (3) slice()로 문자열을 잘라 가져오기
    var str = 'Hello, World, JavaScript';
    var first = str.slice(0, 1);
    console.log(first);   // H

  // (4) substring()로 문자열을 잘라 가져오기
    var str = 'Hello, World, JavaScript';
    var first = str.substring(0, 1); // 첫 번째 글자 추출
    console.log(first); // H