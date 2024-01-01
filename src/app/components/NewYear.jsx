"use client";
import React, { useEffect, useState } from "react";

const NEW_YEARS = new Date(2023, 12, 31, 0, 0, 0);

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

    return {
        days,
        hours,
        minutes,
        seconds,
    };
};

const NewYear = () => {
    const [countdown, setCountdown] = useState(getTimedelta);
    const [loading, setLoading] = useState(true);
    const [isNewYear, setIsNewYear] = useState(false);

    // useEffect
    useEffect(() => {
        const interval = setInterval(() => {
            const timedelta = getTimedelta();
            setCountdown(timedelta);
            setLoading(false);

            console.log(new Date());
            if (timedelta.seconds < 0) {
                setIsNewYear(true);
            }
        }, 1000);
        return () => clearInterval(interval);
    });
    // Loading function
    if (loading) {
        return (
            <div className="loading w-screen h-screen flex justify-center items-center">
                Loading...
            </div>
        );
    }

    return (
        <main className="w-screen h-screen flex justify-center items-center">
            <div className="container">
                <div className="text-center">
                    <p className="text-2xl">Happy New Year.</p>
                    <h1 className="text-9xl font-bold p-2 mt-6 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                        2024
                    </h1>
                </div>
            </div>
        </main>
    );
};

export default NewYear;
