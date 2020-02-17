import React from 'react';
import axios from "axios";
// 선언 후 랜더에 리턴으로 값 넣기
import Movies from "./Movies";
import "./App.css";

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };
    // 로딩?이 시간이 좀 걸려서 async/await = 이 함수가 비동기다 (async: 이걸 기다려야 한다. 함수내부 await: 무엇을?
    // axios를? ㅇㅇ axios가 끝날 때까지 기다렸다가 계속함)
    getMovies = async () => {
        // console.log(movies)찍어보니 data안에 data 안에 movies 있었음
        const {
            data: {
                data: {
                    movies
                }
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        // 최신 js라 짧아져야햠 ({ movies(setState의 무비):movies(axios에서 온 무비) }={ movies } 단축해서
        // 사용가능)
        this.setState({movies, isLoading: false});
    };
    // DidMount에서 data fetch 해야함 (이론적)
    componentDidMount() {
        // axios가 네트워크에 -> 요청함 우리한테 data를 줌 -> 우리는 그 데이터를 잡아야함 그래야 state에 사용가능 cosnt
        // movies = axios.get("https://yts.mx/api/v2/list_movies.json"); 위에 getMovies를
        // 선언 후 호출 -> component가 mount 되면 getMovies 호출함
        this.getMovies();
    }
    render() {
        // state에서 로딩이랑 무비 가져옴 선언 안하면 movies.map() 을 this.movies.state.movies 이렇게 해야함
        const {isLoading, movies} = this.state;
        // 선언해주면 isLoading만 사용해도 가능, movies.map()으로 넣어도되고 renderMovies라는 다른 function
        // 만들어도됨
        return <section className="container">{
                isLoading
                    ? (
                        <div className="loader">
                            <span className="loader__text">Loading...</span>
                        </div>
                    )
                    : (
                        <div className="movies">
                            {
                                movies.map(movies => (
                                    // .map으로 부터 뭔가를 return 해야함 항상 / Movies + prop 가져와야함
                                    <Movies
                                        key={movies.id}
                                        id={movies.id}
                                        year={movies.year}
                                        title={movies.title}
                                        summary={movies.summary}
                                        poster={movies.medium_cover_image}
                                        genres={movies.genres} />
                                ))
                            }
                        </div>
                    )
            }</section>
    }
}

/*  application은 render함 처음에는 isLoading: true 그래서 Loading... 을 봄
    application이 mount 된 후 getMovies function을 호출할 거임
    getMovies는 axios.get 사용함 근데 axios.get은 완료까지 시간 걸려서 await 넣음 await만 사용 할수 없어서 외부함수앞에 ansyc 사용함
    */

export default App;
