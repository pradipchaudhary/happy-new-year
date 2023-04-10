import React, { useEffect, useState } from "react";

const NEW_YEARS = new Date(2023, 3, 14, 0, 0, 0);
const getTimedelta = () => {
	const now = new Date();
	const timedelta = NEW_YEARS.getTime() - now.getTime();

	// console.log(timedelta);
	// Diff in days
	const days = Math.floor(timedelta / (24 * 60 * 60 * 1000));

	// Diff in hours
	const hours = Math.floor(
		(timedelta % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
	);
	// Diff in minutes
	const minutes = Math.floor((timedelta % (60 * 60 * 1000)) / (60 * 1000));

	// Diffrent in second
	const seconds = Math.floor((timedelta % (60 * 1000)) / 1000);

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
		return <h1>Loading...</h1>;
	}

	// New year end
	if (isNewYear) {
		return <h1> Happy New Year 2080.</h1>;
	}
	return (
		<main>
			<div className='container'>
				<h1>Happy New Year 2080</h1>
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
