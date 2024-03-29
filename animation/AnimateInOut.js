import { gsap } from "gsap";
import { TransitionContext } from "@/context/TransitionContext";
import { useContext, useRef } from "react";
import { useIsomorphicEffect } from "./useIsomophicEffect";

export default function AnimateInOut({
    children,
    durationIn,
    durationOut,
    to,
    from,
    delayIn,
    delayOut,
    set,
    skipOutro,
    ease,
    className,
    onCompleate
}) {
    const { timeline } = useContext(TransitionContext);
    const ref = useRef();

    const addTimeline = () => {
        timeline.add(
            gsap.to(ref.current, {
                ...from,
                duration: durationOut || 1,
                delay: delayOut || 0,
                ease: ease || 'power4.out',
                onComplete: () => {
                    ref.current.style = onCompleate
                }
            }), 0
        )
    }

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

    }, [])

    useIsomorphicEffect(() => {
        if (!skipOutro) {
            addTimeline()
        }
    }, [skipOutro])

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    )
}