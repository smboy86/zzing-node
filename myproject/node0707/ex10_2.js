// 데이터 질의 하기
// 데이터 찾기 메소드는 총 4가지가 있다.
// 1. find          : 쿼리에서 반환된 모든 문서 쿼리 반환
// 2. findOne       : 쿼리와 일치하는 첫번째 문서로 커서 반환
// 3. findAndRemove : 문서 찾은 후 제가
// 4. findAndModify : 문서 찾은 후 동작 수행


var mongodb = require('mongodb');
var server = new mongodb.Server('localhost', 27017, {auto_reconnect: true});
var db = new mongodb.Db('mydb10_2', server);

// open database connection
db.open(function(err, db) {
  if(!err) {
    console.log('DB 작업 시작');
    
    db.collection('widgets', function(err, collection){
      collection.find().toArray(function(err, docs){
        console.log(docs);
        
        db.close();
      })
    });
  }else{
    console.log('errrrr  :::: ' + err);
  }
});

