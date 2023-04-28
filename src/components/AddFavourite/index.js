import React, { useEffect, useState } from 'react';
import styles from '../../CSS-Components/MoviesList.module.css';

export const AddFavourite = ({ movie }) => {
	const [favourites, setFavourites] = useState([]);
	const localFavourites = JSON.parse(localStorage.getItem('favourites-list'));

	useEffect(() => {
		if (localFavourites) {
			setFavourites(localFavourites);
		}
	}, []);

	useEffect(() => {
		saveToLocalStorage(favourites);
	}, [favourites]);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('favourites-list', JSON.stringify(items));
	};

	const addFavourite = (movie) => {
		const localFavourites = JSON.parse(localStorage.getItem('favourites-list'));
		if (
			localFavourites &&
			localFavourites.some((fav) => fav.imdbID === movie.imdbID)
		) {
			throw new Error('Film already in favourites');
		} else {
			const newFavourites = [...localFavourites, movie];
			setFavourites(newFavourites);
			saveToLocalStorage(newFavourites);
		}
	};

	return (
		<button
			className={styles.watchlistButton}
			onClick={() => addFavourite(movie)}
		>
			Add
		</button>
	);
};
