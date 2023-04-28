import React from 'react';
import styles from '../../CSS-Components/Favourites.module.css';
import { Link } from 'react-router-dom';
import { RemoveFavourites } from '../../components/RemoveFavourite';

export const Favourites = () => {
	const localFavourites = JSON.parse(localStorage.getItem('favourites-list'));

	return (
		<div className={styles.movieCards}>
			{localFavourites.map((movie) => {
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
							<Link to={`/${movie.imdbID}`}>Info</Link>
						</button>
						<RemoveFavourites movie={movie} />
					</div>
				);
			})}
		</div>
	);
};
