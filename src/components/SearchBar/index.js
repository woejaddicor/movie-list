import React from 'react';
import styles from '../../CSS-Components/SearchBar.module.css';

export const SearchBar = ({ movie, handleSearch, setMovie }) => {
	return (
		<div className={styles.searchbarContainer}>
			<input
				type="text"
				className={styles.searchbar}
				value={movie}
				onChange={(e) => setMovie(e.target.value)}
				placeholder="Search for a movie"
			/>
			<button
				type="submit"
				className={styles.searchButton}
				onClick={() => handleSearch()}
			>
				Search
			</button>
		</div>
	);
};
