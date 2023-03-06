import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { useState } from "react"
import { useInterval } from "@/utils"

function SliceAnimation({ children, animateIn, animateOut }) {
    const ref = useRef();

    useEffect(() => {
        const sliceSel = gsap.utils.selector(ref);
        const sliceArray = gsap.utils.toArray(sliceSel('#slice'))
        let count = 0;

        sliceArray.forEach(slice => {
            if (animateIn) {
                gsap.set(slice, { transformOrigin: 'right' });
                gsap.to(slice, { opacity: 1, rotateY: 0, duration: 0.5, delay: 0.08 * count });
                count++;
            }

            if (animateOut) {
                gsap.set(slice, { transformOrigin: 'left' });
                gsap.to(slice, { opacity: 0, rotateY: -90, duration: 0.5, delay: 0.08 * count });
                count++;
            }
        })

        count = 0;

    }, [animateIn, animateOut])

    return (
        <div ref={ref} className="container">
            {children}
        </div>
    )
}

export default SliceAnimation