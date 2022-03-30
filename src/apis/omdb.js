import axios from 'axios';

const baseUrl = 'http://www.omdbapi.com/?i=tt3896198';
const baseUrl2 = 'http://www.omdbapi.com/?i=';
const apikey = '912b16ea';

export const getMovieData = async (search) => {
	try {
		const { data } = await axios.get(baseUrl + `&apikey=${apikey}&s=${search}`);
		return data;
	} catch (error) {
		throw error;
	}
};

export const getSingleMovie = async (imdbID) => {
	const { data } = await axios.get(baseUrl2 + `${imdbID}&apikey=${apikey}`);
	return data;
};
