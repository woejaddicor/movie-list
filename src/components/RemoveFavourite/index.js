import React, { useEffect, useState } from 'react';
import styles from '../../CSS-Components/Favourites.module.css';

export const RemoveFavourites = ({ movie, updateFavourites }) => {
	const removeFavouriteMovie = () => {
		const localFavourites = JSON.parse(
			localStorage.getItem('favourites-list') || '[]'
		);
		const newFavourites = localFavourites.filter(
			(item) => item.imdbID !== movie.imdbID
		);
		updateFavourites(newFavourites);
	};

	return (
		<div>
			<button
				className={styles.removeFavouritesButton}
				onClick={removeFavouriteMovie}
			>
				Remove
			</button>
		</div>
	);
};
