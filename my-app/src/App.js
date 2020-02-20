import React,{useState} from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 6000);
  }
  render() {
    const {isLoading} = this.state;
    return (<div>
      { isLoading ? "Loading...": "we are ready" }
      </div>);
    }
}

// 함수형에서 state 불러오는법
// const App = () => {
//   //    [초기state,변하게 만드는 변수] = useState(초기값)
//   const [test,setTest] = useState({
//     isLoading: true,
//     movies:[]
//   })

//   return (
//     <>

//     </>
//   )
// }
// const App2 = () => {
//   return (
//     <></>
//   )
// }

export default App;
