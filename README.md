# GuessWhatPaint

간단한 영화 소개 페이지

============== Introduction 시작 ================

node.js를 다운로드 받고 터미널에 node -v로 버전 및 설치여부 확인

npm -v 역시 버전 및 설치여부 확인 npx -v로 버전 및 설치여부 확인

npm은 node.js 다운로드 하고 설치하면 깔리고

npx는 npm install npx -g (-g는 글로벌로 설치한다는 의미)

============== Introduction 끝 ================

============== Setup 시작 ================

npx create-react-app 폴더이름 입력 (대문자 안됌)

ex) npx create-react-app hyeok-movie-app

package.json에서 script 부분에

"start": "react-scripts start",

"build": "react-scripts build",

"test": "react-scripts test",

"eject": "react-scripts eject

있는데

"test": "react-scripts test",

"eject": "react-scripts eject

지워도 된다

yarn.lock도 필요 없으니 지워도 된다. (이유는 나중에 찾자)

src 폴더에는 App.js와 index.js만 남기고 전부 지운다

지운 파일에 맞에 app.js와 index.js에서 소스 수정한다

============== Setup 끝 ================

============== JSX & Props 시작 ================

npm i prop-types

data type을 확인해 주는 모듈

============== JSX & Props 끝 ================

============== State 시작 ================

constructor(props){super(props)} ====> javascript 문법

react용은 아래와 같다

componentDidMount(페이지 로드 직후 실행된다)

componentDidUpdate(컴포넌트 업데이트 직후 실행된다)

componentDidWillUnMount(컴포넌트 이동하거나 사라질때?? 실행된다)

============== State 끝 ================

============== Making the Movie App 시작 ================

fetch를 사용하면 되는데

이 수업에서는 axios를 사용한다

npm i axios

jsonview를 크롬에 설치라면 .json데이터를 깔끔하게 볼 수 있다

============== Making the Movie App 끝 ================
