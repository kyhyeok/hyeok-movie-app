import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, rating, runtime, genres, summary, poster }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <ul className="movie__info">
          <li className="info__etc">{year} | 개봉</li>
          <li className="info__etc"> | {runtime}분 |</li>
          <li className="info__etc">평점 | {rating}</li>
        </ul>
        <ul className="movie__genres">
          <li className="genres__genre">장르 |</li>
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0, 170)}...</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;
