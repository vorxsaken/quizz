import { useState } from "react"
import { gsap } from "gsap";
import { useInterval } from "@/utils";
import { useIsomorphicEffect } from "@/animation/useIsomophicEffect";

export default function Timer() {
    const [time, setTime] = useState(5);
    const [isStart, setIsStart] = useState(false);
    const [delay, setDelay] = useState(1000);
    gsap.ticker.lagSmoothing(0);

    useInterval(() => {
        if (isStart) setTime(time - 1);
        if (time < 2) setDelay(null);
    }, delay)

    useIsomorphicEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo('#bgTimerCircle', { strokeDashoffset: 500 }, { strokeDashoffset: 95, duration: 1, ease: "power1.out", delay: 1.5 });
        tl.fromTo('#timerCircle', { strokeDashoffset: 500 }, { strokeDashoffset: 95, duration: 1, ease: "power1.out" });
        tl.to('#timerCircle', {
            strokeDashoffset: 500, duration: (5 * time) / 5.35, ease: "none", onStart: () => {
                setIsStart(true);
            }
        })
    }, [])

    return (
        <>
            <svg width="150" height="150">
                <path id="bgTimerCircle" d="M 75 10 A 1 1 0 0 0 75 140 A 1 1 0 0 0 75 10 Z"
                    stroke="gray"
                    strokeDasharray={500}
                    strokeDashoffset={500}
                    strokeWidth={4}
                    strokeLinecap="round"
                    fill="none">
                </path>
                <text x="52" y="83" strokeDasharray={900} fill="white">{time.toString().length > 1 ? `0:${time}` : `0:0${time}`}</text>
                <defs>
                    <linearGradient id="grad1" x1="30%" x2="100%" y1="0%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "rgb(214, 19, 85)", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "rgb(249, 74, 41)", stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
                <path
                    id="timerCircle"
                    d="M 75 10 A 1 1 0 0 0 75 140 A 1 1 0 0 0 75 10 Z"
                    strokeLinecap="round"
                    strokeDasharray={500}
                    strokeDashoffset={500}
                    stroke="url(#grad1)"
                    strokeWidth={12}
                    fill="none"
                >
                </path>
            </svg>
        </>
    )
}