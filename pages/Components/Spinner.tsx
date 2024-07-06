import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

interface SpinnersProps {
	loading: boolean;
}

const override = {
	display: 'block',
	margin: '100px auto',
};

const Spinners: React.FC<SpinnersProps> = ({ loading }) => {
	return <ClipLoader loading={loading} size={50} />;
};

export default Spinners;
