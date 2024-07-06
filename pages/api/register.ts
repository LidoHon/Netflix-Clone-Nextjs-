import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '../../lib/prismadb';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	// console.log('API route hit');
	if (req.method !== 'POST') {
		return res.status(405).end();
	}

	try {
		const { email, name, password } = req.body;

		// console.log('Request body:', { email, name, password });

		if (!email || !name || !password) {
			console.log('Missing fields');
			return res.status(400).json({ error: 'Missing fields' });
		}

		const existingUser = await prismadb.user.findUnique({
			where: { email },
		});

		if (existingUser) {
			console.log('Email taken');
			return res.status(422).json({ error: 'Email taken' });
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		console.log('Password hashed');

		const user = await prismadb.user.create({
			data: {
				email,
				name,
				hashedPassword,
				image: '',
				emailVerified: new Date(),
			},
		});

		// console.log('User created:', user);
		return res.status(201).json(user);
	} catch (error) {
		console.error('Error creating user:', error);
		return res.status(500).json({ error: 'Internal Server Error' });
	}
}
