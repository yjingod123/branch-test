const express = require('express')
const path = require('path');
// 라우터 가져오기
const travelRouter = require('./routes/travel');

const app = express() //app 생성

// EJS 템플릿 엔진 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 정적 파일(CSS, JS, 이미지) 제공을 위한 미들웨어 설정
app.use(express.static(path.join(__dirname, 'public')));


// 모든 요청을 travelRouter로 전달
app.use('/', travelRouter);


app.listen(3000, ()=>{
   console.log('3000 포트에서 서버 연결 기다리는 중 ...')
})