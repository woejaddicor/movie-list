import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import { getMovieData } from '../apis/omdb';
import { SearchBar } from './SearchBar';
import { MoviesList } from './MoviesList';
import { Header } from './Header';

const App = () => {
	const [movie, setMovie] = useState('The Batman');
	const [movieData, setMovieData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		handleSearch();
	}, []);

	const handleSearch = async () => {
		try {
			setLoading(true);
			const data = await getMovieData(movie);
			setMovieData(data.Search);
			setLoading(false);
		} catch (error) {
			console.log(error.message);
			setLoading(false);
		}
	};

	return (
		<div className="App">
			<div className="header">
				<Header />
				<SearchBar
					setMovie={setMovie}
					search={movie}
					handleSearch={handleSearch}
				/>
			</div>
			{!movieData ? (
				<h1>no results found</h1>
			) : (
				<>
					<div className="movie-container">
						<MoviesList movieData={movieData} />
					</div>
				</>
			)}
		</div>
	);
};

export default App;
