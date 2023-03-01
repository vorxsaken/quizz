import { gsap } from "gsap";
import { useTransitionContext } from "@/context/TransitionProvider";
import { useRef } from "react";
import { useIsomorphicEffect } from "./useIsomophicEffect";

export default function AnimateInOut({ children, durationIn, durationOut, to, from, delayIn, delayOut, set, skipOutro, ease, className }) {
    const { timeline } = useTransitionContext();
    const ref = useRef();

    useIsomorphicEffect(() => {
        if (set) {
            gsap.set(ref.current, { ...set })
        }
        gsap.to(ref.current, {
            ...to,
            duration: durationIn || 1,
            delay: delayIn || 0,
            ease: ease || 'power4.out'
        })

        if (!skipOutro) {
            timeline.add(
                gsap.to(ref.current, {
                    ...from,
                    duration: durationOut || 1,
                    delay: delayOut || 0,
                    ease: ease || 'power4.in'
                })
            )
        }
    }, [])

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    )
}