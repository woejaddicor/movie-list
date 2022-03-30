import React from 'react';
import { SearchBar } from './SearchBar';
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
				<a className={styles.navbarHome} href="/">
					HOME
				</a>
				<a className={styles.navbarWatchlist} href="/watchlist">
					WATCHLIST
				</a>
			</div>
		</div>
	);
};
