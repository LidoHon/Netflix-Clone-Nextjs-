import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const session = await getSession({ req });

		if (!session || !session.user || !session.user.email) {
			return res.status(401).json({ message: 'Not authenticated' });
		}

		const { movieId } = req.body;

		if (!movieId) {
			return res.status(400).json({ message: 'Movie ID is required' });
		}

		// Retrieve the user's current favouriteIds
		const existingUser = await prisma.user.findUnique({
			where: { email: session.user.email },
			select: { favouriteIds: true },
		});

		if (!existingUser) {
			return res.status(404).json({ message: 'User not found' });
		}

		// Remove movieId from favouriteIds
		const updatedUser = await prisma.user.update({
			where: { email: session.user.email },
			data: {
				favouriteIds: existingUser.favouriteIds.filter((id) => id !== movieId),
			},
			select: { favouriteIds: true }, // Select only favouriteIds field in the returned user object
		});

		return res.status(200).json(updatedUser.favouriteIds);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: 'Internal Server Error' });
	}
};

export default handler;
