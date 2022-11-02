import React from 'react';
import styles from '../CSS-Components/Header.module.css';
import { Link } from 'react-router-dom';

export const Header = ({ setMovie, search, handleSearch, SearchBar }) => {
	return (
		<div className={styles.navbar}>
			<SearchBar
				setMovie={setMovie}
				search={search}
				handleSearch={handleSearch}
			/>
			<div className={styles.buttonsContainer}>
				<br></br>
				<Link className={styles.navbarHome} to="/">
					HOME
				</Link>
				<Link className={styles.navbarWatchlist} to="/favourites">
					FAVOURITES
				</Link>
			</div>
		</div>
	);
};
