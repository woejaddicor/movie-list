import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CSS-Components/MoviesList.module.css';

export const MoviesList = ({ addFavourite, movieData }) => {
	return (
		<div className={styles.movieCards}>
			{movieData.map((movie) => {
				return (
					<div key={movie.imdbID} className={styles.card}>
						<div className={styles.titleContainer}></div>
						<img
							className={styles.poster}
							src={movie.Poster}
							alt="Stock poster"
						/>
						<br></br>
						<button className={styles.singleMovieButton}>
							<Link to={`/${movie.imdbID}`}>Info</Link>
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
