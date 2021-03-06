import React, { useState } from 'react';
import styles from '../CSS-Components/Favourites.module.css';
import { Link } from 'react-router-dom';

export const Watchlist = ({ removeFavouriteMovie, watchlist }) => {
	console.log(watchlist);
	return (
		<div className={styles.movieCards}>
			{watchlist.map((movie) => {
				return (
					<div className={styles.movieCard} key={movie.imdbID}>
						<div className={styles.titleContainer}></div>
						<img
							className={styles.poster}
							src={movie.Poster}
							alt="Stock poster"
						/>
						<br></br>
						<button className={styles.singleMovieButton}>
							<Link to={`/${movie.imdbID}`}>See More</Link>
						</button>
						<button
							className={styles.removeFavouriteButton}
							onClick={() => removeFavouriteMovie(movie)}
						>
							Remove
						</button>
					</div>
				);
			})}
		</div>
	);
};
