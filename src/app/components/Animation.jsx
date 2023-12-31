"use client";
import React, { useEffect } from "react";
import Fireworks from "fireworks-js";

const Animation = () => {
    useEffect(() => {
        const options = {
            sound: true,
            // Add your desired fireworks options here
        };

        const fireworks = new Fireworks();
        fireworks.start(options);

        return () => {
            fireworks.stop();
        };
    }, []);

    return (
        <div className="fireworks-container">
            <div
                id="fireworks-target"
                style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
            />
        </div>
    );
};

export default Animation;
