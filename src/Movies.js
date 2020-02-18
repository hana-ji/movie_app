import React from "react";
import PropTypes from "prop-types";
import "./movies.css";

// movie component는 state가 필요없음 = state가 필요없을 경우에는 class component가 될 필요 없음
function Movies({ year, title, summary, poster, genres}) {
    return <div className="movie">
        <img src={poster} alt={title} title={title} /> 
        <div className="movie__data">
            {/* javascript에서 css 적용하는 법: style={{}} */}
            <h3 className="movie__title">{title}</h3>
            <ul className="movie__genres">
                {/* map이 아이템이랑 아이템 넘버도 줌 (index,number 다 가능)*/}
                {genres.map((genre, index) => (
                <li className="genres__genre" key={index}>{genre}</li>
                ))}
            </ul>
            <h5 className="movie__year">{year}</h5>
            <p className="movie__summary">{summary.slice(0,140)}...</p>
        </div>
    </div>
}

Movies.propType = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    // 스트링 배열이다
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movies;