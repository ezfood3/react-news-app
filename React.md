# 외부 API 연동 앱 작성
- axios 사용
  - aJax 기능 사용
  - Promise 기능 사용
  - 대부분의 브라우저 대응
  - 콜백지옥 회피 : async / await

# 프로젝트 셋팅
- 프로젝트 생성
  - yarn create react-app react-news-app
  - cd react-news-app
  - yarn add axios

# axios 연습

# news API 셋팅
- APIKEY 발급
1. newsapi.org
2. Get API Key
3. 각종정보 입력
4. 596090be385a4779a0e02804a3699209
- `https://newsapi.org/v2/top-headlines?country=kr&apiKey=596090be385a4779a0e02804a3699209`
- `https://newsapi.org/v2/top-headlines?country=kr&category=sports&apiKey=596090be385a4779a0e02804a3699209`
- category: sports, business, entertainment, health, science, technology
