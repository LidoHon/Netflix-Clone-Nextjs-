import { NextApiRequest } from 'next';
import { getSession } from 'next-auth/react';
import prismadb from '@/lib/prismadb';

const serverAuth = async (req: NextApiRequest) => {
	const session = await getSession({ req });
	console.log('Session:', session);

	if (!session || !session.user || !session.user.email) {
		console.error('Session or user email not found:', session);
		throw new Error('not signed in error from session');
	}

	const currentUser = await prismadb.user.findUnique({
		where: {
			email: session.user.email,
		},
	});
	if (!currentUser) {
		console.error('User not found in the database');
		throw new Error('not signed in error from current user');
	}

	console.log('Current User:', currentUser);
	return { currentUser };
};

export default serverAuth;
