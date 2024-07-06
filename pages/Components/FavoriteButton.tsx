import React, { useCallback, useMemo } from 'react';
import axios from 'axios';
import useCurrentUser from '@/hooks/useCurrentUser';
import useFavorites from '@/hooks/useFavorites';
import { FaPlus } from 'react-icons/fa6';
import { FaCheck } from 'react-icons/fa6';

interface FavouriteButtonProps {
	movieId: string;
}

const FavoriteButton: React.FC<FavouriteButtonProps> = ({ movieId }) => {
	const { mutate: mutateFavourites } = useFavorites();
	const { data: currentUser, mutate } = useCurrentUser();

	const isFavorite = useMemo(() => {
		const list = currentUser?.favouriteIds || [];

		return list.includes(movieId);
	}, [currentUser, movieId]);

	const toggleFavorites = useCallback(async () => {
		try {
			let response;
			if (isFavorite) {
				response = await axios.delete('/api/favorite', { data: { movieId } });
			} else {
				response = await axios.post('/api/favorite', { movieId });
			}

			const updatedFavouriteIds = response?.data?.favouriteIds;

			mutate({
				...currentUser,
				favouriteIds: updatedFavouriteIds,
			});

			mutateFavourites();
		} catch (error) {
			console.error('Error toggling favorites:', error);
		}
	}, [movieId, isFavorite, currentUser, mutate, mutateFavourites]);

	const Icon = isFavorite ? FaCheck : FaPlus;

	return (
		<div
			onClick={toggleFavorites}
			className="cursor-pointer group/item  w-6 h-6 lg:w-10 lg:h-10 bg-white bg-opacity-10 rounded-full flex justify-center items-center transition hover:border-neutral-300 border-white border-2"
		>
			<Icon className="text-white" size={10} />
		</div>
	);
};

export default FavoriteButton;
