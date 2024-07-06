'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const NavigateToLogin: React.FC = () => {
	const router = useRouter();

	const handleLoginClick = () => {
		router.push('/login');
	};

	return (
		<button
			onClick={handleLoginClick}
			className="bg-red-600 text-white rounded-md text-sm hover:bg-red-800 px-4 size-15"
		>
			Sign In
		</button>
	);
};

export default NavigateToLogin;
