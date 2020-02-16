import React from 'react';
import Potato from "./Potato";

// 이런식으로 임폴트 말고 위에 함수를 적고 리턴 할 부분에 적어도 가능함
function Movie() {
  return <h1>이런식으로도 오케이</h1>
}
// props 오브젝 내부에 있는 거(fav) 얻기 props.fav or ({ fav })
function Food({ fav }) {
  return <h1>나는 {fav} 조와한다 </h1>
}

// 이 앱에서 푸드 컴포넌트로 정보를 보내고 푸드 컴포넌트에서 그 정보를 어떻게 사용하는가 ?
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Potato />
      <Movie />
      {/* food component에 fav라는 이름의 prop(=property)를 kimchi라는 value로 줌 */}
      <Food fav="Kimchi" 
      /* react masic(누군가가 푸드 컴포넌트로 정보를 보내려고하면 리액트는 이 모든 속성을 가져올것임)을 
          이용해서 props를 사용 react 는 우리가 전달한 props를 가져가는 일을 함
          react는 모든 속성을 가져오고 food funtion component의 argument(인자)로 그것들을 넣을거임*/
      // something={true}
      // papapapa={["hello",1,2,3,4,true]}
      />
      {/* jsx + props의 힘으로 재사용 가능 */}
      <Food fav="ramem" />
      <Food fav="pizza" />
      <Food fav="chiken" />
      {/* component는 대문자로 시작해야하고 컴포넌트에 정보 보내기 가능
          app이  props를 사용해서 food에게 데이터 보냄
          props란? 뭐든지 component에 넣게되는 것들 ex)fav
          props는 argument로 감*/}
    </div>
  );
}

export default App;
