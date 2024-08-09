// console.log('Hello world'); // 한줄 주석
/*
여러줄 주석
*/
// if (1 > 0) {
//   console.log('크다');
// }

// 자료형 - 문자열

// 자바 문자열
'' // 문자
"" // 문자열

// 자바스크립트 문자열
'' // 문자열 (문자도 문자열로 다룬다.)
"" // 문자열
// console.log("Hello world");
// console.log(typeof('h'));
// console.log(typeof("Hello"));
// console.log("\""); // 기능을 제고하는 이스케이핑
// console.log("a\nb"); // 기능을 부여하는 이스케이핑
// console.log("a\tb");
// console.log('\' 안녕하세요? "손정현님"');
// console.log("\" 안녕하세요? '손정현님'");

// 자바에서 """ """ 와 같은 처리는 백틱(`)
// console.log(`안녕하세요?
//   손정현님.
// 반갑습니다.
//   `);
// 문자열 연결 연산자 +
// console.log("안녕하세요?" + '손정현님');

// 자료형 - 숫자
// console.log(typeof(5)); // number type
// console.log(typeof(5.5)); // number type
// console.log(0.1e4); // 지수표기법
// console.log(parseInt("1.5")); // 문숫자를 숫자로 타입 변경
// console.log(parseFloat("1.5"));
/*
NaN: Not a Number(숫자가 아님)
주의: 이름과는 다르게 숫자
*/
// console.log(typeof(Number("a")));

/*
산술 연산자 사용하기
  +, -, *, / 등의 기호를 사용
  % 연산자: 나눗셈의 나머지를 구하기
  ** 연산자: 숫자를 거듭제곱
*/
// console.log('9.5' * 4); // + 연산자 빼고 다른 연산자들은 형변환 후 계산

// 자료형 - 불리언
// console.log(typeof(true));
// 0 == false
// 1 == true
// console.log(false == 0);
// console.log(true == 1);
/*
>: 왼쪽 값이 오른쪽 값보다 크다(초과)
<: 왼쪽 값이 오른쪽 값보다 작다(미만)
>=: 크거나 같다(이상)
<=: 작거나 같다(이하)
*/
// ==: 값이 같은지 비교. 자료형이 달라도 값이 같으면 true
// console.log('1' == 1);
// ===: 값뿐 아니라 자료형까지 같은지 비교. 자료형까지 같을 때만 true
// console.log('1' === 1);

// NaN
// console.log('NaN : ' + typeof(NaN));
// undefined
// 빈 값(비어 있음을 의미)
// 값이자 자료형 
// 보통 반환할 결과 값이 없을 때 기본 값으로 사용
// console.log('undefined : ' + typeof(undefined));
// null
// 빈 값
// undefined와 같지 않음
// console.log('null : ' + typeof(null));

// 변수
// let, const(상수) :
// var <= 이번 버전 (ECMA5 이전) 
// 자바에서 상수 선언 : final int abc = 1;
// 자바스크립트 상수 선언 : const abc = 1;
// let 와 var의 차이는 변수의 스코프에 영향이 간다.
// let a;
// let b = 1;
// let c = '1';
// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// c = 1;
// console.log(typeof(c));

// 변수명의 제약 사항
// 특수문자는 $와 _만 사용할 수 있다.
// 숫자로 시작해서는 안 된다.
// 예약어(reserved word)는 변수명으로 사용할 수 없다.
// 위의 제약 사항을 어기지 않는다면 한글, 한자, 유니코드도 가능
// 변수 재 사용을 위한 초기화 방법
// let full_name = 1;
// full_name = null;
// full_name = undefined;

// const abc = 1;
// abc = 2;

// var 변수
// 기존에 선언한 변수를 다시 선언해도 에러가 발생하지 않음
// 예약어에 사용하는 단어를 변수명으로 사용할 수 있음
// var 대신 let을 사용하면 에러가 발생해 해당 이름을 변수명으로 사용하지 못하게 막음
// var a = 1;
// var a = 3;

// let b = 1;
// let b = 3;
// console.log(b);
// var undefined

// if
// if ( 1 == 1) 
//   console.log(1);
// else if (2 == 2)
//   console.log(2);
// else
//   console.log(3);

// 스위치문
// switch 문에는 조건식 2 개 사용 
// switch 옆에 있는 소괄호의 조건식 값이 case의 비교 조건식 값과 일치(===)하면 해당하는 실행문이 실행 

// 3항 연산자
1 = 1 ? console.log('참') : console.log('거짓');
1 = 1 ? 2 = 2 ? console.log('2') : console.log('!2') : console.log('거짓');

// 반복
