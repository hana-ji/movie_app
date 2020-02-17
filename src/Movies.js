import React from "react";
import PropTypes from "prop-types";
import "./movies.css";

// movie component는 state가 필요없음 = state가 필요없을 경우에는 class component가 될 필요 없음
function Movies({ year, title, summary, poster}) {
    return <div className="movie">
        <img src={poster} alt={title} title={title} /> 
        <div className="movie__data">
            {/* javascript에서 css 적용하는 법: style={{}} */}
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <p className="movie__summary">{summary}</p>
        </div>
    </div>
}

Movies.propType = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movies;