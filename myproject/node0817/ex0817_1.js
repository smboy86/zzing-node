/*
들어가기전 일반적인 상식

1) global 개체 
  - 전역 네임스페이스

2) process 개체
  - STDIO(표준 IO) 스트림에 대한 래퍼와 같은 필수 기능과 동기 함수를 비동기 콜백으로 전환해주는 기능 제공

3) Buffer 클래스
  - 원시 데이터 저장 및 조작을 제공하는 전역개체

4) 자식 프로세스

5) 도메인 해석(domain resolution)과 URL 처리에 유용한 모듈

*/
var globalValue;

exports.setGlobal = function(val){
  globalValue = val;
};

exports.returnGlobal = function(){
  console.log(global);
  return globalValue;
}

/*

위와 같이 입력하고 
REPL 에서 위 파일을 require 한다.
그리고 setGlobal과 returnGlobal > returnGlobal 을 연달아 입력한다.
최초 returnGlobal 은 val 에 변수에 값이 할당 되어 있지 않다. 왜?
그러나 두 번째 returnGlobal 은 val 값을 할당한 것을 볼 수 있다.

호옹이.. 겁나 이상하네 ;
아직 이해가 안된 채로 스터디 마감

*/