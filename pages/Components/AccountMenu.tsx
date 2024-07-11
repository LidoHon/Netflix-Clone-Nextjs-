import React from 'react';
import { signOut } from 'next-auth/react';
import useCurrentUser from '@/hooks/useCurrentUser';
interface AccountMenuProps {
	visible?: boolean;
}
const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
	const { data: user } = useCurrentUser();
	if (!visible) {
		return null;
	}

	return (
		<div className="bg-black bg-opacity-50 w-56 absolute top-14 right-0 py-5 flex flex-col border-2 border-gray-800">
			<div className="flex flex-col gap-3">
				<div className="px-3 group/item flex flex-row gap-3 items-center w-full">
					<img className="w-8 rounded-md" src="/images/red.png" alt="" />
					<p className="text-white text-sm group-hover/item:underline">
						{user?.name}
					</p>
				</div>
				<hr className="bg-gray-600 border-0 h-px my-4"></hr>
				<div
					onClick={() => signOut()}
					className="px-3 text-center text-white text-sm hover:underline"
				>
					sign out of Netflix
				</div>
			</div>
		</div>
	);
};

export default AccountMenu;
