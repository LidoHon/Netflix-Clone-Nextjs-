import React from 'react';

interface MobileMenuProps {
	visible?: boolean;
}
const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
	if (visible) {
		return null;
	}
	return (
		<div className="bg-black bg-opacity-50 w-56 absolute top-8 left-0 py-5 flex flex-col border-2 border-gray-800">
			<div className="flex flex-col gap-4">
				<div className="px-3 text-white hover:bg-gray-700 hover:bg-opacity-50 transition">
					Home
				</div>
				<div className="px-3 text-white hover:bg-gray-700 hover:bg-opacity-50 transition">
					TV Shows
				</div>
				<div className="px-3 text-white hover:bg-gray-700 hover:bg-opacity-50 transition">
					Movies
				</div>
				<div className="px-3 text-white hover:bg-gray-700 hover:bg-opacity-50 transition">
					Latest
				</div>
				<div className="px-3 text-white hover:bg-gray-700 hover:bg-opacity-50 transition">
					My List
				</div>
				<div className="px-3 text-white hover:bg-gray-700 hover:bg-opacity-50 transition">
					Browse by Language
				</div>
			</div>
		</div>
	);
};

export default MobileMenu;
