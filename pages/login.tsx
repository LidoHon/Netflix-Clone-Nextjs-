import React, { useState } from 'react';
import LoginForm from './Components/LoginForm';
const login = () => {
	return (
		<div
			className="relative 
	h-full w-full
	bg-[url('../public/images/background.jpg')]
	bg-no-repeat bg-center bg-fixed bg-cover"
		>
			<div className="bg-black w-full h-full sm:bg-opacity-50">
				<nav className="px-12 py-5">
					<img className="h-12" src="/images/Netflix_Logo_PMS.png" alt="" />
				</nav>
				<LoginForm />
			</div>
		</div>
	);
};

export default login;
