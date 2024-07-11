import React from 'react';
import { getSession } from 'next-auth/react';
import { NextPageContext } from 'next';
import { redirect } from 'next/dist/server/api-utils';
import Navbar from './Components/Navbar';
import Billboard from './Components/Billboard';
import MovieList from './Components/MovieList';
import useMovieList from '@/hooks/useMovieList';
import useFavorites from '@/hooks/useFavorites';
import InfoModel from './Components/InfoModel';
import useInfoModel from '@/hooks/useInfoModel';
import Footer from './Components/Footer';

export async function getServerSideProps(context: NextPageContext) {
	const session = await getSession(context);
	console.log('Session:', session);

	if (!session) {
		return {
			redirect: {
				destination: '/login',
				permanent: false,
			},
		};
	}
	return {
		props: {},
	};
}

const HomePage = () => {
	const { data: movies = [] } = useMovieList();
	const { data: favorites = [] } = useFavorites();
	const { isOpen, closeModel } = useInfoModel();
	return (
		<>
			<InfoModel visible={isOpen} onClose={closeModel} />
			<Navbar />
			<Billboard />
			<div className="pb-40">
				<MovieList title="Trending Now" data={movies} />
				{/* <MovieList title="My List" data={favorites} /> */}
				<MovieList title="My List" data={movies} />
				<MovieList title="continue watching" data={movies} />
				<MovieList title="we think you will love this" data={movies} />
			</div>
			<Footer backgroundColor="bg-transparent" />
		</>
	);
};

export default HomePage;
