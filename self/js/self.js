const currentYear = 2024;
const birthYear = prompt('출생년도를 입력하세요. (YYYY)');
const age = currentYear - birthYear;

document.write('당신의 나이는 현재' + age + '살입니다. (2024년 기준)');