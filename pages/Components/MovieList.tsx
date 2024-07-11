import React from 'react';
import { isEmpty } from 'lodash';
import MovieCard from './MovieCard';
import { FaChevronRight } from 'react-icons/fa';

interface Movie {
	id: string;
	thumbnailUrl: string;
	duration: string;
	genre: string;
	[key: string]: any;
}

interface MovieListProps {
	data: Movie[];
	title: string;
}

const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
	if (isEmpty(data)) {
		return null;
	}

	return (
		<div className="px-4 md:px-12 mt-4 space-y-5">
			<p className="text-white text-md md:text-xl lg:text-2xl lg:mt-4 font-semibold pt-10">
				{title}
			</p>
			<div className="grid grid-cols-7 gap-2">
				{data.map((movie) => (
					<MovieCard key={movie.id} data={movie} />
				))}
			</div>
		</div>
	);
};

export default MovieList;
