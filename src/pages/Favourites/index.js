import React, { useState, useEffect } from 'react';
import styles from '../../CSS-Components/Favourites.module.css';
import { Link } from 'react-router-dom';
import { RemoveFavourites } from '../../components/RemoveFavourite';

export const Favourites = () => {
	const [localFavourites, setLocalFavourites] = useState(
		JSON.parse(localStorage.getItem('favourites-list')) || []
	);

	const updateFavourites = (newFavourites) => {
		setLocalFavourites(newFavourites);
		localStorage.setItem('favourites-list', JSON.stringify(newFavourites));
	};

	return (
		<div className={styles.gridContainer}>
			{localFavourites.map((movie) => (
				<div className={styles.movieCards} key={movie.imdbID}>
					<div className={styles.card + ' ' + styles.hoverCard}>
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
							<RemoveFavourites
								movie={movie}
								updateFavourites={updateFavourites}
							/>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
