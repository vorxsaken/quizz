import SliceAnimation from "@/animation/SliceAnimation";
import { useIsomorphicEffect } from "@/animation/useIsomophicEffect";
import { useState } from "react";

function Slice({ children, delayIn, delayOut, style}) {
    const [animateIn, setAnimatedIn] = useState(false)
    const [animateOut, setAnimatedOut] = useState(false)

    useIsomorphicEffect(() => {
        const animateInTimeOut = setTimeout(() => {
            setAnimatedIn(true)
        }, delayIn * 1000)

        const animateOutTimeOut = setTimeout(() => {
            setAnimatedOut(true)
        }, delayOut * 1000)

        return () => {
            clearTimeout(animateInTimeOut);
            clearTimeout(animateOutTimeOut);
        }
    }, [])

    return (
        <SliceAnimation
            animateIn={animateIn}
            animateOut={animateOut}
        >
            <div className="container container--attached container--absolute" style={{...style}}>
                { children }
            </div>
        </SliceAnimation>
    )
}

export default Slice