import React, { useEffect, useState } from "react";

const NEW_YEARS = new Date(2023, 4, 14, 0, 0, 0);

const makeTwoDigitNumber = (number) => {
	return number > 9 ? number : `0${number}`;
};

// Convert string to number format
const stringToNumber = (str) => {
	const number = parseInt(str, 10);
	return number;
};

const getTimedelta = () => {
	const now = new Date();
	const timedelta = NEW_YEARS.getTime() - now.getTime();

	// console.log(timedelta);
	// Diff in days
	let d = Math.floor(timedelta / (24 * 60 * 60 * 1000));

	// Diff in hours
	let h = Math.floor((timedelta % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
	// Diff in minutes
	let m = Math.floor((timedelta % (60 * 60 * 1000)) / (60 * 1000));

	// Diffrent in second
	let s = Math.floor((timedelta % (60 * 1000)) / 1000);

	const days = makeTwoDigitNumber(d);
	const hours = makeTwoDigitNumber(h);
	const minutes = makeTwoDigitNumber(m);
	const seconds = makeTwoDigitNumber(s);
	console.log("result: ", days, hours, minutes, seconds);

	// console.log(typeof days);
	// console.log(typeof hours);
	// console.log(typeof minutes);
	// console.log(typeof seconds);

	// stringToNumber(days);
	// stringToNumber(hours);
	// stringToNumber(minutes);
	// stringToNumber(seconds);
	// console.log("result: ", days, hours, minutes, seconds);
	// console.log(typeof days);
	// console.log(typeof hours);
	// console.log(typeof minutes);
	// console.log(typeof seconds);

	// parseInt(days, 10);

	// console.log("after conversion string to number", days);

	return {
		days,
		hours,
		minutes,
		seconds,
	};
};

const Main = () => {
	const [countdown, setCountdown] = useState(getTimedelta);
	const [loading, setLoading] = useState(true);
	const [isNewYear, setIsNewYear] = useState(false);

	// useEffect
	useEffect(() => {
		const interval = setInterval(() => {
			const timedelta = getTimedelta();
			setCountdown(timedelta);
			setLoading(false);

			if (timedelta.seconds < 0) {
				setIsNewYear(true);
			}
		}, 1000);
		return () => clearInterval(interval);
	});
	// Loading function
	if (loading) {
		return <div className='loading'>Loading...</div>;
	}

	// New year end
	if (isNewYear) {
		return <div className='newYear'> Happy New Year 2080.</div>;
	}
	return (
		<main>
			<div className='container'>
				<div className='show_text'>
					<p>Countdown to new year</p>
					<h1>2080</h1>
				</div>
				<div className='showtime'>
					<div className='flex'>
						<div className='font-big'>{countdown.days}</div>
						<div className='font-small'>DAYS</div>
					</div>
					<div className='flex'>
						<div className='font-big'>{countdown.hours}</div>
						<div className='font-small'>HOURS</div>
					</div>
					<div className='flex'>
						<div className='font-big'>{countdown.minutes}</div>
						<div className='font-small'>MINUTES</div>
					</div>
					<div className='flex'>
						<div className='font-big'>{countdown.seconds}</div>
						<div className='font-small'>SECOND</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Main;
