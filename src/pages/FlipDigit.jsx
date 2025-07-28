import React, { useState, useEffect } from "react";

const FlipDigit = ({ digit, prevDigit }) => {
	const [flip, setFlip] = useState(false);
	const [showNewOnBottom, setShowNewOnBottom] = useState(false);

	useEffect(() => {
		if (digit !== prevDigit) {
			setFlip(true);
			setShowNewOnBottom(false);

			const bottomTimer = setTimeout(() => setShowNewOnBottom(true), 370);
			const timer = setTimeout(() => setFlip(false), 750);

			return () => {
				clearTimeout(bottomTimer);
				clearTimeout(timer);
			};
		}
	}, [digit, prevDigit]);

	return (
		<div className="relative inline-flex flex-col rounded-[0.1em] w-full perspective-[1000px] font-['Times_New_Roman']">
			{/* Top static part */}
			<div
				className="relative z-[1] bg-[#101010] rounded-t-[0.1em] border-b-[2px] border-[rgba(255,255,255,0.15)]
                      text-center overflow-hidden leading-[0.5] py-[0.25em] h-[0.1em]
                      flex justify-center text-[#b7b7b7] text-[clamp(10vw,15vw,20vw)]"
			>
				{digit}
			</div>

			{/* Bottom static part */}
			<div
				className="relative z-[1] bg-[#101010] rounded-b-[0.1em] border-t-[2px] border-[rgba(255,255,255,0.15)]
                      flex items-end justify-center text-center overflow-hidden leading-[0.5]
                      py-[0.25em] h-[0.1em] text-[#b7b7b7] text-[clamp(10vw,15vw,20vw)]"
			>
				{showNewOnBottom ? digit : prevDigit}
			</div>

			{flip && (
				<>
					{/* Top flip (old value) */}
					<div
						className="absolute w-full z-[2] bg-[#101010] rounded-t-[0.1em] text-center overflow-hidden
                       leading-[0.5] py-[0.25em] h-[0.1em] text-[#b7b7b7] text-[clamp(10vw,15vw,20vw)]
                       animate-[flip-top_350ms_ease-in_forwards]
                       origin-bottom [backface-visibility:hidden] [transform-style:preserve-3d]"
					>
						{prevDigit}
					</div>

					{/* Bottom flip (new value, bottom half only) */}
					<div
						className="absolute bottom-0 w-full z-[2] overflow-hidden h-1/2 rounded-b-[0.1em] bg-[#101010]
                       animate-[flip-bottom_350ms_ease-out_350ms_forwards]
                       origin-top [backface-visibility:hidden] [transform-style:preserve-3d]
                       [transform:rotateX(90deg)]"
					>
						<div
							className="relative translate-y-[-50%] flex justify-center items-center
                            text-[#b7b7b7] text-[clamp(10vw,15vw,20vw)] leading-[0.5]"
						>
							{digit}
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default FlipDigit;
