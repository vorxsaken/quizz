import { useState } from "react"
import { gsap } from "gsap";
import { useInterval } from "@/utils";
import { useIsomorphicEffect } from "@/animation/useIsomophicEffect";
import Circle from "./Circle";
import { useRouter } from "next/router";
import { useTranstionReducer } from "@/context/TransitionDispatcher";

export default function Timer({ getOut }) {
    const [time, setTime] = useState(10);
    const [isStart, setIsStart] = useState(false);
    const [delay, setDelay] = useState(1000);
    const [data, dispatch] = useTranstionReducer();
    const router = useRouter();
    gsap.ticker.lagSmoothing(0);

    useInterval(() => {
        if (isStart) setTime(time - 1);
        if (time < 1) setDelay(null);
    }, delay)

    useIsomorphicEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo('#bgTimerCircle',
            { strokeDashoffset: 500 },
            {
                strokeDashoffset: 95,
                duration: 1,
                ease: "power1.out",
                delay: 1.5
            });
        tl.fromTo('#timerCircle',
            { strokeDashoffset: 500 },
            {
                strokeDashoffset: 95,
                duration: 1,
                ease: "power1.out"
            }, '<0.3');
        tl.to('#timerCircle', {
            strokeDashoffset: 500,
            duration: (5 * time) / 5.5,
            ease: "none",
            onStart: () => {
                setIsStart(true);
            }
        })

    }, [])

    useIsomorphicEffect(() => {
        if (!getOut) {
            if (time < 0) {
                dispatch({ type: 'SET_SKIPOUTRO', skipOutro: false })
                router.replace('/getNextQuestion')
            }
        }
    }, [time])

    return (
        <>
            <Circle
                bgCircleId={"bgTimerCircle"}
                bgDashArray={500}
                bgDashOffset={500}
                bgStrokeWidth={4}
                bgColor={'gray'}
                text={
                    time > 0 ? time.toString().length > 1 ? `0:${time}` : `0:0${time}` : '0:00'
                }
                textColor={'white'}
                circleId={"timerCircle"}
                dashArray={500}
                dashOffset={500}
                strokeWidth={12}
                gradientStart={{ stopColor: "rgb(214, 19, 85)", stopOpacity: 1 }}
                gradientStop={{ stopColor: "rgb(249, 74, 41)", stopOpacity: 1 }}
            />
        </>
    )
}