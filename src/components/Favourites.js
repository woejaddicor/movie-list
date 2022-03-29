import React from 'react';

export const Favourites = ({ removeFavouriteMovie, watchlist }) => {
	const renderedWatchlist = watchlist.map((movie) => {
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
				<button onClick={() => removeFavouriteMovie(movie)}>Remove</button>
			</div>
		);
	});
	return renderedWatchlist;
};
