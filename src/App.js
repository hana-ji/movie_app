import React from 'react';
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>나는 {name} 조와한다 </h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
    );
  }

// 검사하려는 곳 아래에 적고, ???.propTypes 처럼 적음, 꼭 : PropTypes. 로 적어야함 
// ~~~에는 type 체크 or required를 호출하는 방식(적거나 안 적거나)으로 type과 required를 체크할수있음 방법이 다양함
// proptypes react 검색해서 리엑트 홈페이지가면 많음
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

// 데이터가 이미 API에서 왔다고 가정, food의 배열 (food의 object의 배열)
const foodLike = [
  {
    // react의 element들은 다 다르게 보여야함 (정보가 다르니까 근데 fodd component라는 것만 알고 똑같아 보임)
    // 그래서 id를 주고 name={dish.name} 처럼 key={dish.id}라고 하면됨 (food component에 prop 주기, react 내부에서 사용함)
    id:1,
    name: "Kimchi",
    image:
    "https://cdn.imweb.me/upload/S201905105cd4e5325582d/0b667240284bd.jpg",
    rating: 5
  },
  {
    id:2,
    name: "pizza",
    image:
    "https://www.journal-d.kr/news/photo/201704/14768_9689_3049.jpg",
    rating: 4.9
  },
  {
    id:3,
    name: "chiken",
    image:
    "https://economychosun.com/query/upload/303/20190608214338_gubchoja.jpg",
    rating: 4.8
  },
  {
    id:4,
    name: "kimbap",
    image:
    "https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg",
    rating: 5.5
  },
  {
    id:5,
    name: "gogi",
    image:
    "https://pds.joins.com/news/component/htmlphoto_mmdata/201909/09/425b739d-f09e-49b5-8791-61209c868280.jpg",
    rating: 4.7
  },
];

/* function renderFood(dish){ 
  // map은 여기서 뭐가 돌아오든 다 array로 돌림 // 아래 주석이랑 똑같지만 이게 더 좋음 why? 다른 function 안 만들어도 됨
  return <Food name={dish.name} picture = {dish.image} />;
} */

// 이 앱에서 푸드 컴포넌트로 정보를 보내고 푸드 컴포넌트에서 그 정보를 어떻게 사용하는가 ?
function App() {
  return (
    <div>
      {/* {foodLike.map(renderFood)} */}
      {/* ㄴ 를 하면 기본적으로 여기에 food component와 같은 array를 가져오게 됨 [<food name={} />, <Food name={}, ~~] 이런 식으로 */}
      {foodLike.map(dish => (
          <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
