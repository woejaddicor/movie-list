import React from 'react';

export const MoviesList = (movieData) => {
	const renderedMovies = movieData.movieData.map((movie) => {
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
				<button className="watchlist-button">Add to Watchlist</button>
			</div>
		);
	});
	return renderedMovies;
};
