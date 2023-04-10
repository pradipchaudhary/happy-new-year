import React from "react";

const NEW_YEARS_EVE = Date(2021, 11, 31, 0, 0, 0);
const getTimedelta = () => {
	const now = new Date();
	const timedelta = NEW_YEARS_EVE.getTime() - now.getTime();
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
	return (
		<main>
			<div className='container'>
				<div className='flex'>
					<div className='font-big'>13</div>
					<div className='font-small'>DAYS</div>
				</div>
				<div className='flex'>
					<div className='font-big'>13</div>
					<div className='font-small'>HOURS</div>
				</div>
				<div className='flex'>
					<div className='font-big'>13</div>
					<div className='font-small'>MINUTES</div>
				</div>
				<div className='flex'>
					<div className='font-big'>13</div>
					<div className='font-small'>SECOND</div>
				</div>
			</div>
		</main>
	);
};

export default Main;
