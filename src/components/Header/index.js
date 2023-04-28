import React from 'react';
import styles from '../../CSS-Components/Header.module.css';
import { Link, useLocation } from 'react-router-dom';
import { SearchBar } from '.././SearchBar';

export const Header = ({ setMovie, search, handleSearch }) => {
	const location = useLocation();
	const isSearchPage = location.pathname === '/search';

	return (
		<div className={styles.navbar}>
			{isSearchPage && (
				<div className={styles.searchContainer}>
					<SearchBar
						setMovie={setMovie}
						search={search}
						handleSearch={handleSearch}
					/>
				</div>
			)}
			<div className={styles.buttonsContainer}>
				<Link to="/" className={styles.navbarButton}>
					Home
				</Link>
				<Link className={styles.navbarButton} to="/search">
					Search
				</Link>
				<Link className={styles.navbarButton} to="/favourites">
					Favourites
				</Link>
			</div>
		</div>
	);
};
