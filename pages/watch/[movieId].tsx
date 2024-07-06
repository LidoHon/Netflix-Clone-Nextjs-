import React from 'react';
import { useRouter } from 'next/router';
import useMovie from '@/hooks/useMovie';
import { FaArrowLeft } from 'react-icons/fa';

const Watch = () => {
	const router = useRouter();
	const { movieId } = router.query;

	const { data } = useMovie(movieId as string);

	return (
		<div className="h-screen w-screen bg-black">
			<nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
				<FaArrowLeft
					onClick={() => router.push('/home')}
					className="text-white cursor-pointer"
					size={30}
				/>
				<p className="text-white text-1xl lg:text-3xl font-bold">
					<span className="font-light ">Watching:</span>
					{data?.title}
				</p>
			</nav>
			<video
				className="h-full w-full"
				autoPlay
				controls
				src={data?.videoUrl}
			></video>
		</div>
	);
};

export default Watch;
