import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prismadb from '../../../lib/prismadb';
import { compare } from 'bcrypt';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

async function validateAccounts() {
	try {
		const accounts = await prismadb.account.findMany({
			include: { user: true },
		});

		accounts.forEach((account) => {
			if (!account.user) {
				console.error(`Account with id ${account.id} has no associated user`);
			}
		});

		console.log('Validation completed.');
	} catch (error) {
		console.error('Error validating accounts:', error);
	}
}

validateAccounts();

export default NextAuth({
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID || '',
			clientSecret: process.env.GITHUB_SECRET || '',
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID || '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
		}),
		CredentialsProvider({
			id: 'credentials',
			name: 'credentials',
			credentials: {
				email: { label: 'Email', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) {
					throw new Error('Email and password required');
				}
				const user = await prismadb.user.findUnique({
					where: { email: credentials.email },
				});
				if (!user || !user.hashedPassword) {
					throw new Error("Email doesn't exist");
				}
				const isCorrectPassword = await compare(
					credentials.password,
					user.hashedPassword
				);
				if (!isCorrectPassword) {
					throw new Error('Incorrect credentials');
				}
				return user;
			},
		}),
	],
	pages: {
		signIn: '/login',
	},
	debug: process.env.NODE_ENV === 'development',
	adapter: PrismaAdapter(prismadb),
	session: {
		strategy: 'jwt',
	},
	jwt: {
		secret: process.env.NEXTAUTH_JWT_SECRET,
	},
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		async session({ session, token }) {
			console.log('Session Callback:', session, token);
			if (session.user) {
				session.user.id = token.id as string;
			}
			return session;
		},
		async redirect({ url, baseUrl }) {
			return url.startsWith(baseUrl) ? url : baseUrl;
		},
		async signIn({ user, account, profile }) {
			console.log('SignIn Callback:', user, account, profile);
			return true;
		},
	},
});
