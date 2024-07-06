import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { useRouter } from 'next/router';

interface PLayButtonProps {
	movieId: string;
}

const PlayButton: React.FC<PLayButtonProps> = ({ movieId }) => {
	const router = useRouter();
	return (
		<button
			onClick={() => router.push(`/watch/${movieId}`)}
			className="bg-white text-black  rounded py-1 md:py-1 px-1 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition"
		>
			<FaPlay className="mr-1" />
			play
		</button>
	);
};

export default PlayButton;
