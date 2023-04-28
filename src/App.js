import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './CSS-Components/App.module.css';
import { getMovieData } from './apis/omdb';
import { SearchBar } from './components/SearchBar';
import { Header } from './components/Header';
import { MoviesList } from './pages/MoviesList';
import { Favourites } from './pages/Favourites';
import { SingleMovie } from './pages/SingleMovie';
import { FavouritesProvider } from './contexts';

const App = () => {
	const [movie, setMovie] = useState('batman');
	const [movieData, setMovieData] = useState([]);

	useEffect(() => {
		handleSearch();
	}, [movieData]);

	const handleSearch = async () => {
		const data = await getMovieData(movie);
		setMovieData(data.Search);
	};

	return (
		<FavouritesProvider>
			<div className={styles.app}>
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
							<Route path="/favourites" element={<Favourites />}></Route>
							<Route path="/:imdbID" element={<SingleMovie />}></Route>
							<Route
								path="/search"
								element={<MoviesList movieData={movieData} />}
							></Route>
						</Routes>
					</>
				)}
			</div>
		</FavouritesProvider>
	);
};

export default App;
