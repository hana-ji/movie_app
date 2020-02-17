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
    // this.state.count = 1; 이런식으로 하면 react는 render를 refresh하지 않기 때문에 적용이 안됨 + 직접 state 변경하지 말라함
    //  = 매번 state의 상태를 변경할 때 react가 render function을 호출해서 바꿔주길 원함
    // setState를 사용하면 react가 렌더를 한번 더 돌려서 변경 된 값이 state를 덮어 씌움 그래서 변하게 됨
    // this.state.count +1 이라고 적는 것보다 fuction 방식으로 current => ({count: current.count +1}) 이라고 적는게 좋음
    this.setState(current => ({ count: current.count +1 }));
  };
  minus = () => {
    // 현재 카운트에서 1을 뺀 값 (좋은 방법은 아님 나중에 오류 생길 수 도있음)
    //  = 현재 state를 얻고싶다 setState(current => ({ count: current.count -1 }))
    this.setState({ count: this.state.count -1 });
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
// 매번 setState를 호출할 때 마다 react는 render를 다시 돌리고 변경된 값을 적용시킴

export default App;
