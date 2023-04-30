import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../CSS-Components/MoviesList.module.css';
import { AddFavourite } from '../../components/AddFavourite';

export const MoviesList = ({ movieData }) => {
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
								<h1 className={styles.overlayTitle}>{movie.Title}</h1>
								<button className={styles.singleMovieButton}>
									<Link to={`/${movie.imdbID}`}>Info</Link>
								</button>
								<AddFavourite movie={movie} />
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
