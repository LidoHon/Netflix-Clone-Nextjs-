'use client';
import React, { useState } from 'react';

interface AccordionProps {
	title: string;
	answer: string;
}
const Accordion: React.FC<AccordionProps> = ({ title, answer }) => {
	const [accordionOpen, setAccordionOpen] = useState(false);
	return (
		<div
			className="text-white py-2 lg:mx-40 m-1 mx-3 bg-neutral-800 
		"
		>
			<button
				onClick={() => setAccordionOpen(!accordionOpen)}
				className="flex justify-between w-full p-3"
			>
				<span>{title}</span>

				<svg
					className="fill-white shrink-0 ml-8"
					width="16"
					height="16"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect
						x="7"
						width="2"
						height="16"
						rx="1"
						className={`transition transform origin-center duration-200 ease-out ${
							accordionOpen && 'rotate-45'
						}`}
					/>
					<rect
						y="7"
						width="16"
						height="2"
						rx="1"
						className={`transition transform origin-center duration-200 ease-out ${
							accordionOpen && 'rotate-45'
						}`}
					/>
					<rect
						x="7"
						width="2"
						height="16"
						rx="1"
						className={`transition transform origin-center duration-200 ease-out ${
							accordionOpen && '-rotate-45'
						}`}
					/>
					<rect
						y="7"
						width="16"
						height="2"
						rx="1"
						className={`transition transform origin-center duration-200 ease-out ${
							accordionOpen && '-rotate-45'
						}`}
					/>
				</svg>
			</button>
			<div
				className={`grid overflow-hidden transition-all duration-300 ease-in-out text-sm ${
					accordionOpen
						? 'grid-rows-[1fr] opacity-100'
						: 'grid-rows-[0fr] opacity-0'
				}`}
			>
				<div className="overflow-hidden">
					<p className="px-3">{answer}</p>
				</div>
			</div>
		</div>
	);
};

export default Accordion;
