import React from 'react';
import PropTypes from "prop-types";

// 컴포넌트 App 를 React.Component로 확장(extends)
// react component는 render method를 가지고있음 extend from을 했기 때문에 나(App?)도 가지고있음 
// 함수형 컴포넌트가 아니기 때문에 return 사용 x
class App extends React.Component{
  // state = object, component에 data를 넣을 공간이 있고 이 데이터는 변함 <- state를 사용하는 이유
  // 바꿀 데이터를 state안에 넣음
  state = {
    // count: default (0)
    count: 0
  };
  // 자바스크립트 코드
  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };
  render(){
  // state를 render안에 넣고싶으면 {this.state.count} 이런 식으로 적으면 됨
    return <div>
        <h1>The number is: {this.state.count}</h1>
        {/* 리액트에서는 온클릭이라는 프롭이 자동으로 있음 
            add()가 아니라 add임 왜냐하면 ()는 즉시 나타내기 때문에 우리는 클릭했을 때 동작하길 원함
            state가 안 붙은 이유는 그냥 자바스크립트를 부른것이기 때문에 */}
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
  }
  
}

// 함수형 컴포넌트는 function이고 뭔가를 return 한 후에 스크린에 표시,
// 클래스형 컴포넌트는 class이고 react component로 부터 확장된 후 screen에 표시됨.
// react는 내 class component의 render method를 자동으로 실행함

export default App;
