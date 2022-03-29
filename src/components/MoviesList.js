import React, { useState } from 'react';

export const MoviesList = ({ addFavourite, movieData }) => {
	const [disable, setDisable] = useState(false);

	const renderedMovies = movieData.map((movie) => {
		return (
			<div className="movie-card" key={movie.imdbID}>
				<div className="title-container"></div>
				<img className="poster" src={movie.Poster} alt="Stock poster" />
				<h1 className="movie-title">{movie.Title}</h1>
				<p className="title-info">{movie.Type}</p>
				<p className="title-info">{movie.Year}</p>
				<a
					className="imdb-link"
					href={`https://imdb.com/title/${movie.imdbID}`}
				>
					More information
				</a>
				<br />
				<button
					onClick={() => {
						addFavourite(movie);
						setDisable(true);
					}}
					className="watchlist-button"
					disabled={disable}
				>
					Add to Watchlist
				</button>
			</div>
		);
	});
	return renderedMovies;
};
