import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import { getMovieData } from '../apis/omdb';
import { SearchBar } from './SearchBar';
import { MoviesList } from './MoviesList';
import { Header } from './Header';
import { Favourites } from './Favourites';

const App = () => {
	const [movie, setMovie] = useState('The Batman');
	const [movieData, setMovieData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [watchlist, setWatchlist] = useState([]);

	useEffect(() => {
		handleSearch();
	}, []);

	useEffect(() => {
		const localFaves = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);
		setWatchlist(localFaves);
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

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const addFavourite = (filmToAdd) => {
		const newWatchlist = [...watchlist, filmToAdd];
		setWatchlist(newWatchlist);
		saveToLocalStorage(newWatchlist);
	};

	const removeFavouriteMovie = (filmToRemove) => {
		const newWatchlist = watchlist.filter(
			(item) => item.imdbID !== filmToRemove.imdbID
		);

		setWatchlist(newWatchlist);
		saveToLocalStorage(newWatchlist);
	};

	return (
		<div className="App">
			<Router>
				<div className="header">
					<Header
						SearchBar={SearchBar}
						setMovie={setMovie}
						search={movie}
						handleSearch={handleSearch}
					/>
				</div>
				{!movieData ? (
					<div>
						<h1 className="no-results">No results found</h1>
					</div>
				) : (
					<>
						<div className="movie-container">
							<Routes>
								<Route
									path="/watchlist"
									element={
										<Favourites
											watchlist={watchlist}
											removeFavouriteMovie={removeFavouriteMovie}
										/>
									}
								></Route>
								<Route
									path="/"
									element={
										<MoviesList
											movieData={movieData}
											addFavourite={addFavourite}
										/>
									}
								></Route>
							</Routes>
						</div>
					</>
				)}
			</Router>
		</div>
	);
};

export default App;
