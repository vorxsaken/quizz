import { gsap } from "gsap";
import { useIsomorphicEffect } from "./useIsomophicEffect";
import { useRef } from "react";

export default function AnimateOut({ children, to, delay, duration, stagger, getOut = false }) {
    const ref = useRef();

    useIsomorphicEffect(() => {
        if (getOut) {
            gsap.to(ref.current, {
                ...to,
                delay: delay || 0,
                duration: duration || 0.5,
                stagger: 0.1,
                ease: 'power4.out'
            })
        }
    }, [getOut])

    return (
        <div ref={ref}>
            {children}
        </div>
    )
}