import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../CSS-Components/App.module.css';
import { getMovieData } from '../apis/omdb';
import { SearchBar } from './SearchBar';
import { MoviesList } from './MoviesList';
import { Header } from './Header';
import { Favourites } from './Favourites';
import { SingleMovie } from './SingleMovie';

const App = () => {
	const [movie, setMovie] = useState('batman');
	const [movieData, setMovieData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [favourites, setFavourites] = useState([]);

	console.log(favourites);

	useEffect(() => {
		const localFavourites = JSON.parse(localStorage.getItem('favourites-list'));

		if (localFavourites) {
			setFavourites(localFavourites);
		}
	}, []);

	useEffect(() => {
		handleSearch();
	}, []);

	const handleSearch = async () => {
		setLoading(true);
		const data = await getMovieData(movie);
		setMovieData(data.Search);
		setLoading(false);
	};

	const saveToLocalStorage = (items) => {
		localStorage.setItem('favourites-list', JSON.stringify(items));
	};

	const addFavourite = (filmToAdd) => {
		const newFavourites = [...favourites, filmToAdd];
		setFavourites(newFavourites);
		saveToLocalStorage(newFavourites);
	};

	const removeFavouriteMovie = (filmToRemove) => {
		const newFavourites = favourites.filter(
			(item) => item.imdbID !== filmToRemove.imdbID
		);

		setFavourites(newFavourites);
		saveToLocalStorage(newFavourites);
	};

	return (
		<div className={styles.app}>
			<Router>
				<Header
					SearchBar={SearchBar}
					setMovie={setMovie}
					search={movie}
					handleSearch={handleSearch}
				/>
				{!movieData ? (
					<div className={styles.noResultsContainer}>
						<h1 className={styles.noResultsText}>No results found</h1>
					</div>
				) : (
					<>
						<Routes>
							<Route
								path="/favourites"
								element={
									<Favourites
										favourites={favourites}
										removeFavouriteMovie={removeFavouriteMovie}
									/>
								}
							></Route>
							<Route
								path="/:imdbID"
								element={<SingleMovie addFavourite={addFavourite} />}
							></Route>
							<Route
								default
								path="/"
								element={
									<MoviesList
										movieData={movieData}
										addFavourite={addFavourite}
									/>
								}
							></Route>
						</Routes>
					</>
				)}
			</Router>
		</div>
	);
};

export default App;
