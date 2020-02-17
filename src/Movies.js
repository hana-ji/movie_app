import React from "react";
import PropTypes from "prop-types";

// movie component는 state가 필요없음 = state가 필요없을 경우에는 class component가 될 필요 없음
function Movies({id, year, title, summary, poster}) {
    return <h4>{title}</h4>
}

Movies.propType = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movies;