import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleMovie } from '../apis/omdb';
import styles from '../CSS-Components/SingleMovie.module.css';

export const SingleMovie = ({ addFavourite }) => {
	const [movie, setMovie] = useState([]);
	const [loading, setLoading] = useState(false);
	const [disable, setDisable] = useState(false);
	const { imdbID } = useParams();

	useEffect(() => {
		setLoading(true);
		getSingleMovie(imdbID).then((movie) => {
			console.log(movie);
			setMovie(movie);
		});
	}, [imdbID]);

	return (
		<div className={styles.singleMovieContainer}>
			<h1 className={styles.title}>{movie.Title}</h1>
			<p className={styles.movieInfo}>
				{movie.Released} - {movie.Rated} - {movie.Runtime}
			</p>
			<img className={styles.poster} src={movie.Poster} alt="Stock poster" />
			<p className={styles.movieInfo}>{movie.Actors}</p>
			<p className={styles.movieInfo}>{movie.Awards}</p>
			<p className={styles.movieInfo}>{movie.BoxOffice}</p>
			<p className={styles.movieInfo}>{movie.Country}</p>
			<p className={styles.movieInfo}>{movie.DVD}</p>
			<p className={styles.movieInfo}>{movie.Director}</p>
			<p className={styles.movieInfo}>{movie.Language}</p>
			<p className={styles.movieInfo}>{movie.Genre}</p>
			<p className={styles.movieInfo}>Metascore: {movie.Metascore}</p>
			<p className={styles.movieInfo}>{movie.Plot}</p>
			<num className={styles.movieInfo}>
				IMDB rating: {movie.imdbRating} ⭐️
			</num>
			<br></br>
			<num className={styles.movieInfo}>IMDB Votes: {movie.imdbVotes}</num>
			<br></br>
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
