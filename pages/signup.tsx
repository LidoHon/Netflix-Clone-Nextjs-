'use client';

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import { useSearchParams } from 'next/navigation';
import Input from './Components/Input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Footer from './Components/Footer';

const SignupPage: React.FC = () => {
	const searchParams = useSearchParams();
	const initialEmail = searchParams.get('email') || '';
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const router = useRouter();
	const handleSignup = (e: React.FormEvent) => {
		e.preventDefault();
		if (!name || !email || !password) {
			throw new Error('all fields are required');
		}
	};

	const register = useCallback(async () => {
		try {
			await axios.post('/api/register', {
				name,
				email,
				password,
			});
			router.push('/login');
		} catch (error) {
			console.log('Error registering user:', error);
		}
	}, [email, name, password]);
	return (
		<div className=" w-full h-full ">
			<nav className="px-12 py-5 flex justify-between bg-white">
				<img
					className="h-12"
					src="/images/Netflix_Logo_PMS.png"
					alt="Netflix Logo"
				/>
				<Link href="/login" passHref>
					<div className="text-black text-center font-semibold text-lg cursor-pointer hover:underline py-2">
						Sign In
					</div>
				</Link>
			</nav>
			<div className="flex flex-col items-center  justify-center min-h-screen bg-gray-100">
				<div className="bg-gray-200 p-8 rounded shadow-md w-full max-w-md">
					<h1 className="font-bold text-2xl ">
						Welcome back!
						<br /> Joining Netflix is easy.
					</h1>
					<p>Enter your password and you'll be watching in no time.</p>
					<h1 className="text-2xl font-bold mb-4">Sign Up</h1>
					<form onSubmit={handleSignup} className="space-y-4">
						<Input
							label="user name"
							id="name"
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<Input
							label="Email address"
							id="email"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>

						<Input
							label="Password"
							id="password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Link href="/loginHelp" passHref>
							<div className="text-blue-700 text-sm  cursor-pointer hover:text-blue-400 hover:underline py-2">
								Forgot Password?
							</div>
						</Link>
						<button
							onClick={register}
							type="submit"
							className="bg-red-600 text-white rounded-md py-2 px-5 hover:bg-red-700 transition font-semibold"
						>
							Sign Up
						</button>
					</form>
				</div>
			</div>
			<Footer backgroundColor="bg-white" />
		</div>
	);
};

export default SignupPage;
