process.stdin.resume();

process.stdin.on('data', function (chunk) {
  process.stdout.write('data: ' + chunk);
});


// 170825 smPark 최초 실행
// 위에 선언된 것도 없고... 아무런 형식도 없는데
// 바로 Run 해서 실행이 되는구나.. 
// 정말 단순하다 노드 ㄷㄷㄷ