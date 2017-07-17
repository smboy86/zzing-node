// 데이터 질의 하기
// 데이터 찾기 메소드는 총 4가지가 있다.
// 1. find          : 쿼리에서 반환된 모든 문서 쿼리 반환
// 1-1 find(쿼리, 옵션, 콜백) 형태
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
      collection.remove(null, {safe:true}, function(err, result){
        if(!err){
          // create four records
          var widget1 = {id: 1, title : 'First Great widget',
                        desc : 'greatest widget of all',
                        price : 14.99, type: 'A'};
          var widget2 = {id: 2, title : 'Second Great widget',
                        desc : 'second greatest widget of all',
                        price : 29.99, type: 'A'};
          var widget3 = {id: 3, title: 'third widget', desc: 'third widget',
                      price : 45.00, type: 'B'};
          var widget4 = {id: 4, title: 'fourth widget', desc: 'fourth widget',
                      price: 60.00, type: 'B'};
          
          collection.insert([widget1, widget2, widget3, widget4], {safe:true}, function(err, result){
            if(!err){
              collection.find().toArray(function(err, docs){
                console.log(docs);
                db.close();
              });
            }else{
              console.log('insert errrrr     : ' + err);
            }
          });
        } else {
          console.log('remove errrrrr :  ' + err)
        }      
      });      
    });
  }else{
    console.log('errrrr  :::: ' + err);
  }
});

