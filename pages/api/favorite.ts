import { NextApiRequest, NextApiResponse } from 'next';
import { without } from 'lodash';
import prismadb from '@/lib/prismadb';
import serverAuth from '@/lib/serverAuth';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		if (req.method === 'POST') {
			const { currentUser } = await serverAuth(req);
			const { movieId } = req.body;

			if (!movieId) {
				return res.status(400).json({ error: 'Movie ID is required' });
			}

			const existingMovie = await prismadb.movie.findUnique({
				where: {
					id: movieId,
				},
			});
			if (!existingMovie) {
				return res.status(404).json({ error: 'Invalid movie ID' });
			}
			const user = await prismadb.user.update({
				where: {
					email: currentUser.email || '',
				},
				data: {
					favouriteIds: {
						push: movieId,
					},
				},
			});
			console.log('Updated User:', user);
			return res.status(200).json(user);
		}

		if (req.method === 'DELETE') {
			const { currentUser } = await serverAuth(req);
			const { movieId } = req.body;

			if (!movieId) {
				return res.status(400).json({ error: 'Movie ID is required' });
			}

			const existingMovie = await prismadb.movie.findUnique({
				where: {
					id: movieId,
				},
			});

			if (!existingMovie) {
				throw new Error('Invalid Id');
			}
			const updatedfavouriteIds = without(currentUser.favouriteIds, movieId);

			const updatedUser = await prismadb.user.update({
				where: {
					email: currentUser.email || '',
				},
				data: {
					favouriteIds: updatedfavouriteIds,
				},
			});
			console.log('Updated User:', updatedUser);
			return res.status(200).json(updatedUser);
		}
		return res.status(405).end();
	} catch (error) {
		console.log(error);
		return res.status(400).end();
	}
}
