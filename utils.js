import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function randomColor() {
    const color = ['#FF1700', '#FF8E00', '#FFE400', '#06FF00', '#7D0633', '#31112C', '#00ADB5', '#393E46'];
    const random = Math.floor(Math.random() * color.length);

    return color[random]
}

export const transformBorderAndTextSvg = (id, animatedOnMounted) => {
    return new Promise(resolve => {
        const elArray = gsap.utils.toArray(id);
        const transformTL = gsap.timeline({ paused: true });
        let query = null;
        let counter = 0;

        if (animatedOnMounted) {
            elArray.forEach((el) => {
                query = gsap.utils.selector(el);
                transformTL
                    .fromTo(query('#childText'), { y: -3, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, counter)
                    .fromTo(query('#childBorder'), { strokeDashoffset: 390 }, { strokeDashoffset: 0, duration: 0.5 }, '<0.1')

                counter += 0.1
            })

            return transformTL.play();
        }

        elArray.forEach((el) => {
            query = gsap.utils.selector(el);
            transformTL
                .to(query('#childText'), { y: 3, opacity: 0, duration: 0.5 }, counter)
                .to(query('#childBorder'), { strokeDashoffset: 390, duration: 0.5 }, '<0.1')

            counter += 0.1;
        })

        transformTL.play().then(() => {
            resolve(true)
        })
    })
}

export function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback])

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        if (delay !== null) {
            let id = setInterval(tick, delay)

            return () => clearInterval(id);
        }
    }, [delay])
}