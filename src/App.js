import React from 'react';

class App extends React.Component {
  // application을 mount 하자마자 isLoading은 기본적으로 트루
  state = {
    isLoading: true,
    // 나중에 이 어레이를 많이 채울거임, 미래에 쓰고자 하는 state를 선언하는건 필수가 아님(= 오류나지는 않는다)
    movies: []
  };
  // DidMount에서 data fetch 해야함 (이론적)
  componentDidMount(){
    // setTimeout 이라는 js로 6초후에 동작하게 함
    setTimeout( () => {
      this.setState({ isLoading: false});
    }, 6000);
  }
  render() {
    // javascript 임 isLoading 이 트투면 "Loading"을 보여주고 아니면 "We are ready" 보여줌
    // isLoading은 정의되지 x = 동작 x this.state .isLoading 으로 정의해줘야함 or ES6로 
    const { isLoading } = this.state;
    // 선언해주면 isLoading만 사용해도 가능
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
