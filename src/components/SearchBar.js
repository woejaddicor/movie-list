import React from 'react';

export const SearchBar = ({ movie, handleSearch, setMovie }) => {
	return (
		<div>
			<input
				type="text"
				value={movie}
				onChange={(e) => setMovie(e.target.value)}
				placeholder="Search for a movie"
				onKeyPress={(e) => {
					if (e.key === 'Enter') {
						e.preventDefault();
						handleSearch();
					}
				}}
			/>
			<button type="submit" onClick={() => handleSearch()}>
				Search
			</button>
			<div>
				<h1></h1>
			</div>
		</div>
	);
};
