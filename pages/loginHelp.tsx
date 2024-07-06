'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import Footer from './Components/Footer';
const ResetPassword: React.FC = () => {
	const [method, setMethod] = useState<string>('email');
	const [contact, setContact] = useState<string>('');

	const handleMethodChange = (event: ChangeEvent<HTMLInputElement>) => {
		setMethod(event.target.value);
	};

	const handleContactChange = (event: ChangeEvent<HTMLInputElement>) => {
		setContact(event.target.value);
	};

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		// Add your form submission logic here
	};

	return (
		<div className="bg-black min-h-screen">
			<nav className="px-12 py-5 flex justify-between">
				<img
					className="h-12 w-35"
					src="/images/Netflix_Logo_PMS.png"
					alt="Netflix Logo"
				/>
				<Link href="/login" passHref>
					<div className="text-red-600 text-center font-semibold text-lg cursor-pointer hover:text-red-700 hover:underline py-2">
						Sign In
					</div>
				</Link>
			</nav>
			<div className="flex justify-center items-center text-white pt-5">
				<div className="bg-gray-200 p-8  w-full max-w-md">
					<div className="text-center mb-6">
						<h2 className="text-3xl text-black font-semibold mt-4">
							Update password, email or phone
						</h2>
					</div>
					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<p className="text-sm mb-2 text-black">
								How would you like to reset your password?
							</p>
							<div className="flex items-center mb-2 text-black">
								<input
									type="radio"
									id="email"
									name="method"
									value="email"
									checked={method === 'email'}
									onChange={handleMethodChange}
									className="mr-2"
								/>
								<label htmlFor="email">Email</label>
							</div>
							<div className="flex items-center text-black">
								<input
									type="radio"
									id="sms"
									name="method"
									value="sms"
									checked={method === 'sms'}
									onChange={handleMethodChange}
									className="mr-2"
								/>
								<label htmlFor="sms">Text Message (SMS)</label>
							</div>
						</div>
						<div className="mb-4">
							<p className=" text-sm text-black pb-3">
								{method === 'email'
									? 'We will send you an email with instructions on how to reset your password.'
									: 'We will text you a verification code to reset your password. Message and data rates may apply.'}
							</p>
							<input
								type="text"
								id="contact"
								value={contact}
								onChange={handleContactChange}
								placeholder={
									method === 'email' ? 'name@example.com' : 'Phone number'
								}
								className="w-full px-4 py-2 text-black rounded border focus:outline-none"
							/>
						</div>
						<button
							type="submit"
							className="w-full py-2 bg-blue-600 r hover:bg-blue-700"
						>
							{method === 'email' ? 'Email Me' : 'Text Me'}
						</button>
					</form>
					<div className="text-center mt-4">
						<a href="#" className="text-sm text-blue-500 hover:underline">
							I don&apos;t remember my email or phone.
						</a>
					</div>
				</div>
			</div>
			<p className="text-xs text-gray-500 text-center pt-5">
				This page is protected by Google reCAPTCHA to ensure you&apos;re not a
				bot.{' '}
				<a href="#" className="text-blue-500 hover:underline">
					Learn more
				</a>
				.
			</p>
			<Footer backgroundColor="bg-black" />
		</div>
	);
};

export default ResetPassword;
