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
			<a className={styles.navbarButtons} href="/">
				HOME
			</a>
			<a className={styles.navbarButtons} href="/watchlist">
				WATCHLIST
			</a>
		</div>
	);
};
