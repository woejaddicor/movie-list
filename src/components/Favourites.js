import React from 'react';
import styles from '../CSS-Components/Favourites.module.css';

export const Favourites = ({ removeFavouriteMovie, watchlist }) => {
	const renderedWatchlist = watchlist.map((movie) => {
		return (
			<div className={styles.movieCard} key={movie.imdbID}>
				<div className={styles.titleContainer}></div>
				<img className={styles.poster} src={movie.Poster} alt="Stock poster" />
				<h1 className={styles.title}>{movie.Title}</h1>
				<br />
				<button
					className={styles.removeFavouriteButton}
					onClick={() => removeFavouriteMovie(movie)}
				>
					Remove
				</button>
			</div>
		);
	});
	return renderedWatchlist;
};
