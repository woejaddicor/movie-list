import React from 'react';
import styles from '../../CSS-Components/Header.module.css';
import { Link } from 'react-router-dom';
import { SearchBar } from '.././SearchBar';

export const Header = ({ setMovie, search, handleSearch, SearchBar }) => {
	return (
		<div className={styles.navbar}>
			<div className={styles.searchContainer}>
				<SearchBar
					setMovie={setMovie}
					search={search}
					handleSearch={handleSearch}
				/>
			</div>
			<div className={styles.buttonsContainer}>
				<Link className={styles.navbarButton} to="/">
					Home
				</Link>
				<Link className={styles.navbarButton} to="/favourites">
					Favourites
				</Link>
			</div>
		</div>
	);
};
