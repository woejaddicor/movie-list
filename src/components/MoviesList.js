import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CSS-Components/MoviesList.module.css';

export const MoviesList = ({ addFavourite, movieData }) => {
	return (
		<div className={styles.gridContainer}>
			{movieData.map((movie) => {
				return (
					<div className={styles.movieCards}>
						<div
							key={movie.imdbID}
							className={styles.card + ' ' + styles.hoverCard}
						>
							<div className={styles.titleContainer}></div>
							<img
								className={styles.poster}
								src={movie.Poster}
								alt="Stock poster"
							/>
							<div className={styles.overlay}>
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
						</div>
					</div>
				);
			})}
		</div>
	);
};
