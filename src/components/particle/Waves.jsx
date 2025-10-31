import React, { useState, useEffect } from "react";

const createWave = () => ({
    id: Math.random(),
    startX: Math.random() * 1000,
    y: 25 + Math.random() * 200,
    amplitude: 10 + Math.random() * 10,
    wavelength: 100 + Math.random() * 100,
    width: 200 + Math.random() * 200,
    speed: Math.random() * 0.5,
    phase: Math.random() * Math.PI * 2,
    life: 1000 + Math.random() * 300,
    age: 0,
    opacity: 0,
    fadeIn: true,
    x: 0
});

export default function Waves2D() {
    const [waves, setWaves] = useState([]);

    // Neue Welle alle 500ms
    useEffect(() => {
        const spawn = setInterval(() => {
            setWaves((prev) => [...prev, createWave()]);
        }, 1000);
        return () => clearInterval(spawn);
    }, []);

    // Animations-Loop
    useEffect(() => {
        let raf;

        const animate = () => {
            setWaves((prev) =>
                prev
                    .map((w) => {
                        const newAge = w.age + 1;
                        let newOpacity = w.opacity;

                        // Fade In / Fade Out
                        if (w.fadeIn && newAge < 30) {
                            newOpacity = newAge / 30;
                        } else if (newAge > w.life - 30) {
                            newOpacity = (w.life - newAge) / 30;
                        } else {
                            newOpacity = 1;
                        }

                        return {
                            ...w,
                            age: newAge,
                            x: w.x + w.speed,
                            opacity: newOpacity,
                        };
                    })
                    .filter((w) => w.age < w.life) // remove old waves
            );

            raf = requestAnimationFrame(animate);
        };

        raf = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(raf);
    }, []);

    return (
        <svg
            className="absolute bottom-[80px] left-0 w-full h-[250px] pointer-events-none"
            viewBox="0 0 1000 250"
            preserveAspectRatio="none"
        >
            {waves.map((wave) => {
                const step = 5;

                let path = "";
                for (let x = 0; x <= wave.width; x += step) {
                    const y =
                        wave.y +
                        wave.amplitude *
                        Math.sin((2 * Math.PI * (x + wave.x)) / wave.wavelength + wave.phase);
                    path += x === 0 ? `M${wave.startX + x} ${y}` : ` L${wave.startX + x} ${y}`;
                }

                return (
                    <path
                        key={wave.id}
                        d={path}
                        stroke="#09090b"
                        strokeWidth="2"
                        fill="transparent"
                        opacity={wave.opacity}
                    />
                );
            })}
        </svg>
    );
}
