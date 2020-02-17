import React from 'react';
// axios 설치 후 import
import axios from "axios";

class App extends React.Component {
  // application을 mount 하자마자 isLoading은 기본적으로 트루
  state = {
    isLoading: true,
    // 나중에 이 어레이를 많이 채울거임, 미래에 쓰고자 하는 state를 선언하는건 필수가 아님(= 오류나지는 않는다)
    movies: []
  };
  // 함수 만드는 방식은 2가지 git에 올렸던거 보기 !
  // 로딩?이 시간이 좀 걸려서 async/await = 이 함수가 비동기다 (async: 이걸 기다려야 한다. 함수내부 await: 무엇을? axios를? ㅇㅇ axios가 끝날 때까지 기다렸다가 계속함)
  getMovies = async () => {
    cosnt movies = await axios.get("https://yts.mx/api/v2/list_movies.json");

  }
  // DidMount에서 data fetch 해야함 (이론적)
  componentDidMount(){
    // axios가 네트워크에 -> 요청함 우리한테 data를 줌 -> 우리는 그 데이터를 잡아야함 그래야 state에 사용가능
    // cosnt movies = axios.get("https://yts.mx/api/v2/list_movies.json");
    // 위에 getMovies를 선언 후 호출 -> component가 mount 되면 getMovies 호출함
    this.getMovies();
  }
  render() {
    // javascript 임 isLoading 이 트투면 "Loading"을 보여주고 아니면 "We are ready" 보여줌
    // isLoading은 정의되지 x = 동작 x this.state .isLoading 으로 정의해줘야함 or ES6로 
    const { isLoading } = this.state;
    // 선언해주면 isLoading만 사용해도 가능
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

/*  application은 render함 처음에는 isLoading: true 그래서 Loading... 을 봄
    application이 mount 된 후 getMovies function을 호출할 거임 
    getMovies는 axios.get 사용함 근데 axios.get은 완료까지 시간 걸려서 await 넣음 await만 사용 할수 없어서 외부함수앞에 ansyc 사용함
    */

export default App;
