import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// component란? HTML을 반환하는 함수
// <App /> 는 component임  
ReactDOM.render(<App />, document.getElementById('root'));


// 리엑트 어플리케이션은 한번의 하나의 컴포먼트만 랜더링 할수 있음
// = import App from './App'밑에 import Potato from './Potato를 하고 '<App /><Potato /> 이런식으로 적으면 오류가 뜨기 때문에 
// App.js에 가서 import Potato from './Potato'를 하고 html 처럼 적을 것 안에 <Potato />를 적으면 Potato.js 에 적은 내용이 보임