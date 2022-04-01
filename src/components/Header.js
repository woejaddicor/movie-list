import React from 'react';
import styles from '../CSS-Components/Header.module.css';

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
				<a className={styles.navbarHome} href="/">
					HOME
				</a>
				<a className={styles.navbarWatchlist} href="/favourites">
					FAVOURITES
				</a>
			</div>
		</div>
	);
};
