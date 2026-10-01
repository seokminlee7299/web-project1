const express = require('express');
const app = express();
const PORT = 3000;

// EJS 뷰 엔진 설정
app.set('view engine', 'ejs');

// 정적 파일(CSS 등) 사용 폴더 설정
app.use(express.static('public'));

// 1. 홈 페이지 (프로필)
app.get('/', (req, res) => {
    res.render('profile', { title: '홈 - 내 프로필' });
});

// 2. 소개 페이지
app.get('/about', (req, res) => {
    res.render('intro', { title: '소개 - 나에 대하여' });
});

// 3. 프로젝트(수강 과목) 페이지
app.get('/projects', (req, res) => {
    res.render('projects', { title: '수강 과목 소개' });
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`서버가 실행 중입니다: http://localhost:${PORT}`);
});
