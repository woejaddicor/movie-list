import React from 'react';
import { SearchBar } from './SearchBar';

export const Header = ({ setMovie, search, handleSearch, SearchBar }) => {
	return (
		<div className="navbar">
			<a className="navbar-home" href="/">
				HOME
			</a>
			<SearchBar
				setMovie={setMovie}
				search={search}
				handleSearch={handleSearch}
			/>
			<a className="navbar-watchlist" href="/watchlist">
				WATCHLIST
			</a>
		</div>
	);
};
