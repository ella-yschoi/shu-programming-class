// 01. 최댓값과 최솟값
// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12939

// 나의 풀이
function solution(s) {
  const numbers = s.split(' ').map(Number); // 문자열을 공백으로 분리하고 숫자로 변환하여 배열 생성
  const min = Math.min(...numbers); // 배열 내 최솟값 계산
  const max = Math.max(...numbers); // 배열 내 최댓값 계산

  return `${min} ${max}`; // 최솟값과 최댓값 문자열로 반환
}

// 다시 풀기
function solution(s) {
  // 공백으로 구분된 문자열을 숫자 배열로 변환
  const numArray = s.split(' ').map(num => parseInt(num));

  // 최솟값과 최댓값 구하기
  const minValue = Math.min(...numArray);
  const maxValue = Math.max(...numArray);

  // 최솟값과 최댓값을 문자열로 반환
  return `${minValue} ${maxValue}`;
}

// 다른 풀이 1
function solution(s) {
  const arr = s.split(' ');

  return Math.min(...arr) + ' '+ Math.max(...arr);
}

// TIL
// (1) Math.min() & Math.max()는 숫자들의 최솟값과 최댓값을 구하는 메소드이므로, 문자열은 넣을 수 없음.
// (2) 반복문 내부에서 최솟값과 최댓값 계산을 하려면 반복문이 아닌, 전체 문자열을 대상으로 계산해야 함.
// (3) 즉, 위 문제에서는 문자열 s에서 숫자들을 추출해 최솟값 최댓값 계산 후, 문자열 형태로 반환하는 것이 포인트!