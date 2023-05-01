import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleMovie } from '../../apis/omdb';
import styles from '../../CSS-Components/SingleMovie.module.css';
import { AddFavourite } from '../../components/AddFavourite';

export const SingleMovie = ({ addFavourite }) => {
	const [movie, setMovie] = useState([]);
	const { imdbID } = useParams();

	useEffect(() => {
		getSingleMovie(imdbID).then((movie) => {
			setMovie(movie);
		});
	}, [imdbID]);

	return (
		<div className={styles.singlePageBody}>
			<div className={styles.container}>
				<div className={styles.posterContainer}>
					<img className={styles.poster} src={movie.Poster} alt=""></img>
					<div className={styles.buttonContainer}>
						<AddFavourite className={styles.addMovie} movie={movie} />
					</div>
					<p className={styles.imdbRating}>
						IMDB Rating : {movie.imdbRating} ⭐️
					</p>
					<p className={styles.imdbRating}>Metascore : {movie.Metascore}</p>
				</div>
				<div className={styles.info1}>
					<h1 className={styles.movieTitle}>{movie.Title}</h1>
					<p className={styles.info1}>Released : {movie.Released}</p>
					<p className={styles.info1}>Runtime : {movie.Runtime}</p>
					<p className={styles.info1}>Director : {movie.Director}</p>
					<p className={styles.info1}>Genre : {movie.Genre}</p>
					<p className={styles.info1}>Rated: {movie.Rated}</p>
					<p className={styles.plot}>Plot Summary : '{movie.Plot}'</p>
					<p className={styles.info1}>Cast : {movie.Actors}</p>
					<p className={styles.info1}>Awards : {movie.Awards}</p>
				</div>
			</div>
		</div>
	);
};
