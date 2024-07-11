'use client';

import React, { useCallback, useState } from 'react';
import Input from './Input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import Footer from './Footer';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isChecked, setIsChecked] = useState(false);
	const [error, setError] = useState('');
	const router = useRouter();

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	const handleSignUpClick = () => {
		router.push('/signup');
	};

	const login = useCallback(async () => {
		setError('');
		try {
			const result = await signIn('credentials', {
				email,
				password,
				redirect: false,
				callbackUrl: '/Profiles',
			});
			if (result?.error) {
				setError(result.error);
			} else {
				router.push('/Profiles');
			}
		} catch (error) {
			console.error('Login error:', error);
			setError('An unexpected error occurred.');
		}
	}, [email, password, router]);

	const handleGoogleSignIn = async () => {
		try {
			const result = await signIn('google', { callbackUrl: 'Profiles' });
			if (result?.error) {
				setError(result.error);
			}
		} catch (error) {
			console.error('Google sign-in error:', error);
			setError('An unexpected error occurred during Google sign-in.');
		}
	};

	return (
		<>
			<div className="flex justify-center pb-10">
				<div className="bg-black bg-opacity-70 px-16 py-10 self-center mt-2 lg:w-1/2 md:max-w-md rounded-md w-full">
					<h2 className="text-white text-3xl mb-8 font-semibold">Sign In</h2>
					<div className="flex flex-col gap-4">
						<Input
							onChange={(e: any) => setEmail(e.target.value)}
							label="email or mobile number"
							id="email"
							type="email"
							value={email}
							textColor="text-white"
						/>
						<Input
							onChange={(e: any) => setPassword(e.target.value)}
							label="password"
							id="password"
							type="password"
							value={password}
							textColor="text-white"
						/>
					</div>
					{error && <p className="text-red-600">{error}</p>}
					<button
						onClick={login}
						className="bg-red-600 text-white rounded-md w-full mt-10 py-2 hover:bg-red-700 transition"
					>
						Sign In
					</button>

					<p className="text-neutral-400 text-center pt-2">OR</p>
					<button className="bg-neutral-600 bg-opacity-50 text-white rounded-md w-full mt-2 py-2 hover:bg-neutral-700 transition text-sm">
						Use a Sign-In Code
					</button>
					{/* <div className="flex flex-row items-center gap-4 mt-4 justify-center">
						<div
							onClick={handleGoogleSignIn}
							className="w-5 h-5 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
						>
							<FcGoogle />
						</div>
						<div
							onClick={() => signIn('github', { callbackUrl: 'Profiles' })}
							className="w-5 h-5 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
						>
							<FaGithub />
						</div>
					</div> */}
					<Link href="/loginHelp" passHref>
						<div className="text-white text-sm text-center cursor-pointer hover:text-neutral-400 hover:underline py-2">
							Forgot Password?
						</div>
					</Link>
					<div className="flex">
						<input
							type="checkbox"
							id="rememberMe"
							checked={isChecked}
							onChange={handleCheckboxChange}
							className="rounded border-gray-300 text-neutral-600 shadow-sm focus:border-neutral-400 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 h-4 w-4"
						/>
						<label
							htmlFor="rememberMe"
							className="ml-2 block text-sm text-neutral-300"
						>
							Remember me
						</label>
					</div>
					<p className="text-neutral-500 mt-2">
						New to Netflix?
						<span
							onClick={handleSignUpClick}
							className="ml-1 text-neutral-200 hover:underline hover:text-neutral-200 cursor-pointer text-sm font-semibold"
						>
							Sign up now.
						</span>
					</p>
					<p className="text-xs text-neutral-300 pt-3">
						This page is protected by Google reCAPTCHA to ensure you&apos;re not
						a bot.{' '}
						<span className="text-blue-600 hover:underline">Learn more</span>.
					</p>
				</div>
			</div>
			<Footer backgroundColor="bg-black" />
		</>
	);
};

export default LoginForm;
