import React, { useState, useEffect } from "react";
import FlipDigit from "./FlipDigit";

const FlipClock = () => {
	const [time, setTime] = useState(new Date());
	const [prevTime, setPrevTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setPrevTime(time);
			setTime(new Date());
		}, 1000);
		return () => clearInterval(timer);
	}, [time]);

	const format = (num) => num.toString().padStart(2, "0");

	const hours = format(time.getHours());
	const minutes = format(time.getMinutes());
	const seconds = format(time.getSeconds());

	const prevHours = format(prevTime.getHours());
	const prevMinutes = format(prevTime.getMinutes());
	const prevSeconds = format(prevTime.getSeconds());

	return (
		<div className="flex justify-center items-center gap-[1rem] p-[8.6%_0] text-[#b7b7b7] text-[clamp(10vw,15vw,20vw)] transition-all duration-500">
			<FlipDigit
				digit={hours[0]}
				prevDigit={prevHours[0]}
			/>
			<FlipDigit
				digit={hours[1]}
				prevDigit={prevHours[1]}
			/>
			<span>:</span>
			<FlipDigit
				digit={minutes[0]}
				prevDigit={prevMinutes[0]}
			/>
			<FlipDigit
				digit={minutes[1]}
				prevDigit={prevMinutes[1]}
			/>
			<span>:</span>
			<FlipDigit
				digit={seconds[0]}
				prevDigit={prevSeconds[0]}
			/>
			<FlipDigit
				digit={seconds[1]}
				prevDigit={prevSeconds[1]}
			/>
		</div>
	);
};

export default FlipClock;
