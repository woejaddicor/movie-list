import axios from 'axios';

const baseUrl = 'http://www.omdbapi.com/?i=tt3896198';
const apikey = '912b16ea';

export const getMovieData = async (search) => {
	try {
		const { data } = await axios.get(baseUrl + `&apikey=${apikey}&s=${search}`);
		return data;
	} catch (error) {
		throw error;
	}
};
