import React from 'react';
interface InputProps {
	id: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
	label: string;
	type?: string;
	textColor?: string;
}
const Input: React.FC<InputProps> = ({
	id,
	onChange,
	value,
	label,
	type,
	textColor,
}) => {
	return (
		<div className="relative">
			<input
				id={id}
				value={value}
				onChange={onChange}
				type={type}
				className={`
                    block
                    rounded-md
                    px-6
                    pt-6
                    pb-1
                    w-full
                    text-md
                    ${textColor}
                    bg-transparent
                    border
                    border-neutral-700
                    appearance-none
                    focus:border-white
                    focus:outline-none
                    focus:bg-[rgba(247,231,231,0.1)]
                    focus:ring-0
                    peer
                `}
				placeholder=" "
			/>
			<label
				className={`
                    absolute
                    text-md
                    duration-150
                    transform
                    -translate-y-3
                    scale-75
                    top-4
                    z-10
                    origin-[0]
                    left-6
                    peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75
                    peer-focus:-translate-y-3
                    ${textColor}
                `}
				htmlFor={id}
			>
				{label}
			</label>
		</div>
	);
};

export default Input;
