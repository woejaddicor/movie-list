import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleMovie } from '../apis/omdb';

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
		<div className="single-movie container" style={{ color: 'white' }}>
			<h1>{movie.Title}</h1>
			<p>
				{movie.Released} - {movie.Rated} - {movie.Runtime}
			</p>
			<img className="poster" src={movie.Poster} alt="Stock poster" />
			<p>{movie.Actors}</p>
			<p>{movie.Awards}</p>
			<p>{movie.BoxOffice}</p>
			<p>{movie.Country}</p>
			<p>{movie.DVD}</p>
			<p>{movie.Director}</p>
			<p>{movie.Language}</p>
			<p>{movie.Genre}</p>
			<p>Metascore: {movie.Metascore}</p>
			<p>{movie.Plot}</p>
			<num>IMDB rating: {movie.imdbRating} ⭐️</num>
			<br></br>
			<num>IMDB Votes: {movie.imdbVotes}</num>
			<button
				onClick={() => {
					addFavourite(movie);
					setDisable(true);
				}}
				className="watchlist-button"
				disabled={disable}
			>
				Add to Watchlist
			</button>
		</div>
	);
};
