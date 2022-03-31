import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../CSS-Components/MoviesList.module.css';

export const MoviesList = ({ addFavourite, movieData }) => {
	const [disable, setDisable] = useState(false);

	return (
		<div className={styles.movieCards}>
			{movieData.map((movie) => {
				return (
					<div className={styles.card}>
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
							onClick={() => {
								addFavourite(movie);
							}}
							className={styles.watchlistButton}
						>
							Add
						</button>
					</div>
				);
			})}
		</div>
	);
};
