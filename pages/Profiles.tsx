import React from 'react';
import { getSession } from 'next-auth/react';
import { NextPageContext } from 'next';
import useCurrentUser from '@/hooks/useCurrentUser';
import { useRouter } from 'next/router';

export async function getServerSideProps(context: NextPageContext) {
	const session = await getSession(context);

	if (!session) {
		return {
			redirect: {
				destination: '/login',
				permanent: false,
			},
		};
	}
	return {
		props: {},
	};
}

const Profiles = () => {
	const { data: user } = useCurrentUser();
	const router = useRouter();

	return (
		<div className="flex items-center h-full justify-center">
			<div className="flex flex-col">
				<h1 className="text-3x1 md:text-4xl text-white text-center">
					Who is watching?
				</h1>
				<div className="flex items-center justify-center gap-8 mt-10">
					<div onClick={() => router.push('/home')}>
						<div className="group flex-row w-32 mx-auto">
							<div className="w-32 h-32 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden ">
								<img src="/images/red.png" alt="profile" />
							</div>
							<div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
								{user?.name}
							</div>
						</div>
					</div>
				</div>
				<div className=" border-2 border-neutral-500 p-1 mt-10 text-center align-text-bottom text-neutral-600 rounded-md hover:border-neutral-100  text-xs">
					<span className="p-1 text-sm inline-block ">Manage Profiles</span>
				</div>
			</div>
		</div>
	);
};

export default Profiles;
