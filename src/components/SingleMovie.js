import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleMovie } from '../apis/omdb';
import styles from '../CSS-Components/SingleMovie.module.css';
import { SearchBar } from './SearchBar';

export const SingleMovie = ({ addFavourite }) => {
	const [movie, setMovie] = useState([]);
	const [loading, setLoading] = useState(false);
	const [disable, setDisable] = useState(false);
	const { imdbID } = useParams();

	useEffect(() => {
		setLoading(true);
		getSingleMovie(imdbID).then((movie) => {
			setMovie(movie);
		});
	}, [imdbID]);

	return (
		<div className={styles.container}>
			<div className={styles.poster}>
				<img className={styles.poster} src={movie.Poster} alt=""></img>
			</div>
			<div className={styles.movieTitle}>
				<h1>{movie.Title}</h1>
				<p className={styles.title}>{movie.Released}</p>
				<p className={styles.title}>{movie.Runtime}</p>
			</div>
			<div className={styles.info1}>
				<p className={styles.info1}>Director : {movie.Director}</p>
				<p className={styles.info1}>Writer : {movie.Writer}</p>
				<p className={styles.info1}>Genre : {movie.Genre}</p>
				<p className={styles.info1}>Rated: {movie.Rated}</p>
			</div>
			<div className={styles.info2}>
				<p className={styles.info2}>Cast : {movie.Actors}</p>
				<p className={styles.plot}>Plot Summary : '{movie.Plot}'</p>
			</div>
			<div className={styles.info3}>
				<p className={styles.imdbRating}>
					IMDB Rating : {movie.imdbRating} ⭐️
				</p>
				<p className={styles.info3}>IMDB Votes : {movie.imdbVotes}</p>
				<p className={styles.info3}>Metascore : {movie.Metascore}</p>
				<p className={styles.info3}>Awards : {movie.Awards}</p>
			</div>
			<button
				onClick={() => {
					addFavourite(movie);
					setDisable(true);
				}}
				className={styles.watchlistButton}
				disabled={disable}
			>
				Add to Watchlist
			</button>
		</div>
	);
};
