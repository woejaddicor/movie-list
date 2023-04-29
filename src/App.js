import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './CSS-Components/App.module.css';
import { getMovieData } from './apis/omdb';
import { SearchBar } from './components/SearchBar';
import { Header } from './components/Header';
import { MoviesList } from './pages/MoviesList';
import { Favourites } from './pages/Favourites';
import { SingleMovie } from './pages/SingleMovie';
import { HomePage } from './pages/HomePage';

const App = () => {
	const [movie, setMovie] = useState('batman');
	const [movieData, setMovieData] = useState([]);
	const [timeoutId, setTimeoutId] = useState(null);

	useEffect(() => {
		handleSearch();
	}, [movie]);

	const handleSearch = async () => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		setTimeoutId(
			setTimeout(async () => {
				const data = await getMovieData(movie);
				setMovieData(data.Search);
			}, 500)
		);
	};

	return (
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
						<Route path="/" element={<HomePage />}></Route>
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
	);
};

export default App;
