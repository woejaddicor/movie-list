import React, { useEffect, useState } from 'react';
import styles from '../../CSS-Components/Favourites.module.css';

export const RemoveFavourites = ({ movie }) => {
	const [localFavourites, setLocalFavourites] = useState([]);

	useEffect(() => {
		const storedFavourites = JSON.parse(
			localStorage.getItem('favourites-list')
		);
		if (storedFavourites) {
			setLocalFavourites(storedFavourites);
		}
	}, [localStorage.getItem('favourites-list')]);

	const removeFavouriteMovie = (filmToRemove) => {
		const newFavourites = localFavourites.filter(
			(item) => item.imdbID !== filmToRemove.imdbID
		);
		setLocalFavourites(newFavourites);
		localStorage.setItem('favourites-list', JSON.stringify(newFavourites));
	};

	return (
		<div>
			<button
				className={styles.removeFavouritesButton}
				onClick={() => removeFavouriteMovie(movie)}
			>
				Remove
			</button>
		</div>
	);
};
