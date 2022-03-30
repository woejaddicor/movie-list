import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const MoviesList = ({ addFavourite, movieData }) => {
	const [disable, setDisable] = useState(false);

	const renderedMovies = movieData.map((movie) => {
		return (
			<div className="movie-card" key={movie.imdbID}>
				<div className="title-container"></div>
				<img className="poster" src={movie.Poster} alt="Stock poster" />
				<br></br>
				<button className="single-movie-button">
					<Link to={`/${movie.imdbID}`}>See More</Link>
				</button>
			</div>
		);
	});
	return renderedMovies;
};
