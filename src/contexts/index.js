import React, { useState, useContext, createContext } from 'react';

const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
	const [favouriteContext, setFavouriteContext] = useState([]);

	return (
		<FavouritesContext.Provider
			value={{ favouriteContext, setFavouriteContext }}
		>
			{children}
		</FavouritesContext.Provider>
	);
};

export const useFavourites = () => useContext(FavouritesContext);
