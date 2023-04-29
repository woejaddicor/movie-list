import React from 'react';
import styles from '../../CSS-Components/SearchBar.module.css';

export const SearchBar = ({ movie, setMovie }) => {
	return (
		<div className={styles.searchbarContainer}>
			<input
				type="text"
				className={styles.searchbar}
				value={movie}
				onChange={(e) => setMovie(e.target.value)}
				placeholder="Search for a movie"
			/>
		</div>
	);
};
