'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from './Input';
import { FaChevronRight } from 'react-icons/fa6';

const SignUpForm: React.FC = () => {
	const [email, setEmail] = useState('');
	const router = useRouter();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (email) {
			router.push('/signup');
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex gap-2 md:gap-4 justify-center pb-12 pt-5"
		>
			<Input
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setEmail(e.target.value)
				}
				label="Email address"
				id="email"
				type="email"
				value={email}
				textColor="text-white"
			/>
			<button
				type="submit"
				className="bg-red-600 text-white rounded-md py-3 px-5 hover:bg-red-700 transition font-semibold flex flex-row gap-2 text-md md:text-1xl "
			>
				Get Started
				<FaChevronRight className="pt-1 " size={20} />
			</button>
		</form>
	);
};

export default SignUpForm;
