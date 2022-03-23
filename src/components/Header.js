import React from 'react';
import { SearchBar } from './SearchBar';

export const Header = ({ setMovie, search, handleSearch }) => {
	return (
		<div>
			<h1 className="title">Movie Searching App</h1>
			<a href="watchlist.html" style={{ color: 'white' }}>
				Watchlist
			</a>
		</div>
	);
};
