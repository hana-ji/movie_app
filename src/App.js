import React from 'react';

function Food({ name, picture }) {
  return (
    <div>
      <h1>나는 {name} 조와한다 </h1>
      <img src={picture} />
    </div>
    );
  }

// 데이터가 이미 API에서 왔다고 가정, food의 배열 (food의 object의 배열)
const foodLike = [
  {
    name: "Kimchi",
    image:
    "https://cdn.imweb.me/upload/S201905105cd4e5325582d/0b667240284bd.jpg"
  },
  {
    name: "pizza",
    image:
    "https://www.journal-d.kr/news/photo/201704/14768_9689_3049.jpg"
  },
  {
    name: "chiken",
    image:
    "https://economychosun.com/query/upload/303/20190608214338_gubchoja.jpg"
  },
  {
    name: "kimbap",
    image:
    "https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg"
  },
  {
    name: "gogi",
    image:
    "https://pds.joins.com/news/component/htmlphoto_mmdata/201909/09/425b739d-f09e-49b5-8791-61209c868280.jpg"
  },
]

// 이 앱에서 푸드 컴포넌트로 정보를 보내고 푸드 컴포넌트에서 그 정보를 어떻게 사용하는가 ?
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* component는 대문자로 시작해야하고 컴포넌트에 정보 보내기 가능
          app이  props를 사용해서 food에게 데이터 보냄
          props란? 뭐든지 component에 넣게되는 것들 ex)fav
          props는 argument로 감*/}
        {/* {foodLike} 이렇게 적으면 자바스크립트, foodLike 이렇게 적으면 텍스트
            이 함수 차례가 오면 자동으로 리턴해줌(food가 리턴됨)*/}
            {/* dish=오브젝트 이 오브젝트(디쉬)는 현재 처리 중*/}
        {foodLike.map(dish => (<Food name={dish.name} picture={dish.image} />))}
      
    </div>
  );
}

export default App;
