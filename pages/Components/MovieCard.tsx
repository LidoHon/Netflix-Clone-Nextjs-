import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { AiOutlineLike } from 'react-icons/ai';
import { useRouter } from 'next/router';
import FavoriteButton from './FavoriteButton';
import useInfoModel from '@/hooks/useInfoModel';
import { IoChevronDown } from 'react-icons/io5';

interface MovieCardProps {
	data: {
		id: string;
		thumbnailUrl: string;
		duration: string;
		genre: string;
		[key: string]: any;
	};
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
	const router = useRouter();
	const { openModel } = useInfoModel();

	if (!data || !data.thumbnailUrl) {
		return null;
	}
	return (
		<div className="group bg-zink-900 col-span relative h-[12vw] mb-4 ">
			<img
				className="cursor-pointer object-cover transition duration shadow-xl group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[15vw] rounded-sm"
				src={data.thumbnailUrl}
				alt="thumbnail"
			/>
			<div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
				<img
					onClick={() => router.push(`/watch/${data?.id}`)}
					className="cursor-auto object-cover transition duration shadow-xl rounded-sm w-full h-[15vw]"
					src={data.thumbnailUrl}
					alt="thumbnail"
				/>
				<div className="z-10 bg-zinc-900 p-5 absolute lg:p-4 w-full transition shadow-md rounded-b-md">
					<div className="flex flex-row items-center gap-3 ">
						<div
							onClick={() => router.push(`/watch/${data?.id}`)}
							className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
						>
							<FaPlay size={20} />
						</div>
						<FavoriteButton movieId={data?.id} />

						<div
							onClick={() => {}}
							className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white  bg-opacity-10 rounded-full flex justify-center items-center transition  hover:border-neutral-300 border-white border-2"
						>
							<AiOutlineLike className="text-white" size={10} />
						</div>
						<div
							onClick={() => {
								openModel(data?.id);
							}}
							className="cursor-pointer group/item ml-auto w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
						>
							<IoChevronDown className="text-white group-hover/item:text-neutral-300 " />
						</div>
					</div>
					<p className="text-green-400 font-semibold mt-4 text-xs">
						84% Match
						<span className="text-neutral-500 text-xs"> {data.duration}</span>
					</p>
					<div className="flex flex-row mt-4 gap-2 items-center">
						<p className="text-white text-[10px] lg:text-sm">{data.genre}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
