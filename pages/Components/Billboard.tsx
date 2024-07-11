import useBillboard from '@/hooks/useBillboard';
import React, { useCallback, useState, useRef, useEffect } from 'react';
import { FaPlay, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { GoInfo } from 'react-icons/go';
import PlayButton from './PlayButton';
import useInfoModel from '@/hooks/useInfoModel';

const Billboard = () => {
	const { data, error, isLoading } = useBillboard();
	const { openModel } = useInfoModel();

	const [isMuted, setIsMuted] = useState(true);
	const videoRef = useRef<HTMLVideoElement>(null);

	const handleOpenModal = useCallback(() => {
		openModel(data?.id);
	}, [openModel, data?.id]);

	const toggleMute = () => {
		if (videoRef.current) {
			videoRef.current.muted = !videoRef.current.muted;
			setIsMuted(!videoRef.current.muted);
		}
	};

	const handleScroll = () => {
		if (videoRef.current) {
			const scrollTop = window.scrollY;
			if (scrollTop > 0) {
				videoRef.current.muted = true;
				setIsMuted(true);
			}
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	if (isLoading) {
		return (
			<div className="text-white text-center font-bold text-5xl pt-20">
				Loading...
			</div>
		);
	}

	if (error) {
		return (
			<div className="text-white text-center text-3xl font-bold pt-20 mt-30">
				check your internet connection: {error.message}
			</div>
		);
	}

	if (!data) {
		return <div className="text-center text-bold">No movie available</div>;
	}

	return (
		<div className="relative h-[56.25vw]">
			<video
				ref={videoRef}
				autoPlay
				muted={isMuted}
				loop
				playsInline
				poster={data?.thumbnailUrl}
				src={data.videoUrl}
				className="w-full h-full object-cover brightness-[50%]"
				controls={false}
			/>
			<div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
				<p className="text-white text-1xt md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
					{data?.title}
				</p>
				<p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
					{data?.description}
				</p>
				<div className="flex flex-row items-center gap-3 mt-3 md:mt-4">
					<PlayButton movieId={data?.id} />

					<button
						onClick={handleOpenModal}
						className="bg-white text-white bg-opacity-30 rounded py-1 md:py-1 px-1 md:px-2 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition"
					>
						<GoInfo className="mr-1" />
						more info
					</button>
				</div>
			</div>
			<div className="absolute top-14 right-1 flex flex-col space-y-2">
				<div className="flex flex-row pt-30  mt-40 gap-1">
					<button
						onClick={toggleMute}
						className="bg-white text-white border-2 border-white bg-opacity-0 rounded-full py-2 px-2 text-xs lg:text-lg font-semibold flex items-center hover:bg-opacity-20 transition"
					>
						{isMuted ? (
							<FaVolumeMute className="text-white" />
						) : (
							<FaVolumeUp className="text-whitek" />
						)}
					</button>
					<button className="bg-neutral-700 border-l-4 border-white bg-opacity-60 text-white  py-1 px-4 text-xs lg:text-md ">
						18+
					</button>
				</div>
			</div>
		</div>
	);
};

export default Billboard;
